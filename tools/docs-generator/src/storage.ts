import fs from "fs";
import * as fsPromises from "fs/promises";
import path from "path";
import { Readable } from "stream";
import utils from "./utils";

const DEFAULT_DIR_MODE = 0o755;
const DEFAULT_FILE_MODE = 0o644;

/**
 * Returns true if file exists.
 * @param {string} file
 * @return {Promise<boolean>}
 * @async
 * @alias module:storage.existsAsync
 * @see module:storage.exists
 */
const existsAsync = (file: string) =>
  fsPromises.access(file, fs.constants.F_OK).then(
    () => true,
    () => false
  );

/**
 * Returns true if file exists.
 * @param {string} file
 * @return {Promise<boolean>}
 * @async
 * @alias module:storage.existsAsync
 * @see module:storage.exists
 */
const readAsync = async (file: string) => {
  let content: Buffer | null = null;
  try {
    content = await fsPromises.readFile(file);
  } catch (error: any) {
    if (error.code === "ENOENT") {
      return {
        content: null,
      };
    }
    throw error;
  }

  return {
    content: content,
  };
};

/**
 * Node.js' [fsPromises.rename]{@link https://nodejs.org/api/fs.html#fspromisesrenameoldpath-newpath}
 * @function
 * @param {string} oldPath
 * @param {string} newPath
 * @return {Promise<void>}
 * @alias module:storage.renameAsync
 * @async
 */
const renameAsync = fsPromises.rename;

/**
 * Node.js' [fsPromises.writeFile]{@link https://nodejs.org/api/fs.html#fspromiseswritefilefile-data-options}.
 * @function
 * @param {string} path
 * @param {string} data
 * @param {object} [options]
 * @return {Promise<void>}
 * @alias module:storage.writeFileAsync
 * @async
 */
const writeFileAsync = fsPromises.writeFile;

/**
 * Node.js' [fs.createWriteStream]{@link https://nodejs.org/api/fs.html#fscreatewritestreampath-options}.
 * @function
 * @param {string} path
 * @param {Object} [options]
 * @return {fs.WriteStream}
 * @alias module:storage.writeFileStream
 */
const writeFileStream = fs.createWriteStream;

/**
 * Node.js' [fsPromises.unlink]{@link https://nodejs.org/api/fs.html#fspromisesunlinkpath}.
 * @function
 * @param {string} path
 * @return {Promise<void>}
 * @async
 * @alias module:storage.unlinkAsync
 */
const unlinkAsync = fsPromises.unlink;

/**
 * Node.js' [fsPromises.appendFile]{@link https://nodejs.org/api/fs.html#fspromisesappendfilepath-data-options}.
 * @function
 * @param {string} path
 * @param {string} data
 * @param {object} [options]
 * @return {Promise<void>}
 * @alias module:storage.appendFileAsync
 * @async
 */
const appendFileAsync = fsPromises.appendFile;

/**
 * Node.js' [fsPromises.readFile]{@link https://nodejs.org/api/fs.html#fspromisesreadfilepath-options}.
 * @function
 * @param {string} path
 * @param {object} [options]
 * @return {Promise<Buffer>}
 * @alias module:storage.readFileAsync
 * @async
 */
const readFileAsync = fsPromises.readFile;

/**
 * Node.js' [fs.createReadStream]{@link https://nodejs.org/api/fs.html#fscreatereadstreampath-options}.
 * @function
 * @param {string} path
 * @param {Object} [options]
 * @return {fs.ReadStream}
 * @alias module:storage.readFileStream
 */
const readFileStream = fs.createReadStream;

/**
 * Node.js' [fsPromises.mkdir]{@link https://nodejs.org/api/fs.html#fspromisesmkdirpath-options}.
 * @function
 * @param {string} path
 * @param {object} options
 * @return {Promise<void|string>}
 * @alias module:storage.mkdirAsync
 * @async
 */
const mkdirAsync = fsPromises.mkdir;

/**
 * Removes file if it exists.
 * @param {string} file
 * @return {Promise<void>}
 * @alias module:storage.ensureFileDoesntExistAsync
 * @async
 */
const ensureFileDoesntExistAsync = async (file: any) => {
  if (await existsAsync(file)) await unlinkAsync(file);
};

/**
 * Flush data in OS buffer to storage if corresponding option is set.
 * @param {object|string} options If options is a string, it is assumed that the flush of the file (not dir) called options was requested
 * @param {string} [options.filename]
 * @param {boolean} [options.isDir = false] Optional, defaults to false
 * @param {number} [options.mode = 0o644] Optional, defaults to 0o644
 * @return {Promise<void>}
 * @alias module:storage.flushToStorageAsync
 * @async
 */
const flushToStorageAsync = async (options: {
  filename: any;
  isDir?: any;
  mode: any;
}) => {
  let filename;
  let flags;
  let mode;
  if (typeof options === "string") {
    filename = options;
    flags = "r+";
    mode = DEFAULT_FILE_MODE;
  } else {
    filename = options.filename;
    flags = options.isDir ? "r" : "r+";
    mode = options.mode !== undefined ? options.mode : DEFAULT_FILE_MODE;
  }
  /**
   * Some OSes and/or storage backends (augmented node fs) do not support fsync (FlushFileBuffers) directories,
   * or calling open() on directories at all. Flushing fails silently in this case, supported by following heuristics:
   *  + isDir === true
   *  |-- open(<dir>) -> (err.code === 'EISDIR'): can't call open() on directories (eg. BrowserFS)
   *  `-- fsync(<dir>) -> (errFS.code === 'EPERM' || errFS.code === 'EISDIR'): can't fsync directory: permissions are checked
   *        on open(); EPERM error should only occur on fsync incapability and not for general lack of permissions (e.g. Windows)
   *
   * We can live with this as it cannot cause 100% dataloss except in the very rare event of the first time
   * database is loaded and a crash happens.
   */

  let filehandle, errorOnFsync, errorOnClose;
  try {
    filehandle = await fsPromises.open(filename, flags, mode);
    try {
      await filehandle.sync();
    } catch (errFS: any) {
      errorOnFsync = errFS;
    }
  } catch (error: any) {
    if (error.code !== "EISDIR" || !options.isDir) throw error;
  } finally {
    try {
      await filehandle?.close();
    } catch (errC: any) {
      errorOnClose = errC;
    }
  }
  if (
    (errorOnFsync || errorOnClose) &&
    !(
      (errorOnFsync.code === "EPERM" || errorOnClose.code === "EISDIR") &&
      options.isDir
    )
  ) {
    const e = new Error("Failed to flush to storage") as any;
    e.errorOnFsync = errorOnFsync;
    e.errorOnClose = errorOnClose;
    throw e;
  }
};

/**
 * Fully write or rewrite the datafile.
 * @param {string} filename
 * @param {string[]} lines
 * @param {number} [mode=0o644]
 * @return {Promise<void>}
 * @alias module:storage.writeFileLinesAsync
 * @async
 */
const writeFileLinesAsync = (
  filename: string,
  lines: any,
  mode = DEFAULT_FILE_MODE
) =>
  new Promise((resolve, reject) => {
    try {
      const stream = writeFileStream(filename, { mode: mode });
      const readable = Readable.from(lines);
      readable.on("data", (line: string) => {
        try {
          stream.write(line + "\n");
        } catch (err) {
          reject(err);
        }
      });
      readable.on("end", () => {
        stream.close((err: any) => {
          if (err) reject(err);
          else resolve(null);
        });
      });

      readable.on("error", (err: any) => {
        reject(err);
      });

      stream.on("error", (err: any) => {
        reject(err);
      });
    } catch (err) {
      reject(err);
    }
  });

/**
 * Fully write or rewrite the datafile, immune to crashes during the write operation (data will not be lost).
 * @param {string} filename
 * @param {string[]} lines
 * @param {object} [modes={ fileMode: 0o644, dirMode: 0o755 }]
 * @param {number} modes.dirMode
 * @param {number} modes.fileMode
 * @return {Promise<void>}
 * @alias module:storage.crashSafeWriteFileLinesAsync
 */
const crashSafeWriteFileLinesAsync = async (
  filename: string,
  lines: any,
  modes = { fileMode: DEFAULT_FILE_MODE, dirMode: DEFAULT_DIR_MODE }
) => {
  const tempFilename = filename + "~";

  await flushToStorageAsync({
    filename: path.dirname(filename),
    isDir: true,
    mode: modes.dirMode,
  });

  const exists = await existsAsync(filename);
  if (exists) await flushToStorageAsync({ filename, mode: modes.fileMode });

  await writeFileLinesAsync(tempFilename, lines, modes.fileMode);

  await flushToStorageAsync({ filename: tempFilename, mode: modes.fileMode });

  await renameAsync(tempFilename, filename);

  await flushToStorageAsync({
    filename: path.dirname(filename),
    isDir: true,
    mode: modes.dirMode,
  });
};

/**
 * Ensure the datafile contains all the data, even if there was a crash during a full file write.
 * @param {string} filename
 * @param {number} [mode=0o644]
 * @return {Promise<void>}
 * @alias module:storage.ensureDatafileIntegrityAsync
 */
const ensureDatafileIntegrityAsync = async (
  filename: string,
  mode = DEFAULT_FILE_MODE
) => {
  const tempFilename = filename + "~";

  const filenameExists = await existsAsync(filename);
  // Write was successful
  if (filenameExists) return;

  const oldFilenameExists = await existsAsync(tempFilename);
  // New database
  if (!oldFilenameExists)
    await writeFileAsync(filename, "", { encoding: "utf8", mode });
  // Write failed, use old version
  else await renameAsync(tempFilename, filename);
};

/**
 * Takes a file function and checks if file exist
 * whether parent directories exit or not
 *
 * @param file_path
 * @param content
 * @returns if file file exists before then return true
 */
async function ensureFileCreate(file_path: string, content = "{}") {
  const exists = await existsAsync(file_path);

  if (!exists) {
    await mkdirAsync(utils.extractPathFile(file_path), {
      recursive: true,
      mode: DEFAULT_DIR_MODE,
    });

    await writeFileAsync(file_path, content, {
      encoding: "utf-8",
      mode: DEFAULT_FILE_MODE,
    });
    return null;
  }

  // means file exists before
  return true;
}

async function ensureFolderCreate(path: string) {
  await mkdirAsync(path, {
    recursive: true,
    mode: DEFAULT_DIR_MODE,
  });
}

/**
 * This will ensure to write in file
 *
 * @param file_path
 * @param content
 */
async function ensureWriteFile(file_path: string, content: any) {
  const existed = await ensureFileCreate(file_path, content);

  /**
   * If file exist them write the content
   */
  if (existed) {
    await writeFileAsync(file_path, content, {
      encoding: "utf-8",
      mode: DEFAULT_FILE_MODE,
    });
  }
}

/**
 * Takes a file function and checks if file exist,
 * if not exist the create file and put content,
 * at the end return the content
 *
 * @param file_path
 * @param content
 */
async function ensureReadFile(file_path: string, content = "{}") {
  const file = await readAsync(file_path);

  if (!file.content) {
    await mkdirAsync(utils.extractPathFile(file_path), {
      recursive: true,
      mode: DEFAULT_DIR_MODE,
    });

    await writeFileAsync(file_path, content, {
      encoding: "utf-8",
      mode: DEFAULT_FILE_MODE,
    });

    return Buffer.from(content);
  }

  return file.content;
}

// Interface
export default {
  existsAsync,
  renameAsync,
  readAsync,
  writeFileAsync,
  writeFileLinesAsync,
  crashSafeWriteFileLinesAsync,
  appendFileAsync,
  readFileAsync,
  unlinkAsync,
  mkdirAsync,
  readFileStream,
  flushToStorageAsync,
  ensureDatafileIntegrityAsync,
  ensureFileDoesntExistAsync,
  DEFAULT_DIR_MODE,
  DEFAULT_FILE_MODE,
  ensureFileCreate,
  ensureFolderCreate,
  ensureWriteFile,
  ensureReadFile,
};
