import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBoxComponent } from './card-box.component'
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {RouterModule } from '@angular/router';
@NgModule({
  declarations: [CardBoxComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    LazyLoadImageModule,
    RouterModule
  ],
  exports:[
    CardBoxComponent
  ]
})

export class CardBoxModule { }
