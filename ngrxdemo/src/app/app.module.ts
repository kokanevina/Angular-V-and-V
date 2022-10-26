import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './reducers/product.reducer';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, StoreModule.forRoot({product:addProductReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
