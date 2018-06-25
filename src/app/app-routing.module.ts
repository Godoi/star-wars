import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** View Components */
import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
import { PageNotFoundComponent } from './page-not-found';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "detail/:id", component: DetailComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}