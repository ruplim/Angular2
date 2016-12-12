import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent} from './products/product-list.component';
import { ProductImage} from './products/product-image';
import { ProductFilterPipe} from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe, StarComponent ],
  providers:[ProductImage],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
