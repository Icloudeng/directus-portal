import type { ID, QueryOne } from "@directus/sdk";

export type DRTStatus = {
  id: ID;
  status: "published" | "draft" | "archived";
  date_created: string;
  date_updated?: string;
};

export type ButtonVariant = "primary" | "outline" | "ghost" | "light" | "dark";

export type DRTQueryT<T> = {
  [key in keyof T]: boolean;
};

type RecursiveObject<T> = T extends Date ? never : T extends object ? T : never;
export type BooleanValues<TModel> = {
  [Key in keyof TModel]: TModel[Key] extends RecursiveObject<TModel[Key]>
    ? BooleanValues<TModel[Key]>
    : string;
};

export type MDWithTranslation<T = unknown> = {
  translations: ({
    id: ID;
    languages_code: { code: string; name: string };
  } & T)[];
};

export type MDWithPointCoordinated =
  | {
      coordinates: [number, number][];
      type: "LineString" | "Polygon";
    }
  | {
      coordinates: [number, number];
      type: "Point";
    };

export type MDPointMap = {
  coordinates: [number, number];
  type: "Point";
};

export type MDWithPoint =
  | MDWithPointCoordinated
  | {
      geometries: MDWithPointCoordinated[];
      type: "GeometryCollection";
    };

export type MDWithAsset<T = unknown> = T & {
  id: string;
  src?: string;
  type?: string;
  width?: number;
  height?: number;
};

export type QueryWithTranslation<T> = {
  translations: T & {
    id: boolean;
    languages_code: {
      code: boolean;
      name: boolean;
    };
  };
};

export type I_MDWithUserTranslation<T> = {
  [k in keyof T]: k extends "translations"
    ? T[k] extends (infer L)[] | undefined
      ? L | undefined
      : never
    : T[k];
};

export type ValueOf<T> = T[keyof T];

export type MDQueryFields<T> = ValueOf<Pick<QueryOne<T>, "fields">>;

export type WithTranslation<T> = T & {
  [k in keyof T as `${string & k}_translations`]: `${string &
    T[k]}_translations`;
};

export type MDWithUserTranslation<T> = T extends (infer P)[]
  ? I_MDWithUserTranslation<P>[]
  : I_MDWithUserTranslation<T>;

export type MDTranslation = {
  [x: string]: string;
  languages_code: string;
};

export type MDHasM2A<T, C = string> = {
  id: ID;
  collection: C;
  item: T;
};

export type RepeaterBtn = {
  name: string;
  url: string;
  variant?: ButtonVariant;
  external: boolean;
};
