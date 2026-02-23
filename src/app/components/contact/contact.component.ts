import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf], // <-- Direct imports
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  project: string = '';
  buttonText: string = 'Ping Us On WhatsApp';
  isLoading: boolean = false;

  submitForm() {
    if (!this.name || !this.project) {
        alert('Please fill in all fields');
        return;
    }

    this.isLoading = true;
    this.buttonText = 'Opening WhatsApp...';

    const message = `*Quote Request from Bricks & Woods Landing Page*\n\n*Client Name:* ${this.name}\n\n*Project Details:*\n${this.project}`;
    const phoneNumber = '+919967741711';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      this.isLoading = false;
      this.buttonText = 'Ping Us On WhatsApp';
      this.name = '';
      this.project = '';
    }, 1500);
  }
}
