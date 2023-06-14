import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent implements OnInit {
  @Input() data: any[] = [];
  @Output() onChangeBgImg: EventEmitter<string> = new EventEmitter();

  selected: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

  prev(): void {
    if (this.selected > 0) {
      this.selected--;
      this.emitChangeBgImg();
    }
  }

  next(): void {
    if (this.selected < this.data.length - 1) {
      this.selected++;
      this.emitChangeBgImg();
    } else {
      this.selected = 0; // Reiniciar
      this.emitChangeBgImg();
    }
  }

  emitChangeBgImg(): void {
    this.onChangeBgImg.emit(this.data[this.selected].img);
  }
}

