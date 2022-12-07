import { FooterContent } from "./footer";
import { I18nContent } from "./i18n";
import { NamespacesContent } from "./namespaces";
import { NavbarContent } from "./navbar";

export type MetaContent = {
  navbar: NavbarContent["meta"]["navbar"];
  footer: FooterContent["meta"]["footer"];
  i18n: I18nContent["meta"]["i18n"];
  sidebars: NamespacesContent["sidebars"];
};
