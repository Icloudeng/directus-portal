import { forEach } from "modern-async";
import path from "path";
import { I18N_PATH } from "../constants";
import { writeFile, access } from "fs/promises";
import storage from "../storage";
import utils from "../utils";

const i18nFiles = [
  "docusaurus-plugin-content-docs/current.json",
  "docusaurus-theme-classic/footer.json",
  "docusaurus-theme-classic/navbar.json",
  "code.json",
];

/**
 * Create folders and create default files
 *
 * @param languages
 * @returns
 */
export function initDocFiles(languages: string[]) {
  return forEach(languages, async (lang) => {
    await forEach(i18nFiles, async (file) => {
      const file_path = path.join(I18N_PATH, lang, file);

      const exists = await storage.existsAsync(file_path);

      if (!exists) {
        await storage.mkdirAsync(utils.extractPathFile(file_path), {
          recursive: true,
          mode: storage.DEFAULT_DIR_MODE,
        });

        await storage.writeFileAsync(file_path, "{}", {
          encoding: "utf8",
          mode: storage.DEFAULT_FILE_MODE,
        });
      }
    });
  });
}
