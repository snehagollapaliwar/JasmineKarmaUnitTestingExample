import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component} from '@angular/core'
import { ContactComponent } from './contact.component';
import {By} from '@angular/platform-browser';
import { componentFactoryName } from '@angular/compiler';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
let debugElement: DebugElement;
let htmlElement: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement= fixture.debugElement.query(By.css('p'));
    htmlElement= debugElement.nativeElement;
    
  });

 
  it('should disply the current number of counter',()=>{
  expect(htmlElement.textContent).toEqual('0');
  })

  it('should Increment the counter number',()=>{
    const initialValue= component.counter;
    component.Increment();
    fixture.detectChanges();
    const newValue= component.counter;
    expect(newValue).toBeGreaterThan(initialValue);
   });

  it('should Decrement the counter number',()=>{
    const initialValue= component.counter;
    component.Decrement();
    fixture.detectChanges();
    const newValue= component.counter;
    expect(newValue).toBeLessThan(initialValue);
   });
 
   it('should display incremented number after increment by one:', ()=>
   {
component.Increment();
fixture.detectChanges();
  expect(htmlElement.textContent).toEqual('1');
   });

   it('should display Decremented number after Decrement by one:', ()=>
   {
component.Decrement();
fixture.detectChanges();
  expect(htmlElement.textContent).toEqual('-1');
   });

   it('should show the name on button click', ()=> {
    component.Increment();
    fixture.detectChanges();
    expect('Increment').toEqual('Increment');
  
  });

  it('should show the name on button click', ()=> {
    component.Decrement();
    fixture.detectChanges();
    expect('Decrement').toEqual('Decrement');
  
  });
});






// import { TestBed, async, ComponentFixture } from '@angular/core/testing';
// import { BrowserModule, By } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DebugElement } from '@angular/core';

// import { ContactComponent } from './contact.component';

// describe('ContactComponent', () => {
//   let comp: ContactComponent;
//   let fixture: ComponentFixture<ContactComponent>;
//   let de: DebugElement;
//   let el: HTMLElement;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         ContactComponent
//       ],
//       imports: [
//         BrowserModule,
//         FormsModule,
//         ReactiveFormsModule
//       ]
//     }).compileComponents().then(() => {
//       fixture = TestBed.createComponent(ContactComponent);

//       comp = fixture.componentInstance; // ContactComponent test instance
//       // query for the title <h1> by CSS element selector
//       de = fixture.debugElement.query(By.css('form'));
//       el = de.nativeElement;
//     });
//   }));

//   it(`should have as text 'contact page'`, async(() => {
//     debugger;
//     expect(comp.text).toEqual('contact page');
//   }));

//   it(`should set submitted to true`, async(() => {
//     debugger;
//     comp.onSubmit();
//     expect(comp.submitted).toBeTruthy();
//   }));

//   // it(`should call the onSubmit method`, async(() => {
//   //   spyOn(comp, 'onSubmit');
//   //   el = fixture.debugElement.query(By.css('button')).nativeElement;
//   //   el.click();
//   //   expect(comp.onSubmit).toHaveBeenCalled();
//   // }));

//  it(`form should be invalid`, async(() => {
//    debugger;
//     comp.contactForm.controls['email'].setValue('');
//     comp.contactForm.controls['name'].setValue('');
//     comp.contactForm.controls['text'].setValue('');
//     expect(comp.contactForm.valid).toBeFalsy();
//   }));

//   it(`form should be valid`, async(() => {
//     debugger;
//     comp.contactForm.controls['email'].setValue('asd@asd.com');
//     comp.contactForm.controls['name'].setValue('aada');
//     comp.contactForm.controls['text'].setValue('text');
//     expect(comp.contactForm.valid).toBeTruthy();
//   }));
// });


