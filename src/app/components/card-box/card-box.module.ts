import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBoxComponent } from './card-box.component'
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { LazyLoadImageModule } from 'ng-lazyload-image';
@NgModule({
  declarations: [CardBoxComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    LazyLoadImageModule
  ],
  exports:[
    CardBoxComponent
  ]
})

export class CardBoxModule { }
