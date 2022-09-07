import { createContext } from 'react';
import { MDLanguages } from '@/cms/items';

export type ISharedData = {
  languages: MDLanguages[];
};

export const sharedDataContext = createContext<ISharedData>({} as ISharedData);

export const SharedDataProvider = sharedDataContext.Provider;
export const SharedDataConsumer = sharedDataContext.Consumer;
