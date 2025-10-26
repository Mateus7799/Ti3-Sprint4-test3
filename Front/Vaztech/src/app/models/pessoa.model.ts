export type PessoaResponse = {
  id: number;
  nome: string;
  cpfCnpj: string;
  dataNascimento: string | null;
  origem: string | null;
};

export type CadastrarPessoaBody = {
  nome: string;
  cpfCnpj: string;
  dataNascimento: string | null;
  origem: string | null;
};

export type AlterarPessoaBody = {
  id: number;
  nome: string;
  cpfCnpj: string;
  dataNascimento: string | null;
  origem: string | null;
};
