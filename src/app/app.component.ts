import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mat';
  isChecked = true;
  formGroup: FormGroup;
  showFiller = false;

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue],
    });
  }

  onFormSubmit() {
    alert(JSON.stringify(this.formGroup.value, null, 2));
  }

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: 'Five', cols: 2, rows: 2, color: '#CCEEF1' },
    { text: 'Six', cols: 2, rows: 2, color: '#DDB' },
  ];
}
