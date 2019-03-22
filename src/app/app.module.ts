import { BootStrapModuleModule } from './boot-strap-module/boot-strap-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsExampleComponent } from './reactive-forms-example/reactive-forms-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ForbiddenNameDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed-validator.directive';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsExampleComponent,
    TemplateDrivenFormsComponent,
    HeroFormComponent,
    ForbiddenNameDirective,
    IdentityRevealedValidatorDirective,
    DynamicFormsComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BootStrapModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
