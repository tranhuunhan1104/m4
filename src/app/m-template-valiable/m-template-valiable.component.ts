import { Component } from '@angular/core';

@Component({
  selector: 'app-m-template-valiable',
  templateUrl: './m-template-valiable.component.html',
  styleUrls: ['./m-template-valiable.component.css']
})
export class MTemplateValiableComponent {
  constructor() {}
  ngOnItnit(): void{
  }
  callPhone( phone:any ):void {
    console.log(phone);

  }
}
