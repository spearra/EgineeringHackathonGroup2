import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppSettings } from './settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settingsSubject = new BehaviorSubject<AppSettings | null>(null);

  setSettings(settings: AppSettings) {
    this.settingsSubject.next(settings);
  }

  getSettings() {
    return this.settingsSubject.value;
  }

  settings$ = this.settingsSubject.asObservable();
}