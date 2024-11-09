import { Component } from '@angular/core';
import { ClothingService } from '../services/clothing.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nbVet = 0;
  nbMrq = 0;
  avgPrix = 0;
  nbUser= 0;
  constructor(private ClothingServ : ClothingService, private  authServ:AuthService) {
     this.nbVet = ClothingServ.getNbVetements()
     this.nbMrq = ClothingServ.getNbMarques()
     this.avgPrix = ClothingServ.getAvgPrix()
     this.nbUser = authServ.calculNbUsers();
     }
}
