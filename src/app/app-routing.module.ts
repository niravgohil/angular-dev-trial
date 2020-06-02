import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from "./project-list/project-list.component";


const routes: Routes = [
  { path: "", redirectTo: "/project-list", pathMatch: "full" },
  { path: "project-list", component: ProjectListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
