import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingComponent } from './clothing/clothing.component';
import { AddClothingComponent } from './add-clothing/add-clothing.component';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { SearchVetementComponent } from './search-vetement/search-vetement.component';
import { ConnectComponent } from './connect/connect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { clothingGuard } from './guard/clothing.guard';
import { ConnectHttpComponent } from './connect-http/connect-http.component';
import { MarqueComponent } from './marque/marque.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'connect'},
  {path:"clothing", component:ClothingComponent},
  {path:"add-clothing", component:AddClothingComponent , canActivate: [clothingGuard]},
  {path: "updateVetement/:num", component:UpdateVetementComponent},
  {path: "search-clothing", component:SearchVetementComponent},
  { path:  "connect", component : ConnectComponent},
  { path:  "connecthttp", component : ConnectHttpComponent},
  {path: "dashboard", component: DashboardComponent},
  { path: "forbidden",component: ForbiddenComponent},
  {path: "marque",component:MarqueComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 //hethi nzidha bch t5ademli canactivate:
   providers :[clothingGuard]

})
export class AppRoutingModule { }
