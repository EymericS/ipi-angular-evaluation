import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PokeListComponent } from './components/poke-list.component';
import { PokeCardComponent } from './components/poke-card.component';
import { TopBarComponent } from './components/top-bar.component';

import { AdoptDropdownButtonComponent } from './components/adopt-dropdown/adopt-dropdown-button.component';
import { AdoptDropdownComponent } from './components/adopt-dropdown/adopt-dropdown.component';
import { AdoptionListComponent } from './components/adopt-dropdown/adoption-list.component';
import { AdoptionListItemComponent } from './components/adopt-dropdown/adoption-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokeCardComponent,
    TopBarComponent,
    AdoptDropdownButtonComponent,
    AdoptDropdownComponent,
    AdoptionListComponent,
    AdoptionListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
