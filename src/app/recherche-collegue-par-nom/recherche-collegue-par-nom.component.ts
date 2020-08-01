import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { matriculesMock } from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  @Input() col: Collegue;
  matriculesMock = matriculesMock;
  recherche = false;

  constructor() { }

  ngOnInit(): void {
  }

  rechercher(): void{
    this.recherche = true;
  }

}
