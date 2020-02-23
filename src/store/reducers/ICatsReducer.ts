export interface cat {
  id?: string;
  name: string;
  breed: string;
  description: string;
}

export interface ICatsReducer {
  cats: cat[];
}
