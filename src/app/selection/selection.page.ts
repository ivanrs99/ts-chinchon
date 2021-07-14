import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage{
  ivan:boolean=false;
  xise:boolean=false;
  sole:boolean=false;
  jose:boolean=false;

  constructor(private router: Router, public navCtrl: NavController) { }

  play(){
    if(this.ivan && this.xise && this.sole && this.jose){
      this.router.navigate(['/jugar4'])
    }else{
      if(this.ivan && this.xise && this.sole && this.jose==false){
        let navigationExtras: NavigationExtras = {
          queryParams: {
            j1: JSON.stringify("ivan"),
            j2: JSON.stringify("xise"),
            j3: JSON.stringify("sole")
          }
        };
        this.router.navigate(['/jugar3'], navigationExtras);
      }else if(this.ivan && this.xise && this.sole==false && this.jose){
        let navigationExtras: NavigationExtras = {
          queryParams: {
            j1: JSON.stringify("ivan"),
            j2: JSON.stringify("xise"),
            j3: JSON.stringify("jose")
          }
        };
        this.router.navigate(['/jugar3'], navigationExtras);
      }else if(this.ivan && this.xise==false && this.sole && this.jose){
        let navigationExtras: NavigationExtras = {
          queryParams: {
            j1: JSON.stringify("ivan"),
            j2: JSON.stringify("sole"),
            j3: JSON.stringify("jose")
          }
        };
        this.router.navigate(['/jugar3'], navigationExtras);
      }else if(this.ivan==false && this.xise && this.sole && this.jose){
        let navigationExtras: NavigationExtras = {
          queryParams: {
            j1: JSON.stringify("xise"),
            j2: JSON.stringify("sole"),
            j3: JSON.stringify("jose")
          }
        };
        this.router.navigate(['/jugar3'], navigationExtras);
      }else{
        if(this.ivan && this.xise && this.sole==false && this.jose==false){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              j1: JSON.stringify("ivan"),
              j2: JSON.stringify("xise"),
            }
          };
          this.router.navigate(['/jugar2'], navigationExtras);
        }else if(this.ivan && this.xise==false && this.sole && this.jose==false){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              j1: JSON.stringify("ivan"),
              j2: JSON.stringify("sole"),
            }
          };
          this.router.navigate(['/jugar2'], navigationExtras);
        }else if(this.ivan && this.xise==false && this.sole==false && this.jose){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              j1: JSON.stringify("ivan"),
              j2: JSON.stringify("jose"),
            }
          };
          this.router.navigate(['/jugar2'], navigationExtras);
        }else if(this.ivan==false && this.xise && this.sole==false && this.jose){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              j1: JSON.stringify("xise"),
              j2: JSON.stringify("jose"),
            }
          };
          this.router.navigate(['/jugar2'], navigationExtras);
        }else if(this.ivan==false && this.xise && this.sole && this.jose==false){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              j1: JSON.stringify("sole"),
              j2: JSON.stringify("xise"),
            }
          };
          this.router.navigate(['/jugar2'], navigationExtras);
        }else if(this.ivan==false && this.xise==false && this.sole && this.jose){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              j1: JSON.stringify("sole"),
              j2: JSON.stringify("jose"),
            }
          };
          this.router.navigate(['/jugar2'], navigationExtras);
        }
      }
    }
  }
}
