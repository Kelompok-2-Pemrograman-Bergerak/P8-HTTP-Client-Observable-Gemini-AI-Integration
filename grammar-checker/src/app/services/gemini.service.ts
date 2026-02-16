import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {

  // ⚠️ Jangan upload ke GitHub publik!
  private apiKey = 'AIzaSyB5VXwrydEy3SDnRT3nfEK_HOWzUP7Tun0';

  // Model terbaru (disarankan)
  private apiUrl =
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

  // Alternatif jika error:
  // private apiUrl =
  //   'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

  // private apiUrl =
  //   'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

  constructor(private http: HttpClient) {}

  generateText(prompt: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}`;

    const body = {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    };

    return this.http.post<any>(url, body);
  }
}
