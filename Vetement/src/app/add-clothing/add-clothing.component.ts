import { Component } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { ClothingService } from '../services/clothing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from '../model/marque.model';
@Component({
  selector: 'app-add-clothing',
  templateUrl: './add-clothing.component.html',
  styleUrls: ['./add-clothing.component.css']
})
export class AddClothingComponent {
  newVet =new Vetement;
  newMrq=new Marque;
  newId!:number;
  marques = this.VetmentServ.listMarques();
  constructor (private actRoute:ActivatedRoute, private rout:Router, private VetmentServ:ClothingService) { }
  ajouterVet() {
  this.newMrq = this.VetmentServ.viewMarque(this.newId);
  this.newVet.mrq=this.newMrq;
  this.VetmentServ.addVetement(this.newVet);
  this.rout.navigate(['clothing']);
  }
}
