import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoInfoComponent } from './curso-info/curso-info.component';



@NgModule({
  declarations: [CursosComponent, CursoInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
