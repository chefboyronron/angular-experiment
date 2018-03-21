import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './routing/routing.component';
import { ChildRoutingComponent } from './routing/child-routing/child-routing.component';
import { HttpComponent } from './http/http.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'route', component: RoutingComponent, children: [
    { path: ':id/:name', component: ChildRoutingComponent }
  ] },
  { path: 'http', component: HttpComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, { useHash: true })
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
