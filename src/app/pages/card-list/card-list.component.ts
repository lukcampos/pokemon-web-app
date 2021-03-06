import { ViewChild, Component, OnInit, ElementRef } from '@angular/core';
import { CardListService } from '../../services/card-list/card-list.service'
import { Card } from '../../models/card/card.model'
import { mock } from './data/mock'
import { wait } from '../../helpers/index'
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'
import { TranslateService } from '@ngx-translate/core';
import { SetLang } from '../../translations/set-lang.function'
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Array<Card> = [];
  isDesktopDevice = this.deviceService.isDesktop();
  @ViewChild('searchbarMobile', { static: true, read: ElementRef }) searchbarMobile: ElementRef;
  @ViewChild('searchbarDesktop', { static: true, read: ElementRef }) searchbarDesktop: ElementRef;
  currentPage: number = 0;
  totalCount: number = 0;

  constructor(
    private cardListService: CardListService,
    private deviceService: DeviceDetectorService,
    private config: NgbCarouselConfig,
    private translate: TranslateService
  ) {
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getCards();
  }

  /**
   * calls a function to request cards on the server
   */
  async  getCards(page?: number) {
    page = (page ? page : 1);
    try {
      var name = this.searchbarMobile.nativeElement.value
      if (this.isDesktopDevice) {
        name = this.searchbarDesktop.nativeElement.value
      }

      this.loading();
      await wait(300);
      const payload = await this.cardListService.list(name, page);
      this.cards = payload.data;
      this.currentPage = Number(payload.page);
      this.totalCount = payload.totalCount;
    } catch (err) {
      Swal.fire('Oops...', err, 'error')
    }
  }

  /**
   * a function that places fake cards on the screen while waiting for the server to respond
   */
  loading() {
    this.cards = [];
    for (var _i = 0; _i < 12; _i++) {
      this.cards.push(mock);
    }
  }


  /**
   *  A function to change language
   */
  setLang(lang: string) {
    SetLang(lang)
    this.translate.setDefaultLang(lang)
  }

}
