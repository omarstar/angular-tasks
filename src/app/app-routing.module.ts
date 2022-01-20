import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FamilyComponent } from "./components/family/family.component";
import { TitleComponent } from "./components/header/title/title.component";
import { LoginComponent } from "./components/project/login/login.component";
import { MainComponent } from "./components/project/main/main.component";
import { MovieComponent } from "./components/project/movie/movie.component";
import { TaskComponent } from "./components/task/task.component";
import { ParentComponent } from "./parent/parent.component";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'}, 
    {path: 'home', component: FamilyComponent},
    {path: 'task1', component: ParentComponent},
    {path: 'task2', component: TaskComponent},
    {path: 'task1/:cat', component: TitleComponent},
    {path: 'login', component: LoginComponent},
    {path: 'main', component: MainComponent},
    {path: 'movie', component: MovieComponent},
    {path: '**', redirectTo: 'login'},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}