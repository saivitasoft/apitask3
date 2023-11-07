import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SaiapiService {
  private getUrl=   'https://fakestoreapi.com/products';

  constructor( private http:HttpClient) { }

  getData(){
   return this.http.get(this.getUrl)
  }
}
