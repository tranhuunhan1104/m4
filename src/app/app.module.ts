import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JJnComponent } from './j-jn/j-jn.component';
import { BBpropertyComponent } from './b-bproperty/b-bproperty.component';
import { CCclassComponent } from './c-cclass/c-cclass.component';
import { ETwoAwayComponent } from './e-two-away/e-two-away.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';
import { FPipeComponent } from './f-pipe/f-pipe.component';
import { MTemplateValiableComponent } from './m-template-valiable/m-template-valiable.component';
import { GNgIfComponent } from './g-ng-if/g-ng-if.component';
import { HNgForComponent } from './h-ng-for/h-ng-for.component';
import { INgSwitchComponent } from './i-ng-switch/i-ng-switch.component';
import { JNgClassComponent } from './j-ng-class/j-ng-class.component';
import { KNgStyleComponent } from './k-ng-style/k-ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    JJnComponent,
    BBpropertyComponent,
    CCclassComponent,
    ETwoAwayComponent,
    CustomPipe,
    FPipeComponent,
    MTemplateValiableComponent,
    GNgIfComponent,
    HNgForComponent,
    INgSwitchComponent,
    JNgClassComponent,
    KNgStyleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
