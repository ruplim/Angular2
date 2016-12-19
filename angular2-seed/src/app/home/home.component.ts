import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
     languages: string[] = [
          'Hindi',
          'English',
          'Other'
     ];
     model :Employee  = new Employee('Sachin','Tendulkar', true, 'W2', 'Hindi');

     firstNameToUpperCase(value : string) : void {
          if( value.length > 0)
             this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
          else 
             this.model.firstName = value;
     
     } 
}
