import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
  standalone: false
})
export class BuscadorComponent  implements OnInit {

  @Output() buscador = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  public goSearchAndFetch(event: any): void{

    this.buscador.emit(event.target.value);

  }

}
