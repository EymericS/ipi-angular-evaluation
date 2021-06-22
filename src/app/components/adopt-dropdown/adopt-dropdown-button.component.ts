import { Component } from '@angular/core';
import { AdoptionService } from 'src/app/adoption.service';
import { Pokemon } from 'src/app/models';

@Component({
  selector: 'app-adopt-dropdown-button',
  template: `
    <button 
      class="outlined" 
      (click)="showDropDown = !showDropDown"
    >
      {{adoptedPokemons.length}} ADOPTED
    </button>
    <app-adopt-dropdown *ngIf="showDropDown"></app-adopt-dropdown>
  `,
  styles: [`
    :host {
      position: relative;
      display: block;
    }
    button {
      color: white;
      border-color: white;
    }
  `]
})
export class AdoptDropdownButtonComponent {
  showDropDown = false;
  adoptedPokemons: Pokemon[] = [];

  constructor(
    public adoptionService: AdoptionService
  ) { 
    this.adoptionService.adoptionList
      .subscribe(list => this.adoptedPokemons = list);
  }
}
