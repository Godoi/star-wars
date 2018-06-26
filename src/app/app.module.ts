import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';

/** General app imports */
import { PageNotFoundComponent } from './page-not-found';
import { WindowRef } from "./shared/windowRef";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FooterModule } from "./shared/footer/footer.module";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NavbarModule,
    FooterModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule {}
