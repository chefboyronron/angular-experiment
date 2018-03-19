import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './routing/routing.component';
import { HttpComponent } from './http/http.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'route', component: RoutingComponent },
  { path: 'http', component: HttpComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
