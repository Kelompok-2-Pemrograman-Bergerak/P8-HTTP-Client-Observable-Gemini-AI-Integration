import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonSpinner
} from '@ionic/angular/standalone';

import { RandomUserService } from '../services/random-user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.page.html',
  styleUrls: ['./random-user.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    IonSpinner
  ]
})
export class RandomUserPage {

  user: any = null;
  isLoading = false;

  constructor(private randomUserService: RandomUserService) {}

  // WAJIB async/await
  async generateUser() {
    try {
      this.isLoading = true;

      const response = await this.randomUserService.getRandomUser();

      this.user = response;

      this.isLoading = false;

    } catch (error) {
      console.error('ERROR:', error);
      this.isLoading = false;
    }
  }
}
