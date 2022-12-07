import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-ng-for',
  templateUrl: './h-ng-for.component.html',
  styleUrls: ['./h-ng-for.component.css']
})
export class HNgForComponent implements OnInit {
      courses:any[] =[
          "typescript",
          "angular"
      ];
      constructor() {}
      ngOnInit(): void {
        for( let index=1; index <= 100 ; index++){
          this.courses.push(index);
        }
      }
}
