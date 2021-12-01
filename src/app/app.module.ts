import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankingTemplateComponent } from './component/banking-template/banking-template.component';
import { DetailsComponent } from './component/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    BankingTemplateComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
