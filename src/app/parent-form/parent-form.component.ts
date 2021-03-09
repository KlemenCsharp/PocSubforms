import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit {

  public nestedForm: FormGroup = new FormGroup({
    childName: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    console.log(this.nestedForm.value);
  }

}
