import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CardList } from '../../models/card-list/card-list.model';
import { Card } from '../../models/card/card.model';
@Injectable({
  providedIn: 'root'
})
export class CardListService {
  private url: string = `${environment.api_url}/${environment.api_version}`;

  constructor(private http: HttpClient) { }

  public async list(pageSize?: number): Promise<Array<Card>> {

    return this.http.get<CardList>(`${this.url}/cards?pageSize=9&page=1`)
      .toPromise()
      .then(doc => doc.data)
  }
}
