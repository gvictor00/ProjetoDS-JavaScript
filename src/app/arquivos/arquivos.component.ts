import { Component, OnInit } from '@angular/core';
import { ARQUIVOS } from '../mock-arquivos';

arquivos = ARQUIVOS;

@Component({
  selector: 'app-arquivos',
  templateUrl: './arquivos.component.html',
  styleUrls: ['./arquivos.component.css']
})
export class ArquivosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
