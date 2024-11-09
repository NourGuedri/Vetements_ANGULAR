import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class clothingGuard implements CanActivate {
constructor (private authServ: AuthService, private rout : Router)
{}
 canActivate(route: ActivatedRouteSnapshot,
 state: RouterStateSnapshot): boolean {
 if (this.authServ.testerAdmin()) // on teste si l’utilisateur est admin
 return true; // on retourne vrai
 else
 this.rout.navigate(['/forbidden']);// on navigue vers l’url forbidden
 return false; // on retourne faux
 }

}

