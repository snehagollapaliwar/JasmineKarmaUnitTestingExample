import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    text = 'contact page';
    contactForm: FormGroup;
    contact = {
        name: '',
        email: '',
        text: ''
    };
    submitted = false;
    counter:number;
    buttonclick:string;
    constructor() {
      this.counter = 0;
       // this.createForm();
    }
    Increment() {
      this.counter++;
      this.buttonclick= 'Increment';
    };
     Decrement() {
      this.counter--;
      this.buttonclick= 'Decrement';
    }
    // createForm(): void {
    //     this.contactForm = new FormGroup({
    //         'name': new FormControl(this.contact.name, [
    //             Validators.required,
    //             Validators.minLength(4)
    //         ]),
    //         'email': new FormControl(this.contact.email, [
    //             Validators.required,
    //             Validators.email
    //         ]),
    //         'text': new FormControl(this.contact.text, Validators.required)
    //     });
    // }

    // onSubmit(): void {
    //   debugger;
    //     this.submitted = true;
    // }

    
}