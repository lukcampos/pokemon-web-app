import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../services/details/details.service';
import { ActivatedRoute } from '@angular/router';
import { Card } from "../../models/card/card.model"
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Attack } from "../../models/card/card.model"
import { SetLang } from '../../translations/set-lang.function'
import Swal from 'sweetalert2'
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  constructor(
    private detailsService: DetailsService,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
    private translate: TranslateService
  ) { }

  card: Card;


  async ngOnInit() {

    try {
      let cardId = this.activatedRoute.snapshot.params.cardID
      this.getCardDetail(cardId)
    } catch (err) {
      const errorMessage = await this.translate.get('SERVER_ERROR').toPromise()
      Swal.fire('Oops...', errorMessage, 'error')
    }

  }


  /**
   * A function that finds card information by ID
   */
  async getCardDetail(id: string) {
    try {
      const cardresponse = await this.detailsService.getById(id)
      this.card = cardresponse.data
    } catch (err) {
      if (err.status == 404) {
        const errorMessage = await this.translate.get('CARD_NOT_FOUND').toPromise()
        Swal.fire('Oops...', errorMessage, 'error')
      } else {
        const errorMessage = await this.translate.get('SERVER_ERROR').toPromise()
        Swal.fire('Oops...', errorMessage, 'error')
      }
    }
  }


  /**
   *A function to open the modal with extra information
   */
  openDetailsModal(attack: Attack) {
    this.matDialog.open(ModalComponent, {
      data: attack,
      width: '600px',
      height: '400px;'
    });
  }

  setLang(lang: string) {
    SetLang(lang)
    this.translate.setDefaultLang(lang)
  }

}
