import * as async from "modern-async";
import path from "path";
import glob from "glob";
import rimraf from "rimraf";
import {
  CONTENT_DOCS_PATH,
  DEFAULT_LANG,
  DOCSEARCH_SCRAPER_APP_PATH,
  I18N_CONTENT_DOCS_FOLDER,
  I18N_FILES,
  I18N_PATH,
  METAFILE_PATH,
} from "../../constants";
import storage from "../../storage";
import { MetaContent } from "../types";
import { NavbarContent } from "../navbar";
import { Translations } from "../translations";
import { MDLang } from "src/cms/type";
import { FooterContent } from "../footer";
import { I18nContent } from "../i18n";
import { NamespacesContent, NamespacesContentTree } from "../namespaces";
import yaml from "js-yaml";
import { DetailContent } from "../details";
import { StartUrls } from "../docsearch-scraper";
import utils from "../../utils";

//  ========================== Store content ========================================//
/**
 * read meta file content and parse it (JSON)
 *
 * @returns
 */
async function metaContent(): Promise<MetaContent> {
  const metafile = await storage.ensureReadFile(METAFILE_PATH);
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
    const buffer = await storage.ensureReadFile(file_path);
    const file: Translations[string] = JSON.parse(buffer as any);

    await storage.ensureWriteFile(
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
 * Store footer content
 */
async function storeFooterContent(content: FooterContent) {
  const meta = await metaContent();
  meta.footer = content.meta.footer || {};

  // Store footer content and translation
  await Promise.all([
    storeMetaContent(meta),
    storeTranslationContent("footer", content.translations),
  ]);
}

/**
 * Store Details content
 */
async function storeDetailContent(content: DetailContent) {
  const meta = await metaContent();

  meta.title = content.meta.title || "";
  meta.favicon = content.meta.favicon || "";
  meta.organizationName = content.meta.organizationName || "";
  meta.url = content.meta.url || "";

  // Store footer content and translation
  await storeMetaContent(meta);
}

/**
 * Store i18n content
 */
async function storeI18nContent(content: I18nContent) {
  const meta = await metaContent();
  meta.i18n = content.meta.i18n || {};

  // Store i18n content and translation
  await storeMetaContent(meta);
}

/**
 * Store sidebars content
 */
async function storeSidebarsContent(content: NamespacesContent["sidebars"]) {
  const meta = await metaContent();
  meta.sidebars = content || {};

  // Store i18n content and translation
  await storeMetaContent(meta);
}

/**
 * Store namespaces pages content
 *
 * @param content
 */
async function storeNamespacesContent(
  content: NamespacesContent,
  languages: MDLang[]
) {
  const defaultLang = DEFAULT_LANG;
  const MD_EXT = ".md";
  const langs = languages.map((l) => l.code);
  const tree = content.tree;
  const translations = content.translations;

  const getPath = (lang: string, ...files: string[]) =>
    path.join(I18N_PATH, lang, I18N_CONTENT_DOCS_FOLDER, ...files);

  /**
   * Retuns the docs meta (parent docs | folder)
   *
   * @param item
   * @param lang
   * @param params
   * @param additional
   * @returns
   */
  const docMeta = (
    item: NamespacesContentTree,
    lang: string,
    params: Record<string, any> = {},
    additional = {}
  ) => {
    const itemContent = item.content ? item.content[lang] : undefined;
    const meta = {
      sidebar_position: params.position || item.position,
      id: params.id || item.id,
      slug: item.slug,
      ...(itemContent
        ? {
            sidebar_label: itemContent.name,
            title: itemContent.name,
            description: itemContent.description || "",
          }
        : {}),
      ...additional,
    } as Record<string, string | number>;

    return `---\n${yaml.dump(meta)}\n---\n\n`;
  };

  /**
   * Store and create page and cotegories docs
   *
   * @param item
   * @param lang
   */
  const storeTree = async (item: NamespacesContentTree, lang: string) => {
    /**
     * If the loop lang the default system language,
     * then use the docs/ folder to write in
     */
    const content_path =
      lang === defaultLang
        ? path.join(CONTENT_DOCS_PATH, item.path)
        : getPath(lang, "current", item.path);

    // Handle folder
    if (item.type === "parent") {
      await storage.ensureFolderCreate(content_path);

      // Create parents details
      if (item.content) {
        const itemContent = item.content[lang];

        /**
         * Create overview markdown file if has show content to true
         */
        const overviewFileId = `${item.id}-overview`;
        if (item.show_content) {
          const overviewText =
            docMeta(item, lang, {
              position: 0,
              id: overviewFileId,
            }) + (itemContent.markdown || "");

          await storage.ensureWriteFile(
            path.join(content_path, overviewFileId + MD_EXT),
            overviewText
          );
        }

        // Create page folder meta (_category_.json)
        const detail = JSON.stringify({
          label: itemContent.name,
          position: item.position,
          customProps: {
            description: itemContent.description,
          },
          ...(item.show_content
            ? {
                link: {
                  type: "doc",
                  id: overviewFileId,
                },
              }
            : {}),
        });
        // write page folder meta file
        await storage.ensureWriteFile(
          path.join(content_path, "_category_.json"),
          detail
        );
      }
    }

    /**
     * Create md file if child
     */

    if (item.type === "child" && item.content) {
      const itemContent = item.content[lang];
      const mdText = docMeta(item, lang) + (itemContent.markdown || "");

      await storage.ensureWriteFile(content_path.slice(0, -1) + MD_EXT, mdText);
    }

    /**
     * Handle item childen if exist
     */
    await async.forEach(item.children, async (child) => {
      await storeTree(child, lang);
    });
  };

  await Promise.all([
    storeTranslationContent("current", translations),
    async.forEach(tree, async (item) => {
      await async.forEach(langs, async (lang) => {
        await storeTree(item, lang);
      });
    }),
  ]);
}

/**
 * Store Docsearch scraper URLs configs
 *
 * @param urls
 */
async function storeDocSearchScraperContent(urls: StartUrls[]) {
  await storage.ensureWriteFile(
    path.join(DOCSEARCH_SCRAPER_APP_PATH, "meta/start-urls.json"),
    JSON.stringify(urls)
  );
}

/**
 * Remove folder and file correspoding to
 *
 * @param ids
 */
async function unlinkPagesAndNamespacesFilesContent(ids: string[]) {
  if (ids.length === 0) {
    return Promise.resolve();
  }

  const unlinkByCwd = (cwd: string) =>
    new Promise<void>((resolve) => {
      const globIds = ids.map((id) => {
        const nodeId = utils.strToBase64(id);
        return `${nodeId}*`;
      });

      glob(
        `**/+(${globIds.join("|")})`,
        { absolute: true, cwd },
        async function (er, files) {
          if (er) return;

          resolve(
            await async.forEach(files, (file) => {
              /**
               * Remove file
               */
              return new Promise<any>((reslv) => rimraf(file, reslv));
            })
          );
        }
      );
    });

  /**
   * For each docs content dir (i18n and docs)
   */
  await async.forEach([I18N_PATH, CONTENT_DOCS_PATH], async (cwd) => {
    await unlinkByCwd(cwd);
  });
}

/**
 * Export only what needed
 */
export {
  storeNavbarContent,
  storeFooterContent,
  storeI18nContent,
  storeNamespacesContent,
  storeSidebarsContent,
  storeDetailContent,
  storeDocSearchScraperContent,
  unlinkPagesAndNamespacesFilesContent,
};
