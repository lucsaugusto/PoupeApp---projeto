import { Pesquisa } from './pesquisa';
import { Users } from './users';
import { Comentario } from './comentario';

export class Posts {
    idPostagem: number;
    titulo: string;
    texto: string;
    linkimg: string;
    dataInclusao: string;
    usuario: Users;
    pesquisa: Pesquisa;
    comentario: Comentario[];
}