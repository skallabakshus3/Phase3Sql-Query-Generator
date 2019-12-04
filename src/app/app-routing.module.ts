import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponentComponent } from './create-component/create-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { AppComponent } from './app.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

{path:'create',component:CreateComponentComponent},
{path:'update',component:ViewComponentComponent},
{path:'home',component:HomeComponent},

{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
