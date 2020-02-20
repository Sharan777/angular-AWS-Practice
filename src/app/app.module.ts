import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { HelloComponent } from './hello.component';
import { CompareComponent } from './compare/compare.component';
import { CompareInputComponent } from './compare/compare-input/compare-input.component';
import { CompareResultsComponent } from './compare/compare-results/compare-results.component';

import { AppRoutingModule } from './app-routing.module';

import { CompareService } from './compare/compare.service';
import { AuthService } from './user/auth.service';
// import { AuthGuard } from './user/auth-guard.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, CompareComponent, CompareInputComponent, CompareResultsComponent, SigninComponent, SignupComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CompareService, AuthService]
})
export class AppModule { }
