import { IconType } from 'react-icons';

export type ISolutionsItem = {
  smallTitle: string;
  icon: JSX.Element;
  description: string;
  href: string;
};

export type IProductFeaturedItem = {
  title: string;
  description: string;
  href: string;
};

export type IProductItem = {
  bigTitle: string;
  childItems: {
    smallTitle: string;
    icon: JSX.Element;
    description: string;
    href: string;
  }[];
};

export type IPartnersItem = {
  smallTitle: string;
  icon: JSX.Element;
  description: string;
  href: string;
};

export type ICompanyItem = {
  bigTitle: string;
  childItems: {
    smallTitle: string;
    icon: JSX.Element;
    description: string;
    href: string;
  }[];
};

export type IMenuList = {
  name: string;
  subMenu?: React.ReactElement | React.ReactNode;
  subMenuExtraStyles?: string;
  isDropdown: boolean;
};

export type INavBarMenuList = {
  title: string;
  link: string;
  external?: boolean;
  subMenu?: {
    title?: string;
    featured?: boolean;
    items: {
      title: string;
      description: string;
      icon?: IconType;
      link: string;
      external?: boolean;
    }[];
  }[];
};
