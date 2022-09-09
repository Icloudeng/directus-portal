import { createContext, useContext } from 'react';
import { MDLanguage, MDTopbarNew, MDTopbarLink } from '@/cms/items';

export type ISharedData = {
  languages: MDLanguage[];
  tb_links: MDTopbarLink[];
  user_language: string;
  tp_news: MDTopbarNew[];
};

export const sharedDataContext = createContext<ISharedData>({} as ISharedData);

export const SharedDataProvider = sharedDataContext.Provider;
export const SharedDataConsumer = sharedDataContext.Consumer;

export const useSharedData = () => useContext(sharedDataContext);
