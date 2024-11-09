import { Injectable } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { Marque } from '../model/marque.model';
@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  tab_vet: Vetement[]; 
  tab_mrq: Marque[];
  constructor() {
  this.tab_vet = [
    { id: 1, nom: "T-shirt", description: "Cotton T-shirt", taille: "M", couleur: "Blue", prix: 10.99 , mrq:{ idMarque:1, nomMarque:"Prada", 
    paysOrigine:"Italy"}},
    { id: 2, nom: "Jeans", description: "Slim-fit Jeans", taille: "32", couleur: "Black", prix: 29.99 , mrq:{ idMarque:2, nomMarque:"Versace", 
    paysOrigine:"Italy"}},
    { id: 3, nom: "Dress", description: "Elegant Dress", taille: "S", couleur: "Red", prix: 49.99 , mrq:{ idMarque:3, nomMarque:"Louis Vuitton", 
    paysOrigine:"France"} },
    { id: 4, nom: "Shoes", description: "Running Shoes", taille: "10", couleur: "White", prix: 59.99, mrq:{ idMarque:4, nomMarque:"Gucci", 
    paysOrigine:"Italy"} }  ]
    this.tab_mrq = [
      { idMarque:1, nomMarque:"Prada", paysOrigine:"Italy"},
      { idMarque:2, nomMarque:"Versace", paysOrigine:"Italy"},
      { idMarque:3, nomMarque:"Louis Vuitton", paysOrigine:"France"},
      { idMarque:4, nomMarque:"Gucci", paysOrigine:"Italy"}
                   ]
  }

listvetements(): Vetement[] {
  return this.tab_vet;
}
addVetement(v:Vetement): void
  {
    this.tab_vet.push(v);//pour ajouter cet objet à la fin du tableau
    console.log(v.nom);
  }
delVet(v:Vetement):void
  {
    const pos= this.tab_vet.indexOf(v);
    if(pos != -1)
    {
      this.tab_vet.splice(pos,1);
    }
  }
  viewClothing (num : number) : Vetement {
    return this.tab_vet.find(v => v.id==num)!
    }
  editClothing(v:Vetement)
  {
    
      this.delVet(v);
      this.addVetement(v);
    
    
  }  
  listMarques():Marque[]
  {
    return this.tab_mrq;
  }
  viewMarque(num:number):Marque
  {
    return this.tab_mrq.find(v => v.idMarque==num)!
  }
  getNbVetements(): number {
    return this.tab_vet.length;
  }

  getNbMarques(): number {
    return this.tab_mrq.length;
  }

  getAvgPrix(): number {
   let moyenne=0;
   this.tab_vet.forEach(v=>moyenne+=v.prix);
   return moyenne/this.getNbVetements();

}
}