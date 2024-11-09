import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ClothingComponent } from './clothing/clothing.component';
import { AddClothingComponent } from './add-clothing/add-clothing.component';
import { FormsModule } from '@angular/forms';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { SearchVetementComponent } from './search-vetement/search-vetement.component';
import { ConnectComponent } from './connect/connect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ConnectHttpComponent } from './connect-http/connect-http.component';
import { MarqueComponent } from './marque/marque.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClothingComponent,
    AddClothingComponent,
    UpdateVetementComponent,
    SearchVetementComponent,
    ConnectComponent,
    DashboardComponent,
    ForbiddenComponent,
    ConnectHttpComponent,
    MarqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
