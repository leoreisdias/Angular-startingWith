import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoInfoComponent } from './curso-info/curso-info.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [CursosComponent, CursoInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [CursosService]
})
export class CursosModule { }
