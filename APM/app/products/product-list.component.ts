import { Component , OnInit} from '@angular/core';
import { ProductImage } from './product-image';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    //selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list-component.css']
})
export class ProductListComponent implements OnInit {
    
    constructor(public productImage : ProductImage, public productService : ProductService) {}
    
    pageTitle : string = 'Product List';
    showImage : boolean = false;  
    listFilter: string ; 
    errorMessage: string;
    products: IProduct[]; 

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    //Lifecycle method . Load products here
    ngOnInit() : void {
        //console.log(' ***** product-list.component.ts :: Inside OnInit()');
        this.productService.getProducts()
                    .subscribe(products => this.products = products,
                     error => this.errorMessage = <any> error);
    }
    onRatingClicked(message: string) : void {
        this.listFilter = message;
    } 
} 