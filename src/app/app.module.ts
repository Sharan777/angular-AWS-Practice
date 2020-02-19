import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CompareComponent } from './compare/compare.component';
import { CompareInputComponent } from './compare/compare-input/compare-input.component';
import { CompareResultsComponent } from './compare/compare-results/compare-results.component';
import { CompareService } from './compare/compare.service';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { AuthService } from './user/auth.service';
import { AuthGuardService } from './user/auth-guard.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CompareComponent, CompareInputComponent, CompareResultsComponent, SigninComponent, SignupComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CompareService, AuthService, AuthGuardService]
})
export class AppModule { }
