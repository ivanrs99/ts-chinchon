import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
//import { NativeAudio } from '@ionic-native/native-audio';
@Component({
  selector: 'app-jugar2',
  templateUrl: './jugar2.page.html',
  styleUrls: ['./jugar2.page.scss'],
})
export class Jugar2Page {
  j1: String;
  j2: String;
  id1: String;
  id2: String;
  lista1: number[]=[];
  lista2: number[]=[];
  puntuacion1:number=0;
  puntuacion2:number=0;
  vic:number;
  vic2:number;
  audio: any;
  constructor( private router: Router, private route: ActivatedRoute, public platform: Platform, public alertCtrl: AlertController, public navCtrl: NavController, public storage: Storage) {
    this.audio = new Audio();
    this.audio.src = '../../assets/aplausos.mp3';
    this.audio.load();
    this.route.queryParams.subscribe(params => {
      if(JSON.parse(params.j1)=='ivan'){
        this.j1 = 'Iván';
      }else if(JSON.parse(params.j1)=='xise'){
        this.j1 = 'Xise';
      }else if(JSON.parse(params.j1)=='sole'){
        this.j1 = 'Sole';
      }else if(JSON.parse(params.j1)=='jose'){
        this.j1 = 'Jose';
      }

      if(JSON.parse(params.j2)=='ivan'){
        this.j2 = 'Iván';
      }else if(JSON.parse(params.j2)=='xise'){
        this.j2 = 'Xise';
      }else if(JSON.parse(params.j2)=='sole'){
        this.j2 = 'Sole';
      }else if(JSON.parse(params.j2)=='jose'){
        this.j2 = 'Jose';
      }

     this.id1 = JSON.parse(params.j1);
     this.id2 = JSON.parse(params.j2);
    });
  }

  actualizar(){
    let value : number = parseFloat((<HTMLInputElement>document.getElementById("valor1")).value);
    let value2 : number = parseFloat((<HTMLInputElement>document.getElementById("valor2")).value);
    if(((<HTMLInputElement>document.getElementById("valor1")).value!='' || (<HTMLInputElement>document.getElementById("valorIvan")).disabled ==true)
    && ((<HTMLInputElement>document.getElementById("valor2")).value!='' || (<HTMLInputElement>document.getElementById("valorSole")).disabled ==true)){
      (<HTMLInputElement>document.getElementById("valor1")).value='';
      (<HTMLInputElement>document.getElementById("valor2")).value='';
      if((<HTMLInputElement>document.getElementById("valor1")).disabled == false){
        this.puntuacion1+=value;
        this.lista1.push(this.puntuacion1);
        if(this.puntuacion1>101){(<HTMLInputElement>document.getElementById("valor1")).disabled = true}
      }
      if((<HTMLInputElement>document.getElementById("valor2")).disabled == false){
        this.puntuacion2+=value2;
        this.lista2.push(this.puntuacion2);
        if(this.puntuacion2>101){(<HTMLInputElement>document.getElementById("valor2")).disabled = true}
      }
    }
    if((<HTMLInputElement>document.getElementById("valor2")).disabled == true
        && (<HTMLInputElement>document.getElementById("valor1")).disabled == false){
          this.audio.play();
          this.alertCtrl.create({
            header: 'GANÓ '+this.j1+' !!',
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
                    window.localStorage.setItem("vic2"+this.id1,JSON.stringify(victorias));
                  } else {
                    localStorage.setItem("vic2"+this.id1, JSON.stringify(victorias) );
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
    }else if((<HTMLInputElement>document.getElementById("valor1")).disabled == true
        && (<HTMLInputElement>document.getElementById("valor2")).disabled == false){
          this.audio.play();
          this.alertCtrl.create({
            header: 'GANÓ '+this.j2+' !!',
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
                    window.localStorage.setItem("vic2"+this.id2,JSON.stringify(victorias));
                  } else {
                    localStorage.setItem("vic2"+this.id2, JSON.stringify(victorias) );
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
          this.vic=JSON.parse(window.localStorage.getItem("vic2"+this.id1));
          this.vic2=JSON.parse(window.localStorage.getItem("vic2"+this.id2));
        } else { //estamos en el navegador
          if( localStorage.getItem("vic2"+this.id1)){
            this.vic = JSON.parse(localStorage.getItem("vic2"+this.id1));
          }
          if(localStorage.getItem("vic2"+this.id2)){
            this.vic2 = JSON.parse(localStorage.getItem("vic2"+this.id2));
          }
          resolv();
      }
    });
    return promesa;
  }
}
