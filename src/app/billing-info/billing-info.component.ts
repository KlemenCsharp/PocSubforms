import { Component, forwardRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BasicInfoComponent } from '../basic-info/basic-info.component';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss'],
})
export class BillingInfoComponent implements OnInit {

  public nestedForm: FormGroup = new FormGroup({
    basicInfo: new FormControl(""),
    address: new FormControl("")
  });

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log("Billing Info", this.nestedForm.value);
  }

}
