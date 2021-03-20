import { Input, Component, OnInit } from '@angular/core';
import { Card } from '../../models/card/card.model';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.scss']
})
export class CardBoxComponent implements OnInit {
  @Input() card: Card;
  @Input() isLoading: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
