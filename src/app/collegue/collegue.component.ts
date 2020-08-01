import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input() col: Collegue;
  avantModifier = true;
  apresModifier = false;

  constructor() { }

  ngOnInit(): void {
  }

  modifier(): void{
    this.avantModifier = false;
    this.apresModifier = true;
    console.log('Modification du collègue');
  }

  valider(): void{
    this.apresModifier = false;
  }

  nouveauCollegue(): void {
    console.log('Création d\'un nouveau collègue');
  }

}
