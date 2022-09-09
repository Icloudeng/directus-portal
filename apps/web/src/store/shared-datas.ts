import { createContext, useContext } from 'react';
import { MDLanguages, MDTopbarNews, MDTopbarLinks } from '@/cms/items';

export type ISharedData = {
  languages: MDLanguages[];
  tb_links: MDTopbarLinks[];
  user_language: string;
  tp_news: MDTopbarNews[];
};

export const sharedDataContext = createContext<ISharedData>({} as ISharedData);

export const SharedDataProvider = sharedDataContext.Provider;
export const SharedDataConsumer = sharedDataContext.Consumer;

export const useSharedData = () => useContext(sharedDataContext);
