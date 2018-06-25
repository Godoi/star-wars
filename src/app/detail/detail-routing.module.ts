import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DetailComponent } from "./detail.component";

const routes: Routes = [{ path: "", component: DetailComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class DetailRoutingModule {}
