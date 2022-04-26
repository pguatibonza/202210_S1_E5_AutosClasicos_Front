import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisListComponent } from './pais-list/pais-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [PaisListComponent],
  declarations: [PaisListComponent]
})
export class PaisModule { }
