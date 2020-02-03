import { Pesquisa } from './pesquisa';
import { Posts } from './posts';
import { Comentario } from './comentario';
import { Ajuda } from './ajuda';

export class Users {
    idUsuario: number;
    nome: string;
    telefone: string;
    email: string;
    senha: string;
    pesquisa: Pesquisa[];
    postagem: Posts[];
    comentario: Comentario[];
    ajuda: Ajuda[];
}