import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugar4',
  templateUrl: './jugar4.page.html',
  styleUrls: ['./jugar4.page.scss'],
})
export class Jugar4Page {

  listaIvan: number[]=[];
  listaSole: number[]=[];
  listaJose: number[]=[];
  listaXise: number[]=[];
  puntuacionIvan:number=0;
  puntuacionSole:number=0;
  puntuacionJose:number=0;
  puntuacionXise:number=0;
  vic:number;
  vic2:number;
  vic3:number;
  vic4:number;
  audio: any;
  constructor(private router: Router, public platform: Platform, public alertCtrl: AlertController, public navCtrl: NavController, public storage: Storage) {
    this.audio = new Audio();
    this.audio.src = '../../assets/aplausos.mp3';
    this.audio.load();
  }

  actualizar(){
    let value : number = parseFloat((<HTMLInputElement>document.getElementById("valorIvan")).value);
    let value2 : number = parseFloat((<HTMLInputElement>document.getElementById("valorSole")).value);
    let value3 : number = parseFloat((<HTMLInputElement>document.getElementById("valorJose")).value);
    let value4 : number = parseFloat((<HTMLInputElement>document.getElementById("valorXise")).value);
    if(((<HTMLInputElement>document.getElementById("valorIvan")).value!='' || (<HTMLInputElement>document.getElementById("valorIvan")).disabled ==true)
    && ((<HTMLInputElement>document.getElementById("valorSole")).value!='' || (<HTMLInputElement>document.getElementById("valorSole")).disabled ==true)
    && ((<HTMLInputElement>document.getElementById("valorJose")).value!='' || (<HTMLInputElement>document.getElementById("valorJose")).disabled ==true)
    && ((<HTMLInputElement>document.getElementById("valorXise")).value!='' || (<HTMLInputElement>document.getElementById("valorXise")).disabled ==true)){
      (<HTMLInputElement>document.getElementById("valorIvan")).value='';
      (<HTMLInputElement>document.getElementById("valorSole")).value='';
      (<HTMLInputElement>document.getElementById("valorJose")).value='';
      (<HTMLInputElement>document.getElementById("valorXise")).value='';
      if((<HTMLInputElement>document.getElementById("valorIvan")).disabled == false){
        this.puntuacionIvan+=value;
        this.listaIvan.push(this.puntuacionIvan);
        if(this.puntuacionIvan>101){(<HTMLInputElement>document.getElementById("valorIvan")).disabled = true}
      }
      if((<HTMLInputElement>document.getElementById("valorSole")).disabled == false){
        this.puntuacionSole+=value2;
        this.listaSole.push(this.puntuacionSole);
        if(this.puntuacionSole>101){(<HTMLInputElement>document.getElementById("valorSole")).disabled = true}
      }
      if((<HTMLInputElement>document.getElementById("valorJose")).disabled == false){
        this.puntuacionJose+=value3;
        this.listaJose.push(this.puntuacionJose);
        if(this.puntuacionJose>101){(<HTMLInputElement>document.getElementById("valorJose")).disabled = true}
      }
      if((<HTMLInputElement>document.getElementById("valorXise")).disabled == false){
        this.puntuacionXise+=value4;
        this.listaXise.push(this.puntuacionXise);
        if(this.puntuacionXise>101){(<HTMLInputElement>document.getElementById("valorXise")).disabled = true}
      }
    }
    if((<HTMLInputElement>document.getElementById("valorJose")).disabled == true && (<HTMLInputElement>document.getElementById("valorSole")).disabled == true && (<HTMLInputElement>document.getElementById("valorXise")).disabled == true
        && (<HTMLInputElement>document.getElementById("valorIvan")).disabled == false){
          this.audio.play();
          this.alertCtrl.create({
            header: 'GANÓ IVÁN!!',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  var victorias=0;
                  this.recuperar_vic();
                  console.log(this.vic);
                  if(this.vic!=null){victorias=this.vic}
                  else{victorias=0};
                  victorias+=1;
                  if (this.platform.is("cordova")){
                    window.localStorage.setItem("vic4ivan",JSON.stringify(victorias));
                  } else {
                    localStorage.setItem("vic4ivan", JSON.stringify(victorias) );
                  }
                  console.log(victorias);
                  this.audio.pause();
                  this.router.navigate(['/home']);
                }
              }
            ]
          }).then((alert)=>{
            alert.present();
          });
    }else if((<HTMLInputElement>document.getElementById("valorIvan")).disabled == true && (<HTMLInputElement>document.getElementById("valorJose")).disabled == true && (<HTMLInputElement>document.getElementById("valorXise")).disabled == true
        && (<HTMLInputElement>document.getElementById("valorSole")).disabled == false){
          this.audio.play();
          this.alertCtrl.create({
            header: 'GANÓ SOLE!!',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  var victorias=0;
                  this.recuperar_vic();
                  console.log(this.vic2);
                  if(this.vic2!=null){victorias=this.vic2}
                  else{victorias=0};
                  victorias+=1;
                  if (this.platform.is("cordova")){
                    window.localStorage.setItem("vic4sole",JSON.stringify(victorias));
                  } else {
                    localStorage.setItem("vic4sole", JSON.stringify(victorias) );
                  }
                  console.log(victorias);
                  this.audio.pause();
                  this.router.navigate(['/home']);
                }
              }
            ]
          }).then((alert)=>{
            alert.present();
          });
    }else if((<HTMLInputElement>document.getElementById("valorIvan")).disabled == true && (<HTMLInputElement>document.getElementById("valorSole")).disabled == true && (<HTMLInputElement>document.getElementById("valorXise")).disabled == true
        && (<HTMLInputElement>document.getElementById("valorJose")).disabled == false){
          this.audio.play();
          this.alertCtrl.create({
            header: 'GANÓ JOSE!!',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  var victorias=0;
                  this.recuperar_vic();
                  console.log(this.vic3);
                  if(this.vic3!=null){victorias=this.vic3}
                  else{victorias=0};
                  victorias+=1;
                  if (this.platform.is("cordova")){
                    window.localStorage.setItem("vic4jose",JSON.stringify(victorias));
                  } else {
                    localStorage.setItem("vic4jose", JSON.stringify(victorias) );
                  }
                  console.log(victorias);
                  this.audio.pause();
                  this.router.navigate(['/home']);
                }
              }
            ]
          }).then((alert)=>{
            alert.present();
          });
    }else if((<HTMLInputElement>document.getElementById("valorIvan")).disabled == true && (<HTMLInputElement>document.getElementById("valorSole")).disabled == true && (<HTMLInputElement>document.getElementById("valorJose")).disabled == true
        && (<HTMLInputElement>document.getElementById("valorXise")).disabled == false){
          this.audio.play();
          this.alertCtrl.create({
            header: 'GANÓ XISE!!',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  var victorias=0;
                  this.recuperar_vic();
                  console.log(this.vic4);
                  if(this.vic4!=null){victorias=this.vic4}
                  else{victorias=0};
                  victorias+=1;
                  if (this.platform.is("cordova")){
                    window.localStorage.setItem("vic4xise",JSON.stringify(victorias));
                  } else {
                    localStorage.setItem("vic4xise", JSON.stringify(victorias) );
                  }
                  console.log(victorias);
                  this.audio.pause();
                  this.router.navigate(['/home']);
                }
              }
            ]
          }).then((alert)=>{
            alert.present();
          });
    }
  }

  recuperar_vic(){
    let promesa = new Promise ((resolv, reject) =>{
      if (this.platform.is("cordova")){ //estamos en el móvil
          this.vic=JSON.parse(window.localStorage.getItem("vic4ivan"));
          this.vic2=JSON.parse(window.localStorage.getItem("vic4sole"));
          this.vic3=JSON.parse(window.localStorage.getItem("vic4jose"));
          this.vic4=JSON.parse(window.localStorage.getItem("vic4xise"));
        } else { //estamos en el navegador
          if( localStorage.getItem("vic4ivan")){
            this.vic = JSON.parse(localStorage.getItem("vic4ivan"));
          }
          if(localStorage.getItem("vic4sole")){
            this.vic2 = JSON.parse(localStorage.getItem("vic4sole"));
          }
          if(localStorage.getItem("vic4jose")){
            this.vic3 = JSON.parse(localStorage.getItem("vic4jose"));
          }
          if(localStorage.getItem("vic4xise")){
            this.vic4 = JSON.parse(localStorage.getItem("vic4xise"));
          }
          resolv();
      }
    });
    return promesa;
  }

}
