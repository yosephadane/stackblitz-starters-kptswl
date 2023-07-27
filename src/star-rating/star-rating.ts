import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StarRatingComponent implements OnInit {

   @Input('rating') private rating: number = 3;
   @Input('countRating') private count:number=5;

   @Output() private ratingUpdated = new EventEmitter();
   ratingArr =[]
   constructor(private matSnackBar:MatSnackBar){

   }

   ngOnInit(){

    for(let i=0;i<this.count;i++)
    {

      this.ratingArr.push(i);
    }

   }

   showIcon(index:number){
    
    if(this.rating<index+1)
    return 'star'
    else
    return 'star_boarder'

   }



}