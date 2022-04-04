import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progresso1: number = 0;
  progresso2: number = 0;

  getProgresso1(){
    return `${this.progresso1}%`
  }

  getProgresso2(){
    return `${this.progresso2}%`
  }

}
