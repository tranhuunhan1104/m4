import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-ng-switch',
  templateUrl: './i-ng-switch.component.html',
  styleUrls: ['./i-ng-switch.component.css']
})
export class INgSwitchComponent implements OnInit {
    toeChoice:string ='abc';
    constructor() {}

    ngOnInit(): void {
    }
}
