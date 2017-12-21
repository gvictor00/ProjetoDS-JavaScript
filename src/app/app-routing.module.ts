import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {AdminComponent} from './admin/admin.component';
import {UsrComponent} from './usr/usr.component';

const routes: Routes = [
	{path: 'adminstrador', component: AdminComponent},
	{path: 'usuario', component: UsrComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
