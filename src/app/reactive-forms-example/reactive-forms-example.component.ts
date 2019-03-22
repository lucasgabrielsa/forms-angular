import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms-example.component.html',
  styleUrls: ['./reactive-forms-example.component.css']
})
export class ReactiveFormsExampleComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  ngOnInit() {
  }

  getAliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.getAliases().push(this.fb.control(''));
  }

  clearForm() {
    this.profileForm.reset();
  }

  onSubmit() {
    console.log('submited');
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Lucas Gabriel',
      address: {
        street: 'Av. Imbaubas'
      }
    })
  }

}
