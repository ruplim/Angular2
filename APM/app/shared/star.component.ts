import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';


@Component({
   selector: 'ai-star',
   moduleId: module.id,
   templateUrl: 'star.component.html',
   styleUrls: ['star.component.css']
   //templateUrl: 'app/shared/star.component.html',
   //styleUrls: ['app/shared/star.component.css']

})

export class StarComponent implements OnChanges {
//    export class StarComponent implements OnInit {
   
   starWidth : number;
   @Input() rating : number;
   @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string> ();

   ngOnChanges() : void {
     //  console.log(' ***** star.component.ts :: Inside ngOnChanges()' + this.rating);
      this.starWidth = this.rating * (86/5);
   }
   OnClick() :void {
      this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
   }

// OnInit seems also works
/*
   ngOnInit() : void {
       console.log(' ***** star.component.ts :: Inside OnInit()' + this.rating);
       this.starWidth = this.rating * (86/5);
   }
*/
}