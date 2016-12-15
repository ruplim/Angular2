import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { AppComponent }  from './app.component';
import { ProductListComponent} from './products/product-list.component';
import { ProductDetailComponent} from './products/product-detail.component';
import { ProductImage} from './products/product-image';
import { ProductFilterPipe} from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService} from './products/product.service';


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpModule,
    RouterModule.forRoot([
      { path: 'products',    component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    ProductListComponent, 
    ProductFilterPipe, 
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent 
  ],
  providers:[
    ProductImage, 
    ProductService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
