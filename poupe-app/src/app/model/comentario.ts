import { Users } from './users';
import { Posts } from './posts';

export class Comentario {
    idComentario: number;
    texto: string;
    usuario: Users;
    postagem: Posts;
}