import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URLS } from '../utilities/service-config';

@Injectable()
export class WordsAPIService {
  
  constructor(private httpClient: HttpClient) {}
  
  getWordDefinition(word: any): Observable<any> {
    return this.httpClient.get<any>(API_URLS.GET_WORD_DEFINITION(word)).pipe(
      map((response: any) => {
        return response;
      }),
    );;
  }
}

