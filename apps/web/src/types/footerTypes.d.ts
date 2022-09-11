export type IFooterItemLinks = {
  bigTitle: string;
  childItems: {
    smallTitle: string;
    href: string;
  }[];
};

export type ISocialIcon = {
  icon: JSX.Element | string;
  href: string;
  title?: string;
};
