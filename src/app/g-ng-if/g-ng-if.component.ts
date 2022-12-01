import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-g-ng-if',
  templateUrl: './g-ng-if.component.html',
  styleUrls: ['./g-ng-if.component.css']
})
export class GNgIfComponent implements OnInit {
      isShow:boolean = true;
      the_number:number = 15;
      constructor() {}
      ngOnInit(): void{}

}
