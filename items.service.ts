import { Injectable } from '@angular/core';
import { Items } from '../interfaces/items';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  my_items_url: string = "http://localhost:3000/items";
  constructor(private http: HttpClient) {}

  getitems(): Observable <Items[]> {
    return this.http.get <Items[]> (this.my_items_url)
  }
  postitems(item: Items){
    return this.http.post<any>(this.my_items_url, item)
  }
}
