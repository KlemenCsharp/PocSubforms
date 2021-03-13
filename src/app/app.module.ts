import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';
import { BillingInfoUnnestedComponent } from './billing-info-unnested/billing-info-unnested.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { AdressComponent } from './adress/adress.component';






@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    ChildAComponent,
    ChildBComponent,
    BillingInfoUnnestedComponent,
    BasicInfoComponent,
    BillingInfoComponent,
    AdressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    DropDownsModule,
    LabelModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
