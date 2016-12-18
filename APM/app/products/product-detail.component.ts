import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
    
    // Selector is required only if it will be nested in 
    //another component.
    
    //selector : 'pm-product-details',
    moduleId : module.id,
    templateUrl : 'product-detail.component.html'

}) 
export class ProductDetailComponent implements OnInit{
     pageTitle : string = 'Product Detail';
     product : IProduct;

     constructor(private _route : ActivatedRoute, private _router : Router) {

     }
     ngOnInit() :void {
          //   + added to convert string to int 
          let id = +this._route.snapshot.params['id'];
          this.pageTitle += `:Paramater :${id}`;
     }
     onBack() : void {
         this._router.navigate(['/products']);
     }
}