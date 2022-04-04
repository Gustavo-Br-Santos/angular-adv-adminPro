import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input('valorInput') progresso: number = 0;
  @Output('valorOutput') valorSaida: EventEmitter<number> = new EventEmitter<number>();

  getPorcentagem(){
    return this.progresso + '%'
  }

  alterarValor( valor: number ): number | void {

    if( this.progresso >= 100 && valor >= 0 ){
      this.valorSaida.emit(100);
      return this.progresso = 100;
    } 
    if( this.progresso <= 0 && valor < 0 ){
      this.valorSaida.emit(0);
      return this.progresso = 0;
    } 
    this.progresso += valor;
    this.valorSaida.emit(this.progresso);
  }

}
