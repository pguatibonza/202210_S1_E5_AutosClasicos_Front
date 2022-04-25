import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoListComponent } from './Auto-List/Auto-List.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoDetailComponent } from './Auto_detail/Auto_detail.component';


@NgModule({
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule
  ],
  exports: [AutoListComponent],
  declarations: [AutoListComponent, AutoDetailComponent]
})
export class AutoModule { }
