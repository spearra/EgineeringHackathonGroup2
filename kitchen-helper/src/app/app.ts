import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './features/settings/settings';

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
  imports: [SettingsComponent],
  template: `
    <div class="app">
      <nav>
        <button (click)="showSettings = !showSettings">Settings</button>
      </nav>
      
      @if (showSettings) {
        <app-settings></app-settings>
      }
      
      <!-- Your other components -->
    </div>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {
  showSettings = false;

  openSettings(): void {
    console.log('Opening settings');
    this.showSettings = true;
  }

  closeSettings(): void {
    console.log('Closing settings - going back to home');
    this.showSettings = false;
  }
}