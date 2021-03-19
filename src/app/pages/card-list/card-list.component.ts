import { Component, OnInit } from '@angular/core';
import { CardListService } from '../../services/card-list/card-list.service'
import { Card } from '../../models/card/card.model'
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Array<Card> = [];
  constructor(private cardListService: CardListService) { }

  ngOnInit(): void {
    this.getCards()
  }


  async  getCards() {

    try {
      this.cards = await this.cardListService.list()
    } catch (err) {

    }

  }


}
