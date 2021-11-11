import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  igoForm = new FormGroup({
    leoForm: new FormControl(
      '',
      [ Validators.required, Validators.minLength(5) ]
    ),
    mariForm: new FormControl(
      null,
      [ Validators.required]
    )
  });

  ngOnInit(): void {
  }

  setInputValue(): void {
    this.igoForm.get('leoForm')?.setValue('CriForm');
    this.getValue();
  }

  getValue(): void {
    console.log(this.igoForm.get('leoForm')?.value);
  }

  onSubmit(): void {
    console.log(this.igoForm.value);
  }

}
