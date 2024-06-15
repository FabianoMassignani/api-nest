export type IProductsResponse = {
  data: IProduct[];
};

export type IProduct = {
  id?: string;
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
  icms: number; // Imposto sobre Circulação de Mercadorias e Serviços
  fornecedor: string;
  marca: string;
  categoria: string;
  colecao: string;
  ncm: string;
  barcode: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type FindAllParams = {
  limit: number;
  offset: number;
};
