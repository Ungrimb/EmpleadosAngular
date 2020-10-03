import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleatComponent } from './empleat/empleat.component';
import { EmpleatsComponent } from './empleats/empleats.component';
import { EmpleatsAddEditComponent } from './empleats-add-edit/empleats-add-edit.component';

const routes: Routes = [
  {path: '',component: EmpleatsComponent,pathMatch:'full'},
  {path:'Empleats/:id',component:EmpleatComponent},
  {path:'add',component:EmpleatsAddEditComponent},
  {path:'Empleats/edit/:id',component:EmpleatsAddEditComponent},
  {path:'**',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
