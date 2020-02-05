import { Pesquisa } from './pesquisa';
import { Posts } from './posts';
import { Comentario } from './comentario';
import { Ajuda } from './ajuda';

export class Users {
    constructor(
        public idUsuario: number,
        public nome: string,
        public telefone: string,
        public email: string,
        public senha: string,
        public pesquisa: Pesquisa[],
        public postagem: Posts[],
        public comentario: Comentario[],
        public ajuda: Ajuda[]) {
    }

}