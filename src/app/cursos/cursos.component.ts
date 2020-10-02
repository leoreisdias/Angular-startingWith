import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  linkedin: string;
  techs: string[] = ['JavaScript', 'Angular', 'React']


  constructor() {
    this.linkedin = 'https://www.linkedin.com/in/leonardord99/'
  }

  ngOnInit() {
  }

}
