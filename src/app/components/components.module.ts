import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';

const components = [
  IncrementadorComponent
]

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
