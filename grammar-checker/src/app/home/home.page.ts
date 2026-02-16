import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonList,
  IonLabel,
  IonSpinner
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { send } from 'ionicons/icons';

// Import Service AI
import { GeminiService } from '../services/gemini.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonList,
    IonLabel,
    IonSpinner
  ],
})
export class HomePage {

  userInput: string = '';
  chatHistory: { role: 'user' | 'model'; text: string }[] = [];
  isLoading: boolean = false;

  constructor(private geminiService: GeminiService) {
    addIcons({ send });
  }

  kirimPesan() {
    if (!this.userInput.trim()) return;

    // 1️⃣ Simpan pesan user
    const pesanUser = this.userInput;
    this.chatHistory.push({ role: 'user', text: pesanUser });

    this.userInput = '';
    this.isLoading = true;

    // 2️⃣ Panggil API Gemini (Observable)
    this.geminiService.generateText(pesanUser).subscribe({

      next: (response) => {
        try {
          // 3️⃣ Ambil jawaban dari struktur JSON Gemini
          const jawabanAI =
            response.candidates[0].content.parts[0].text;

          // 4️⃣ Tampilkan jawaban AI
          this.chatHistory.push({
            role: 'model',
            text: jawabanAI
          });

        } catch (error) {
          this.chatHistory.push({
            role: 'model',
            text: 'Respon AI tidak valid.'
          });
        }

        this.isLoading = false;
      },

      error: (err) => {
        console.error('Error:', err);

        this.chatHistory.push({
          role: 'model',
          text: 'Maaf, AI sedang pusing (Error koneksi).'
        });

        this.isLoading = false;
      }

    });
  }
}
