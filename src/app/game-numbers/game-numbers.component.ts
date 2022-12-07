import { Component } from '@angular/core';

@Component({
  selector: 'app-game-numbers',
  templateUrl: './game-numbers.component.html',
  styleUrls: ['./game-numbers.component.css']
})
export class GameNumbersComponent {
  numbers: any[] = [];
  next_number: any = 7;
  point:number = 0;

  ngOnInit(){
    for (let index = 7; index <= 100000; index +=1.75) {
      this.numbers.push( index );
    }
  }

  playGame(number:any){
    if( number != this.next_number ){
      alert('game over');
    }else{
      this.next_number += this.next_number;
      this.point +=2;
    }
  }
}
