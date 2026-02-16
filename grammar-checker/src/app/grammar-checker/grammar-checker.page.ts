import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl
} from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonTextarea,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonSpinner
} from '@ionic/angular/standalone';

import { debounceTime, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { GeminiService } from '../services/gemini.service';

@Component({
  selector: 'app-grammar-checker',
  templateUrl: './grammar-checker.page.html',
  styleUrls: ['./grammar-checker.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonTextarea,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonSpinner
  ]
})
export class GrammarCheckerPage implements OnInit {

  textControl = new FormControl('');
  result: any = null;
  isLoading = false;

  constructor(private geminiService: GeminiService) {}

  ngOnInit() {

    this.textControl.valueChanges
      .pipe(
        debounceTime(1000),

        switchMap((text) => {

          if (!text || text.trim().length < 3) {
            this.result = null;
            return of(null);
          }

          this.isLoading = true;

          const prompt = `
Check grammar for: "${text}".
Respond ONLY with valid JSON.
Do NOT add explanation.
Format exactly:
{
  "status": "Correct" or "Incorrect",
  "correction": "..."
}
`;

          return this.geminiService.generateText(prompt);
        })
      )
      .subscribe({
        next: (response) => {

          if (!response) {
            this.isLoading = false;
            return;
          }

          try {

            const aiText =
              response.candidates[0].content.parts[0].text;

            console.log("RAW AI:", aiText);

            // Bersihkan markdown jika ada
            const cleaned = aiText
              .replace(/```json/g, '')
              .replace(/```/g, '')
              .trim();

            // Ambil hanya JSON
            const jsonStart = cleaned.indexOf('{');
            const jsonEnd = cleaned.lastIndexOf('}');

            const jsonString =
              cleaned.substring(jsonStart, jsonEnd + 1);

            this.result = JSON.parse(jsonString);

          } catch (error) {

            this.result = {
              status: 'Error',
              correction: 'AI response format invalid.'
            };
          }

          this.isLoading = false;
        },

        error: (err) => {
          console.error(err);

          this.result = {
            status: 'Error',
            correction: 'Connection error.'
          };

          this.isLoading = false;
        }
      });
  }
}
