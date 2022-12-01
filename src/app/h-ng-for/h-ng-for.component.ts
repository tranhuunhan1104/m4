import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-ng-for',
  templateUrl: './h-ng-for.component.html',
  styleUrls: ['./h-ng-for.component.css']
})
export class HNgForComponent implements OnInit {
      courses:string[] =[
          "typescript",
          "angular"
      ];
      constructor() {}
      ngOnInit(): void {

      }
}
