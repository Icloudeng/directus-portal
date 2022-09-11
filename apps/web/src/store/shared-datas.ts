import { createContext, useContext } from 'react';
import { QShareDataType } from '@/cms/items';

export type ISharedData = QShareDataType & {
  user_language: string;
};

export const sharedDataContext = createContext<ISharedData>({} as ISharedData);

export const SharedDataProvider = sharedDataContext.Provider;
export const SharedDataConsumer = sharedDataContext.Consumer;

export const useSharedData = () => useContext(sharedDataContext);
