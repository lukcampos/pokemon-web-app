import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CardResponse } from '../../models/card/card.model';
import { isEmpty } from '../../helpers';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private url: string = `${environment.api_url}/${environment.api_version}`;

  constructor(private http: HttpClient) { }

  /**
   *
    @param  id {string} the card id that you want to check
  A function that get card infos by ID
   */
  public async getById(id: string): Promise<CardResponse> {

    return this.http.get<CardResponse>(`${this.url}/cards/${id}`)
      .toPromise()
      .then((res)=>res)
  }


}
