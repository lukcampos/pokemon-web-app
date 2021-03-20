import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 0;
  @Input() totalCount: number = 0;
  fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  @Output() pageChanged = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changePage(pageNumber: number) {
    this.pageChanged.emit({ "page": pageNumber })
  }

  getRoundNumber() {
    return Math.round(this.totalCount / 12)
  }

}
