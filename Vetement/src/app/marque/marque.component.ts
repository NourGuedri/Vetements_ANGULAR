import { Component } from '@angular/core';
import { Marque } from '../model/marque.model';
import { ClothingService } from '../services/clothing.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent {
  tab_mrq:Marque[];
  constructor(private VetementServ : ClothingService ,public authServ : AuthService) {
    this.tab_mrq = VetementServ.listMarques();
    }
}
