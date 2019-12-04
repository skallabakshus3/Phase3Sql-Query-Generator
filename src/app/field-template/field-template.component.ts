import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
export interface myinterface {
  remove(index: number);
}
@Component({
  selector: 'app-field-template',
  templateUrl: './field-template.component.html',
  styleUrls: ['./field-template.component.css']
})
export class FieldTemplateComponent  {

  public index: number;
  public selfRef: FieldTemplateComponent;

  //interface for Parent-Child interaction
  public compInteraction: myinterface;
  regiForm: FormGroup; 
  
  constructor(private fb: FormBuilder) {   
  
  
    // To initialize FormGroup  
    this.regiForm = this.fb.group({  
      'ObjectName' : [null, Validators.required],
     'DataType':[null, Validators.required],
      'FieldName' : [null, Validators.required],
      'null':[null, Validators.required],
    });  
  
  }  

  marked = "";
 
  status: 'not_accepted'
  toggleVisibility(e){
    this.marked= (e.target.checked? "NULL": "NOT NULL");
  }
 
  options: string[] = ['varchar', 'nvarchar','datetime','int','Bit'];
  removeMe(index) {
    this.compInteraction.remove(index)
  }





  
}
