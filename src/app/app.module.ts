import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TaskComponent } from './components/task/task.component';
import { FamilyComponent } from './components/family/family.component';
import { NavComponent } from './components/header/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { TitleComponent } from './components/header/title/title.component';
import { LoginComponent } from './components/project/login/login.component';
import { MovieComponent } from './components/project/movie/movie.component';
import { MainComponent } from './components/project/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TaskComponent,
    FamilyComponent,
    NavComponent,
    TitleComponent,
    LoginComponent,
    MovieComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
