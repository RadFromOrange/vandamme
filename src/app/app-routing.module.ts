import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ZdarComponent} from "./zdar/zdar.component";
import {ZdarparamComponent} from "./zdarparam/zdarparam.component";

const routes: Routes = [

  { path: 'detail/:id', component: ZdarComponent },
  { path: 'zdar', component: ZdarparamComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
