export interface MetaData {
  title: string;
  description: string;
  url: string;
  name: string;
  image: string;
  type: string;
  date?: string;
}

export type PartialMetaData = Partial<MetaData>;
