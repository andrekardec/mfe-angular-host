
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '/react-app',
    pathMatch: 'full',
    loadChildren: () => import('mfe_react_remote/ReactApp').then(m => m.ReactApp)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
