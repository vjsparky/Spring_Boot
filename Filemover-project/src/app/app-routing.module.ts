import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilemoverComponent } from './filemover/filemover.component';

const routes: Routes = [
  {path:'sftpaudit',component: FilemoverComponent},
  {path:'',redirectTo:'sftpaudit',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
