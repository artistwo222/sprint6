import { Component } from '@angular/core';
import frasesData from "../../app/data/frases.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isOn: boolean = false;
  frases = frasesData;
  backgroundImage: string = "";

  constructor() {
    console.log(this.frases);
  }

  changeBgImg(evento: string) {
    let fondo: HTMLElement | any = document.getElementById("fondoEscena");
    fondo.style.backgroundImage = `url('${evento}')`;
  }
}
