import { NgModule } from '@angular/core'

import { RouterModule} from '@angular/router';
import { ProductService} from './product.service';
import { ProductListComponent} from './product-list.component';
import { ProductDetailComponent} from './product-detail.component';
import { ProductFilterPipe} from './product-filter.pipe';
import { ProductDetailGuard} from './product-guard.service';
import { ProductImage} from './product-image';
import { SharedModule} from '../shared/shared.module';


@NgModule({

    declarations: [
          ProductListComponent,
          ProductDetailComponent,
          ProductFilterPipe          
    ],
    imports: [
      SharedModule,
      //For child ensures we donot register the routing service a second time
      RouterModule.forChild([
      { path: 'products',    component: ProductListComponent },
      { path: 'product/:id', 
        canActivate: [ ProductDetailGuard ],      
        component: ProductDetailComponent 
      },


      ])
    ],
    providers: [
       ProductService,
       ProductImage,
       ProductDetailGuard
    ]
})
export class ProductModule{}