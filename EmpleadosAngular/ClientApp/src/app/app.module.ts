import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleatComponent } from './empleat/empleat.component';
import { EmpleatsComponent } from './empleats/empleats.component';
import { EmpleatsAddEditComponent } from './empleats-add-edit/empleats-add-edit.component';
import { EmpleatService } from './services/empleat.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleatComponent,
    EmpleatsComponent,
    EmpleatsAddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    EmpleatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
