import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";

@Injectable()
export class DatabaseService {

  constructor(private http:Http) { }

  // returns Observable
  getData(title: string, year?: number, plot?: string){

    return this.http
      .get(`http://www.omdbapi.com/`, {
        search: `t=${title}&y${year}=&plot=${plot}&r=json`
      });
  }

}