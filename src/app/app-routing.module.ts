import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // this value is required for server-side rendering to work
    // @see @angular/router/router.ts#initialNavigation
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
