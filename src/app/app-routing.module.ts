import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './jokes/jokes.component';
import { PaysComponent } from './pays/pays.component';

const routes: Routes = [
  {path: 'pays', component: PaysComponent},
  {path: 'jokes', component: JokesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
