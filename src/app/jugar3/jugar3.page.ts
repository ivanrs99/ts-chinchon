import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jugar3',
  templateUrl: './jugar3.page.html',
  styleUrls: ['./jugar3.page.scss'],
})
export class Jugar3Page{
  j1: String;
  j2: String;
  j3: String;
  id1: String;
  id2: String;
  id3: String;
  listaIvan: number[]=[];
  listaSole: number[]=[];
  listaJose: number[]=[];
  puntuacionIvan:number=0;
  puntuacionSole:number=0;
  puntuacionJose:number=0;
  vic:number;
  vic2:number;
  vic3:number;
  audio: any;
  constructor(private router: Router, private route: ActivatedRoute, public platform: Platform, public alertCtrl: AlertController, public navCtrl: NavController, public storage: Storage) {
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

      if(JSON.parse(params.j3)=='ivan'){
        this.j3 = 'Iván';
      }else if(JSON.parse(params.j3)=='xise'){
        this.j3 = 'Xise';
      }else if(JSON.parse(params.j3)=='sole'){
        this.j3 = 'Sole';
      }else if(JSON.parse(params.j3)=='jose'){
        this.j3 = 'Jose';
      }

     this.id1 = JSON.parse(params.j1);
     this.id2 = JSON.parse(params.j2);
     this.id3 = JSON.parse(params.j3);
    });
  }

  actualizar(){
    let value : number = parseFloat((<HTMLInputElement>document.getElementById("valorIvan")).value);
    let value2 : number = parseFloat((<HTMLInputElement>document.getElementById("valorSole")).value);
    let value3 : number = parseFloat((<HTMLInputElement>document.getElementById("valorJose")).value);
    if(((<HTMLInputElement>document.getElementById("valorIvan")).value!='' || (<HTMLInputElement>document.getElementById("valorIvan")).disabled ==true)
    && ((<HTMLInputElement>document.getElementById("valorSole")).value!='' || (<HTMLInputElement>document.getElementById("valorSole")).disabled ==true)
    && ((<HTMLInputElement>document.getElementById("valorJose")).value!='' || (<HTMLInputElement>document.getElementById("valorJose")).disabled ==true)){
      (<HTMLInputElement>document.getElementById("valorIvan")).value='';
      (<HTMLInputElement>document.getElementById("valorSole")).value='';
      (<HTMLInputElement>document.getElementById("valorJose")).value='';
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
    }
    if((<HTMLInputElement>document.getElementById("valorJose")).disabled == true && (<HTMLInputElement>document.getElementById("valorSole")).disabled == true
        && (<HTMLInputElement>document.getElementById("valorIvan")).disabled == false){
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
                    window.localStorage.setItem("vic3"+this.id1,JSON.stringify(victorias));
                  } else {
                    localStorage.setItem("vic3"+this.id1, JSON.stringify(victorias) );
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
    }else if((<HTMLInputElement>document.getElementById("valorIvan")).disabled == true && (<HTMLInputElement>document.getElementById("valorJose")).disabled == true
        && (<HTMLInputElement>document.getElementById("valorSole")).disabled == false){
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
                    window.localStorage.setItem("vic3"+this.id2,JSON.stringify(victorias));
                  } else {
                    localStorage.setItem("vic3"+this.id2, JSON.stringify(victorias) );
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
    }else if((<HTMLInputElement>document.getElementById("valorIvan")).disabled == true && (<HTMLInputElement>document.getElementById("valorSole")).disabled == true
        && (<HTMLInputElement>document.getElementById("valorJose")).disabled == false){
          this.audio.play();
          this.alertCtrl.create({
            header: 'GANÓ '+this.j3+' !!',
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
                    window.localStorage.setItem("vic3"+this.id3,JSON.stringify(victorias));
                  } else {
                    localStorage.setItem("vic3"+this.id3, JSON.stringify(victorias) );
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
          this.vic=JSON.parse(window.localStorage.getItem("vic3"+this.id1));
          this.vic2=JSON.parse(window.localStorage.getItem("vic3"+this.id2));
          this.vic3=JSON.parse(window.localStorage.getItem("vic3"+this.id3));
        } else { //estamos en el navegador
          if( localStorage.getItem("vic3"+this.id1)){
            this.vic = JSON.parse(localStorage.getItem("vic3"+this.id1));
          }
          if(localStorage.getItem("vic3"+this.id2)){
            this.vic2 = JSON.parse(localStorage.getItem("vic3"+this.id2));
          }
          if(localStorage.getItem("vic3"+this.id3)){
            this.vic3 = JSON.parse(localStorage.getItem("vic3"+this.id3));
          }
          resolv();
      }
    });
    return promesa;
  }
}
