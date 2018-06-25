import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** View Components */
import { PageNotFoundComponent } from './page-not-found';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomeModule" },
  { path: "detail/:id", loadChildren: "./detail/detail.module#DetailModule" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}