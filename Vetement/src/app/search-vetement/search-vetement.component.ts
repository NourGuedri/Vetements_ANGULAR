import { Component } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { ClothingService } from '../services/clothing.service';
import { Marque } from '../model/marque.model';



@Component({
  selector: 'app-search-vetement',
  templateUrl: './search-vetement.component.html',
  styleUrls: ['./search-vetement.component.css']
})
export class SearchVetementComponent {
  list_mrq!:Marque[];
  mrqidRech!:Number;
  critere = "nom";
  list_clo:Vetement[];
  nomClo!:String;
  prix!:string;
 constructor(private ClothingServ:ClothingService) {
  this.list_clo = ClothingServ.listvetements()
  }
  chercherParNom(name: string): void {
    this.list_clo = this.ClothingServ.listvetements().filter(e => e.nom.toLowerCase().includes(name.toLowerCase()));
  }
  chercherParMarque(): void {
    this.list_clo = this.ClothingServ.listvetements()
    if(this.mrqidRech != 0)
    {
      this.list_clo = this.list_clo.filter(v => v.mrq.idMarque == this.mrqidRech);
    }
    
  }
  chercherParPrix(p:string): void {
    this.list_clo = this.ClothingServ.listvetements()
    if(p != "")
    {
      this.list_clo = this.list_clo.filter(v => v.prix <= Number(p));
    }
    
    
  }
  ngOnInit(){
    this.list_mrq = this.ClothingServ.listMarques()
    }  
}
 