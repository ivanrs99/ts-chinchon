import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.page.html',
  styleUrls: ['./clasificacion.page.scss'],
})
export class ClasificacionPage implements OnInit {
  vic:number=0;
  vic2:number=0;
  vic3:number=0;
  vic4:number=0;
  vic11:number=0;
  vic22:number=0;
  vic33:number=0;
  vic44:number=0;
  vic111:number=0;
  vic222:number=0;
  vic333:number=0;
  vic444:number=0;
  constructor(public platform: Platform) {
    this.recuperar_vic();
    this.recuperar_vic2();
    this.recuperar_vic3();
  }

  ngOnInit() {

  }

  recuperar_vic(){
    let promesa = new Promise ((resolv, reject) =>{
      if (this.platform.is("cordova")){ //estamos en el móvil
          this.vic=JSON.parse(window.localStorage.getItem("vic3ivan"));
          this.vic2=JSON.parse(window.localStorage.getItem("vic3sole"));
          this.vic3=JSON.parse(window.localStorage.getItem("vic3jose"));
          this.vic4=JSON.parse(window.localStorage.getItem("vic3xise"));
        } else { //estamos en el navegador
          if( localStorage.getItem("vic3ivan")){
            this.vic = JSON.parse(localStorage.getItem("vic3ivan"));
          }
          if(localStorage.getItem("vic3sole")){
            this.vic2 = JSON.parse(localStorage.getItem("vic3sole"));
          }
          if(localStorage.getItem("vic3jose")){
            this.vic3 = JSON.parse(localStorage.getItem("vic3jose"));
          }
          if(localStorage.getItem("vic3xise")){
            this.vic4 = JSON.parse(localStorage.getItem("vic3xise"));
          }
          resolv();
      }
    });
    return promesa;
  }

  recuperar_vic2(){
    let promesa = new Promise ((resolv, reject) =>{
      if (this.platform.is("cordova")){ //estamos en el móvil
          this.vic11=JSON.parse(window.localStorage.getItem("vic4ivan"));
          this.vic22=JSON.parse(window.localStorage.getItem("vic4sole"));
          this.vic33=JSON.parse(window.localStorage.getItem("vic4jose"));
          this.vic44=JSON.parse(window.localStorage.getItem("vic4xise"));
        } else { //estamos en el navegador
          if( localStorage.getItem("vic4ivan")){
            this.vic11 = JSON.parse(localStorage.getItem("vic4ivan"));
          }
          if(localStorage.getItem("vic4sole")){
            this.vic22 = JSON.parse(localStorage.getItem("vic4sole"));
          }
          if(localStorage.getItem("vic4jose")){
            this.vic33 = JSON.parse(localStorage.getItem("vic4jose"));
          }
          if(localStorage.getItem("vic4xise")){
            this.vic44 = JSON.parse(localStorage.getItem("vic4xise"));
          }
          resolv();
      }
    });
    return promesa;
  }

  recuperar_vic3(){
    let promesa = new Promise ((resolv, reject) =>{
      if (this.platform.is("cordova")){ //estamos en el móvil
          this.vic111=JSON.parse(window.localStorage.getItem("vic2ivan"));
          this.vic222=JSON.parse(window.localStorage.getItem("vic2sole"));
          this.vic333=JSON.parse(window.localStorage.getItem("vic2jose"));
          this.vic444=JSON.parse(window.localStorage.getItem("vic2xise"));
        } else { //estamos en el navegador
          if( localStorage.getItem("vic2ivan")){
            this.vic111 = JSON.parse(localStorage.getItem("vic2ivan"));
          }
          if(localStorage.getItem("vic2sole")){
            this.vic222 = JSON.parse(localStorage.getItem("vic2sole"));
          }
          if(localStorage.getItem("vic2jose")){
            this.vic333 = JSON.parse(localStorage.getItem("vic2jose"));
          }
          if(localStorage.getItem("vic2xise")){
            this.vic444 = JSON.parse(localStorage.getItem("vic2xise"));
          }
          resolv();
      }
    });
    return promesa;
  }
}
