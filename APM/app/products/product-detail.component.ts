import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    
    // Selector is required only if it will be nested in 
    //another component.
    
    //selector : 'pm-product-details',
    moduleId : module.id,
    templateUrl : 'product-detail.component.html'

}) 
export class ProductDetailComponent {
     pageTitle : string = 'Product Detail';
     product : IProduct;
}