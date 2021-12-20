import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAddComponent } from './components /new-add/new-add.component';
import { FormComponent } from './form/form.component';
import { IndividualComponent } from './individual/individual.component';

@NgModule({
  declarations: [
    AppComponent,
    NewAddComponent,
    FormComponent,
    IndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
