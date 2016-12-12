import {Component} from '@angular/core';
@Component({
   selector: 'pm-app',
   template: `
   <div>
     <h1>{{getTitle()}}</h1>

     <pm-products></pm-products>
   </div>
   `
})
export class AppComponent {
    
    private pageTitle: string = 'Acme Product Management';
    
    getTitle() : string {
        return this.pageTitle;
    }
}