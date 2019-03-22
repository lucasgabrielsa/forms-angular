import { HeroFormComponent } from './hero-form/hero-form.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsExampleComponent } from './reactive-forms-example/reactive-forms-example.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

const routes: Routes = [
  { path: 'rectiveForms', component: ReactiveFormsExampleComponent },
  { path: 'templateDrivenForms', component: TemplateDrivenFormsComponent },
  { path: 'heroForm', component: HeroFormComponent },
  { path: 'dynamicForm', component: DynamicFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
