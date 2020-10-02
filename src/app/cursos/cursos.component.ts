import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  linkedin: string;
  techs: string[];


  constructor(private cursosService: CursosService) {
    this.linkedin = 'https://www.linkedin.com/in/leonardord99/'

    this.techs = this.cursosService.getCursos();

  }

  ngOnInit() {
  }

}
