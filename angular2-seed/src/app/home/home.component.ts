import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Employee} from '../models/employee.model';
import {FormPoster} from '../services/form-poster.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
 // templateUrl: './home.component.thirdparty.html'
  
})
export class HomeComponent {

      startDate : Date;
    
      languages : string[] = [];
      constructor(private _formPoster : FormPoster) {

          this._formPoster.getLanguages()
          .subscribe(
               response => this.languages = response.languages,
               error => console.log('Error', error)
          ); 

      }
      

     model :Employee  = new Employee('','', true, 'W2', 'default');
     hasPrimaryLanguageError = false;

     firstNameToUpperCase(value : string) : void {
         
          if( value.length > 0)
             this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
          else 
             this.model.firstName = value;
     
          
     } 

     OnFormSubmit(form : NgForm) :void {
          
          this.validatePrimaryLanguage(this.model.primaryLanguage);
          if( this.hasPrimaryLanguageError)
             return;

          //submit the form 
          this._formPoster.postEmployeeForm(this.model)
          .subscribe(
               data => console.log('Success :::: ', data),
               error => console.log('Error', error)
          );
     }

     validatePrimaryLanguage(value) :void {

         //console.log("language :: " + value);
          if( value === 'default')
              this.hasPrimaryLanguageError = true;
          else
              this.hasPrimaryLanguageError = false;
     }


   /*
     do not use model.primary language before thereis no guarentee that model will be loaded when validating the selector
     Instead pass the select value as shown above. 
     validatePrimaryLanguage(event) :void {

         console.log("language :: " + this.model.primaryLanguage);
          if( this.model.primaryLanguage === 'default')
              this.hasPrimaryLanguageError = true;
          else
              this.hasPrimaryLanguageError = false;
     }
     */
}
