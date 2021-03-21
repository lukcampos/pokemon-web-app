import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../services/details/details.service';
import { ActivatedRoute } from '@angular/router';
import { Card } from "../../models/card/card.model"
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  constructor(
    private detailsService: DetailsService,
    private activatedRoute: ActivatedRoute) { }

  card: Card;
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  ngOnInit(): void {

    let cardId = this.activatedRoute.snapshot.params.cardID

    this.getCardDetail(cardId)
  }

  async getCardDetail(id: string) {
    try {
      const cardresponse = await this.detailsService.getById(id)
      this.card = cardresponse.data
    } catch (err) {
      console.log('err', err)
    }

  }

}

export interface Section {
  name: string;
  updated: Date;
}
