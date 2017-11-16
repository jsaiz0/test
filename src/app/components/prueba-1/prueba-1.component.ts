import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-1',
  templateUrl: './prueba-1.component.html',
  styleUrls: ['./prueba-1.component.scss']
})
export class Prueba1Component implements OnInit {

  public cols: number;
  public rowHeight: string;
  public tiles: Object[];

  constructor() {
    this.cols = 3;
    this.rowHeight = '2:1';
  }

  ngOnInit() {
    this.tiles = [
      { title: 'lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { title: 'lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      {  },
      { title: 'lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { title: 'lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { },
      { title: 'lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { },
      { title: 'lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    ];
  }

}
