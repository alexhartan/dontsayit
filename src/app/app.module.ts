import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SolutionsInputComponent } from './solutions-input/solutions-input.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SolutionsInputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
