import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/locations/locations.module').then(m => m.LocationsModule),
  },
  {
    path: 'login',
    loadChildren: () =>import('src/app/modules/auth/auth.module').then( m=> m.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
