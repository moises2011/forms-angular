import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BuilderFormComponent } from './builder-form/builder-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OtherComponent } from './other/other.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    BuilderFormComponent,
    ReactiveFormComponent,
    NavigationComponent,
    OtherComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'home', component: HomeComponent},
      { path: 'reactive-forms', component: ReactiveFormComponent},
      { path: 'template-forms', component: BuilderFormComponent},
      { path: 'others/:id', component: OtherComponent},
      { path: '**', component: NotFoundComponent}
    ])  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
