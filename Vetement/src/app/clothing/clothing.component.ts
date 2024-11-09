import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { ClothingService } from '../services/clothing.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit{
  statusStyle ={'color':'red'};

  tab_vet : Vetement[];
  constructor(private VetementServ : ClothingService ,public authServ : AuthService) {
  this.tab_vet = VetementServ.listvetements();
  }
  suppVetement (v : Vetement) {
    let rep = confirm("Etes-vous sûr de vouloir supprimer cet vetement "+v.nom+"?");
if (rep) {
    this.VetementServ.delVet(v);
    console.log("Suppression avec succes :"+v.nom)
    }
  }
  ngOnInit(): void {
  }
}
