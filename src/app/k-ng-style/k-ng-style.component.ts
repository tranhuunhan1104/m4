import { Component } from '@angular/core';

@Component({
  selector: 'app-k-ng-style',
  templateUrl: './k-ng-style.component.html',
  styleUrls: ['./k-ng-style.component.css']
})
export class KNgStyleComponent {
    canSave:boolean = true;
    inUnchanged: boolean =false;
    isSpecial: boolean = true;
    setStyles(){
      return {
        'font-style': this.canSave ? 'italic' :'normal',
        'font-weight':!this.inUnchanged ? 'bold' :'normal',
        'font-size':this.isSpecial ? '24px' :'8px',
      };
    }
}
