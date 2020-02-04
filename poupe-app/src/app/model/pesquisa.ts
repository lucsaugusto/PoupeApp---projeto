import { Users } from './users';
import { Posts } from './posts';

export class Pesquisa{
    idPesquisa: number;
    texto: string;
    usuario: Users;
    postagem: Posts[];
}