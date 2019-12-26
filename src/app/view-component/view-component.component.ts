import { Component, OnInit, ViewChildren, QueryList, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { SectionComponent } from '../section.component';
import { DynamicTemplateComponent } from '../dynamic-template/dynamic-template.component';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  @ViewChildren(SectionComponent) sections: QueryList<SectionComponent>;
  activeSections: SectionComponent[];
  textComponentFactory: ComponentFactory<DynamicTemplateComponent>;
 

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicTemplateComponent);
  }

  ngAfterViewInit() {
    this.activeSections = this.sections.reduce((result, section, index) => {
      if (section.active) {
        result.push(section);
      }
      return result;
    }, []);
  }

  onAddComponentClick() {
    this.activeSections.forEach((section) => {
      section.viewContainerRef.createComponent(this.textComponentFactory);
    });
  }


 

}
