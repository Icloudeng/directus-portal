import * as async from "modern-async";
import path from "path";
import { Buffer } from "buffer";
import { I18N_FILES, I18N_PATH, METAFILE_PATH } from "../constants";
import storage from "../storage";
import utils from "../utils";
import { MetaContent } from "./types";
import { NavbarContent } from "./navbar";
import { Translations } from "./translations";
import { MDLang } from "src/cms/type";

const i18nFiles = Object.values(I18N_FILES);

/**
 * Takes a file function and checks if file exist
 * whether parent directories exit or not
 *
 * @param file_path
 * @param content
 * @returns if file file exists before then return true
 */
async function ensureFileCreate(file_path: string, content = "{}") {
  const exists = await storage.existsAsync(file_path);

  if (!exists) {
    await storage.mkdirAsync(utils.extractPathFile(file_path), {
      recursive: true,
      mode: storage.DEFAULT_DIR_MODE,
    });

    await storage.writeFileAsync(file_path, content, {
      encoding: "utf-8",
      mode: storage.DEFAULT_FILE_MODE,
    });
    return null;
  }

  // means file exists before
  return true;
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
    await storage.writeFileAsync(file_path, content, {
      encoding: "utf-8",
      mode: storage.DEFAULT_FILE_MODE,
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
  const file = await storage.readAsync(file_path);

  if (!file.content) {
    await storage.mkdirAsync(utils.extractPathFile(file_path), {
      recursive: true,
      mode: storage.DEFAULT_DIR_MODE,
    });

    await storage.writeFileAsync(file_path, content, {
      encoding: "utf-8",
      mode: storage.DEFAULT_FILE_MODE,
    });

    return Buffer.from(content);
  }

  return file.content;
}

/**
 * Create docs i18n folders and create default files
 *
 * @param languages
 * @returns
 */
function initDocsI18nFiles(languages: string[]) {
  return async.forEach(languages, async (lang) => {
    await async.forEach(i18nFiles, async (file) => {
      const file_path = path.join(I18N_PATH, lang, file);
      await ensureFileCreate(file_path);
    });
  });
}

/**
 * Create docs meta.json file if not exist
 */
async function initDocsMetaFile() {
  await ensureFileCreate(METAFILE_PATH);
}

/**
 * Init docs apps files
 *
 * @param languages
 */
async function initDocsFiles(languages: MDLang[]) {
  const langs = languages.map((l) => l.code);
  await Promise.all([initDocsMetaFile(), initDocsI18nFiles(langs)]);
}

//  ========================== Store content ========================================//
/**
 * read meta file content and parse it (JSON)
 *
 * @returns
 */
async function metaContent(): Promise<MetaContent> {
  const metafile = await ensureReadFile(METAFILE_PATH);
  return JSON.parse(metafile as any);
}

/**
 * Write meta content in file
 * @param content
 */
async function storeMetaContent(content: MetaContent) {
  await storage.writeFileAsync(METAFILE_PATH, JSON.stringify(content), {
    encoding: "utf-8",
    mode: storage.DEFAULT_FILE_MODE,
  });
}

/**
 * Write translations content in file
 *
 * @param ikey
 * @param translations
 */
async function storeTranslationContent(
  ikey: keyof typeof I18N_FILES,
  translations: Translations
) {
  // translations
  const langs = Object.keys(translations);
  await async.forEach(langs, async (lang) => {
    const file_path = path.join(I18N_PATH, lang, I18N_FILES[ikey]);
    const buffer = await ensureReadFile(file_path);
    const file: Translations[string] = JSON.parse(buffer as any);

    await ensureWriteFile(
      file_path,
      JSON.stringify({
        ...file,
        ...(translations[lang] || {}),
      })
    );
  });
}

// ------------- store function --------------- //

/**
 * Store navbar content
 */
async function storeNavbarContent(content: NavbarContent) {
  const meta = await metaContent();
  meta.navbar = content.meta.navbar || {};

  // Store navbar content and translation
  await Promise.all([
    storeMetaContent(meta),
    storeTranslationContent("navbar", content.translations),
  ]);
}

/**
 * Export only what needed
 */
export { storeNavbarContent, initDocsFiles };
