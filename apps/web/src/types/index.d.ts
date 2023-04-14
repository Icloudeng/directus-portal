module 'remark-kroki' {
  const remarkKroki: any;

  export { remarkKroki };
}

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

export type ICarouselData = {
  bigTitle: string;
  description: string;
  imgSrc: string | StaticImport;
  href: string;
  external?: boolean;
  items: {
    title: string;
    itemsList: string[];
  };
};

export type ICarouselButton = {
  enabled: boolean;
  onClick: React.MouseEventHandler;
};

export type IDotButton = {
  position: number;
  selected: boolean;
  onClick: React.MouseEventHandler;
};
