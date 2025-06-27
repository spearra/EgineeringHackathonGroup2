import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './features/settings/settings';
import { MeatComponent } from './features/meat/meat';
import { IndianaComponent } from './features/indiana/indiana';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'kitchen-helper';
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SettingsComponent, MeatComponent, IndianaComponent],
  template: `
    <div class="app">
      <nav>
        <button (click)="showSettings = !showSettings">Settings</button>
      </nav>
      
      @if (showSettings) {
        <app-settings></app-settings>
      }
      
      <nav>
        <button (click)="showMeat = !showMeat">Settings</button>
      </nav>

      @if (showMeat) {
        <app-meat></app-meat>
      }

      <nav>
        <button (click)="showIndiana = !showIndiana">Settings</button>
      </nav>

      @if (showIndiana) {
        <app-indiana></app-indiana>
      }
    </div>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {
  showSettings = false;
  showMeat = false;
  showIndiana = false;

  openSettings(): void {
    console.log('Opening settings');
    this.showSettings = true;
  }

  closeSettings(): void {
    console.log('Closing settings - going back to home');
    this.showSettings = false;
  }

  openMeat(): void {
    console.log('Opening meat');
    this.showMeat = true;
  }

  closeMeat(): void {
    console.log('Closing meat - going back to home');
    this.showMeat = false;
  }

  openIndiana(): void {
    console.log('Opening indiana');
    this.showIndiana = true;
  }

  closeIndiana(): void {
    console.log('Closing indiana - going back to home');
    this.showIndiana = false;
  }
}