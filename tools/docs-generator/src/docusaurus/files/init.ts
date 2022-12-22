import path from "path";
import * as async from "modern-async";
import { I18N_FILES, I18N_PATH, METAFILE_PATH } from "../../constants";
import { MDLang } from "../../cms/type";
import storage from "../../storage";

const i18nFiles = Object.values(I18N_FILES);

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
      await storage.ensureFileCreate(file_path);
    });
  });
}

/**
 * Create docs meta.json file if not exist
 */
async function initDocsMetaFile() {
  await storage.ensureFileCreate(METAFILE_PATH);
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

export { initDocsFiles };
