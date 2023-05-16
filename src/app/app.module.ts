import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from "./shared/shared.module";
import { PagesModuleModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { NoFoundPageComponent } from '../app/noFoundPage/no-found-page.component';





@NgModule({
    declarations: [
        AppComponent,
        NoFoundPageComponent,
        PagesComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        PagesModuleModule,
        HttpClientModule,
        AuthModule,
    ]
})
export class AppModule { }
