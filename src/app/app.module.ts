import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';


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
import { GameNumbersComponent } from './game-numbers/game-numbers.component';
import { UTemplateDrivenComponent } from './u-template-driven/u-template-driven.component';
import { VDataDrivenComponent } from './v-data-driven/v-data-driven.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './tutorial-router/products/products.component';
import { ProductComponent } from './tutorial-router/product/product.component';
import { ProductAddComponent } from './tutorial-router/product-add/product-add.component';
import { ProductEditComponent } from './tutorial-router/product-edit/product-edit.component';
import { ProductDeleteComponent } from './tutorial-router/product-delete/product-delete.component';
import { ProductModule } from './product/product.module';

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
    GameNumbersComponent,
    VDataDrivenComponent,
    UTemplateDrivenComponent,
    ProductsComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
