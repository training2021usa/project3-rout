import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogTableComponent } from './dog-table/dog-table.component';

const routes: Routes = [{ path: "listdog", component: DogTableComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
