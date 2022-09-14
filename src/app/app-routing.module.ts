import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DogTableComponent } from './dog-table/dog-table.component';

const routes: Routes =
 [
  { path: "listdog", component: DogTableComponent },
  { path: "**", component: AuthComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
