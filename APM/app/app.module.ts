import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductListComponent} from './products/product-list.component';
import { ProductImage} from './products/product-image';
import { ProductFilterPipe} from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService} from './products/product.service';


@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe, StarComponent ],
  providers:[ProductImage, ProductService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
