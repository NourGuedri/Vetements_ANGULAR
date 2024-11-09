import { Component } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { ClothingService } from '../services/clothing.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-vetement',
  templateUrl: './update-vetement.component.html',
  styles: [
  ]
})
export class UpdateVetementComponent {
  vetementCourant=new Vetement();
  marques = this.clothingServ.listMarques();
  idMarqueModified!:number;
  constructor(private actRoute:ActivatedRoute, 
  private clothingServ:ClothingService ,private rout:Router) { }
  modifVetement () {
    this.vetementCourant.mrq=this.clothingServ.viewMarque(this.idMarqueModified)
     this.clothingServ.editClothing(this.vetementCourant)
     console.log ("Succès de modification vetement " +
    this.vetementCourant.id + " - " + this.vetementCourant.nom + " " +
    this.vetementCourant.description + " - " + this.vetementCourant.taille + " -" + this.vetementCourant.couleur+" - "+this.vetementCourant.prix)
     this.rout.navigate(['clothing'])
    }
    ngOnInit(): void {
     this.marques = this.clothingServ.listMarques()
     this.vetementCourant=this.clothingServ.viewClothing
    (this.actRoute.snapshot.params['num'])
     console.log("ID vetement à modifier "+this.vetementCourant.id)
     this.idMarqueModified = this.vetementCourant.mrq.idMarque
    }
}
