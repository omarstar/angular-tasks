import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TaskComponent,
    FamilyComponent,
    NavComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
