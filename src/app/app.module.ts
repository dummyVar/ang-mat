import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from './matherial.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    MatNativeDateModule,
    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
