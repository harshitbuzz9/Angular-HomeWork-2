import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup, Validators } from '@angular/forms';
import {PorductssService} from '../porductss.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    
   
  elementsAre = new FormGroup({
    ProductName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    Brand: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    city: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    modelNo: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')]),
    price: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')])
  })
   
  get city(){
    return this.elementsAre.get('city');
  }
  get ProductName(){
    return this.elementsAre.get('ProductName');
  }
  get modelNo(){
    return this.elementsAre.get('modelNo');
  }
  get Brand(){
    return this.elementsAre.get('Brand');
  }
  get price(){
    return this.elementsAre.get('price');
  }
  
  constructor(private PS:PorductssService){ }
  
  ngOnInit(): void {}
    
  vallues(){
    alert(JSON.stringify(this.elementsAre.value));
    this.PS.saveFileLogs(this.elementsAre.value).subscribe(res=>{
      console.log(res);
      alert("Data entered, done!!");
    },
    err=>{
      alert("Error!!");
    })
  }
  ProductPrice(): void{
    this.PS.getProducts().subscribe(
      (res=>{
        //this.price =res;
        console.log(this.price);
      })
    )
  }
}
