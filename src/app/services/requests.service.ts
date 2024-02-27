import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  url = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}

  getStore() {
    return this.http.get(this.url);
  }
}
