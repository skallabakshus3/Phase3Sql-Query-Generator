import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ErrorStateMatcher,ShowOnDirtyErrorStateMatcher  
} from '@angular/material';
import {
  
  MatButtonModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSliderModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
 import { ViewComponentComponent } from './view-component/view-component.component';
import { SectionComponent } from './section.component';
import { FieldTemplateComponent } from './field-template/field-template.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateComponentComponent,
    CreateComponentComponent,
    DynamicTemplateComponent,
     ViewComponentComponent,
    SectionComponent,
    FieldTemplateComponent,
    HomeComponent
   
  ],
  imports: [
    FormsModule ,
    MatSliderModule,
    MatFormFieldModule,
    BrowserModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [  
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}  
  ], 
  bootstrap: [AppComponent],
  entryComponents: [DynamicTemplateComponent,FieldTemplateComponent]
  
})
export class AppModule { }
