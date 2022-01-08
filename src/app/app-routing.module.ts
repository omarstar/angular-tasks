import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FamilyComponent } from "./components/family/family.component";
import { TitleComponent } from "./components/header/title/title.component";
import { TaskComponent } from "./components/task/task.component";
import { ParentComponent } from "./parent/parent.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'}, 
    {path: 'home', component: FamilyComponent},
    {path: 'task1', component: ParentComponent},
    {path: 'task2', component: TaskComponent},
    {path: 'task1/:cat', component: TitleComponent},
    {path: '**', redirectTo: 'home'},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}