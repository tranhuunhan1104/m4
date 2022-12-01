import { Component } from '@angular/core';

@Component({
  selector: 'app-c-cclass',
  templateUrl: './c-cclass.component.html',
  styleUrls: ['./c-cclass.component.css']
})
export class CCclassComponent {
  onSale:boolean =true;
  classEx:Array<string> = ['class-1','class-2'];
  actionName:string = 'Add';
  ex:string = 'Red';
  isDanger:boolean = true
constructor(){}
ngOnInit(): void{
}
}
