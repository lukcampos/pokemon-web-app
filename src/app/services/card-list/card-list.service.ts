import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CardList } from '../../models/card-list/card-list.model';
import { isEmpty } from '../../helpers';
@Injectable({
  providedIn: 'root'
})
export class CardListService {
  private url: string = `${environment.api_url}/${environment.api_version}`;

  constructor(private http: HttpClient) { }

  public async list(name?: string, page?: number): Promise<CardList> {
    var url = `${this.url}/cards?pageSize=12&page=${page}&orderBy=name`
    if (name && !isEmpty(name)) {
      url = `${url}&q=name:${name}`
    }
    return this.http.get<CardList>(url)
      .toPromise()
  }


}
