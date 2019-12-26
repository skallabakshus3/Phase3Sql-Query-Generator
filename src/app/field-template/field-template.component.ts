import { Component, ComponentFactoryResolver, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
export interface myinterface {
  remove(index: number);
}
@Component({
  selector: 'app-field-template',
  templateUrl: './field-template.component.html',
  styleUrls: ['./field-template.component.css']
})
export class FieldTemplateComponent {

 

  FieldName: string;
  datatype: string;
  null: boolean;

  public index: number;
  public selfRef: FieldTemplateComponent;
  options: string[] = ['varchar', 'nvarchar', 'datetime', 'int', 'Bit'];

  //interface for Parent-Child interaction
  public compInteraction: myinterface;
  regiForm: FormGroup;
  constructor(private fb: FormBuilder, private CFR: ComponentFactoryResolver) {


    // To initialize FormGroup  
    this.regiForm = this.fb.group({
      'FieldName': [null, Validators.required],
      'DataType': [null, Validators.required],
      'null': [null, Validators.required],
    });

  }

  marked = "";
  status: 'not_accepted'
  toggleVisibility(e) {
    this.marked = (e.target.checked ? "NULL" : "NOT NULL");
  }

  removeMe(index) {
    this.compInteraction.remove(index)
  }






}


export class CustomFields {
  fieldName : string;
  dataType  : string;
  isNull    : boolean;
}