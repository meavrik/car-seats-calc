import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ChildRowComponent } from './main/child-row/child-row.component';
import { ParamInputSlotComponent } from './main/child-row/param-input-slot/param-input-slot.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChildRowComponent,
    ParamInputSlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
