import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reac = new FormGroup({
    user: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    city: new FormControl(''),
    mobile: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')]),
    pinCode: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')])
  })
  reactive(){
    alert(JSON.stringify(this.reac.value));
  }
  get city(){
    return this.reac.get('city');
  }
  get user(){
    return this.reac.get('user');
  }
  get mobile(){
    return this.reac.get('mobile');
  }
  get email(){
    return this.reac.get('email');
  }
  get pinCode(){
    return this.reac.get('pinCode');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
