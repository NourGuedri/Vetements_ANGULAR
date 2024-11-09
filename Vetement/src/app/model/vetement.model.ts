import { Marque } from "./marque.model";


export class Vetement {
    id!: number;
    nom!: string;
    description!: string;
    taille!: string;
    couleur!: string;
    prix!: number;
    mrq!:Marque;
}
