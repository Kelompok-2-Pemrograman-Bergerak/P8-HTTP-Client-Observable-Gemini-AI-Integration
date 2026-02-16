import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) {}

  async getRandomUser(): Promise<any> {

    // Random ID antara 1 sampai 10
    const randomId = Math.floor(Math.random() * 10) + 1;

    const apiUrl = `https://jsonplaceholder.typicode.com/users/${randomId}`;

    return await lastValueFrom(this.http.get<any>(apiUrl));
  }
}
