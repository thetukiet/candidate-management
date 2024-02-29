import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { LoginComponent } from '../commons/user-management/login/login.component';
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TUI_SANITIZER, TuiAlertModule, TuiButtonModule, TuiRootModule } from "@taiga-ui/core";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiRootModule,
    TuiButtonModule,
    TuiAlertModule,
    HttpClientModule,
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}, provideAnimationsAsync()],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
