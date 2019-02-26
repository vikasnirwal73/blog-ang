import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { ListingComponent } from './posts/listing/listing.component';
import { PostSimpleComponent } from './posts/post-simple/post-simple.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListingComponent,
    PostSimpleComponent,
    PostDetailComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
