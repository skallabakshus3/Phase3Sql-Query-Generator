import { Component,   ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import {FormGroup , FormsModule,FormBuilder, Validators} from '@angular/forms';
import { FieldTemplateComponent } from '../field-template/field-template.component';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent  {
  
  
  regiForm: FormGroup;  
  
  query: any;
   constructor(private fb: FormBuilder,private CFR: ComponentFactoryResolver) {   
  
  
    // To initialize FormGroup  
    this.regiForm = this.fb.group({  
      'ObjectName' : [null, Validators.required],
     'DataType':[null, Validators.required],
      'FieldName' : [null, Validators.required],
      'null':[null, Validators.required],
    });  
  
  }  

  marked = "";
  theCheckbox = false;
  status: 'not_accepted'
  toggleVisibility(e){
    this.marked= (e.target.checked? "NULL": "NOT NULL");
  }
 
  options: string[] = ['varchar', 'nvarchar','datetime','int','Bit'];
  
 
  @ViewChild('viewContainerRef', { static: true, read: ViewContainerRef }) VCR: ViewContainerRef;
  index: number = 0;
  componentsReferences = [];
 
  createComponent() {
    let componentFactory = this.CFR.resolveComponentFactory(FieldTemplateComponent);
    let componentRef: ComponentRef<FieldTemplateComponent> = this.VCR.createComponent(componentFactory);
    let currentComponent = componentRef.instance;

    currentComponent.selfRef = currentComponent;
    currentComponent.index = ++this.index;

    // providing parent Component reference to get access to parent class methods
    currentComponent.compInteraction = this;

    // add reference for newly created component
    this.componentsReferences.push(componentRef);
  }

  remove(index: number) {

    if (this.VCR.length < 1)
      return;

    let componentRef = this.componentsReferences.filter(x => x.instance.index == index)[0];
    let component: FieldTemplateComponent = <FieldTemplateComponent>componentRef.instance;

    let vcrIndex: number = this.VCR.indexOf(componentRef)

    // removing component from container
    this.VCR.remove(vcrIndex);

    this.componentsReferences = this.componentsReferences.filter(x => x.instance.index !== index);
  }

//copy method used to copy query in text area and save to clipboard
copyToClipboard(element) {
  element.select();
  document.execCommand('copy');
  this.query('success', 'Success!', 'Link copied to clipboard.');
}
 
 }


 