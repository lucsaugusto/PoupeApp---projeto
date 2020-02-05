import { Pesquisa } from './pesquisa';
import { Users } from './users';
import { Comentario } from './comentario';

export class Posts {
    idPostagem: number;
    titulo: string;
    texto: string;
    linkimg: string;
    preco:  number;
    usuario: Users;
    pesquisa: Pesquisa;
    comentario: Comentario[];

    

}