import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface AppSettings {
  measurementSystem: 'metric' | 'imperial';
  temperatureUnit: 'celsius' | 'fahrenheit';
  theme: 'light' | 'dark' | 'auto';
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  timerSound: boolean;
  timerVolume: number;
  autoSaveRecipes: boolean;
  showNutritionInfo: boolean;
  defaultServings: number;
  language: string;
  highContrast: boolean;
  reduceMotion: boolean;
  kitchenTimerVibration: boolean;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,  // Make sure this is here!
    RouterModule
  ],
  templateUrl: './settings.html',
  styleUrls: ['./settings.css']
})
export class SettingsComponent implements OnInit {
  @Output() backToHome = new EventEmitter<void>();

  settingsForm!: FormGroup; // Use definite assignment assertion
  
  measurementOptions = [
    { value: 'metric', label: 'Metric (kg, g, ml, L, °C)' },
    { value: 'imperial', label: 'Imperial (lb, oz, cups, °F)' }
  ];

  temperatureOptions = [
    { value: 'celsius', label: 'Celsius (°C)' },
    { value: 'fahrenheit', label: 'Fahrenheit (°F)' }
  ];

  themeOptions = [
    { value: 'light', label: 'Light Mode' },
    { value: 'dark', label: 'Dark Mode' },
    { value: 'auto', label: 'Auto (System Preference)' }
  ];

  fontSizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'extra-large', label: 'Extra Large' }
  ];

  colorBlindOptions = [
    { value: 'none', label: 'None' },
    { value: 'protanopia', label: 'Protanopia (Red-Green)' },
    { value: 'deuteranopia', label: 'Deuteranopia (Red-Green)' },
    { value: 'tritanopia', label: 'Tritanopia (Blue-Yellow)' }
  ];

  languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
    { value: 'it', label: 'Italiano' },
    { value: 'ja', label: '日本語' }
  ];

  defaultSettings: AppSettings = {
    measurementSystem: 'metric',
    temperatureUnit: 'celsius',
    theme: 'auto',
    fontSize: 'medium',
    colorBlindMode: 'none',
    timerSound: true,
    timerVolume: 50,
    autoSaveRecipes: true,
    showNutritionInfo: true,
    defaultServings: 4,
    language: 'en',
    highContrast: false,
    reduceMotion: false,
    kitchenTimerVibration: false
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadSettings();
    this.setupFormSubscriptions();
  }

  onBackToHome(): void {
    this.backToHome.emit();
  }

  private initializeForm(): void {
    this.settingsForm = this.fb.group({
      measurementSystem: [this.defaultSettings.measurementSystem],
      temperatureUnit: [this.defaultSettings.temperatureUnit],
      theme: [this.defaultSettings.theme],
      fontSize: [this.defaultSettings.fontSize],
      colorBlindMode: [this.defaultSettings.colorBlindMode],
      timerSound: [this.defaultSettings.timerSound],
      timerVolume: [this.defaultSettings.timerVolume],
      autoSaveRecipes: [this.defaultSettings.autoSaveRecipes],
      showNutritionInfo: [this.defaultSettings.showNutritionInfo],
      defaultServings: [this.defaultSettings.defaultServings],
      language: [this.defaultSettings.language],
      highContrast: [this.defaultSettings.highContrast],
      reduceMotion: [this.defaultSettings.reduceMotion],
      kitchenTimerVibration: [this.defaultSettings.kitchenTimerVibration]
    });
  }

  private loadSettings(): void {
    const savedSettings = localStorage.getItem('kitchenAppSettings');
    if (savedSettings) {
      try {
        const settings: AppSettings = JSON.parse(savedSettings);
        this.settingsForm.patchValue(settings);
        this.applySettings(settings);
      } catch (error) {
        console.error('Error loading settings:', error);
        this.applySettings(this.defaultSettings);
      }
    } else {
      this.applySettings(this.defaultSettings);
    }
  }

  private setupFormSubscriptions(): void {
    this.settingsForm.valueChanges.subscribe((settings: AppSettings) => {
      this.saveSettings(settings);
      this.applySettings(settings);
    });
  }

  private saveSettings(settings: AppSettings): void {
    localStorage.setItem('kitchenAppSettings', JSON.stringify(settings));
  }

  private applySettings(settings: AppSettings): void {
    document.body.setAttribute('data-theme', settings.theme);
    document.body.setAttribute('data-font-size', settings.fontSize);
    document.body.setAttribute('data-color-blind', settings.colorBlindMode);
    
    if (settings.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
    
    if (settings.reduceMotion) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }

    this.onSettingsChange(settings);
  }

  onSettingsChange(settings: AppSettings): void {
    console.log('Settings updated:', settings);
  }

  resetToDefaults(): void {
    this.settingsForm.patchValue(this.defaultSettings);
  }

  exportSettings(): void {
    const settings = this.settingsForm.value;
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'kitchen-app-settings.json';
    link.click();
  }

  onImportSettings(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const settings = JSON.parse(e.target?.result as string);
          this.settingsForm.patchValue(settings);
        } catch (error) {
          console.error('Invalid settings file:', error);
        }
      };
      reader.readAsText(file);
    }
  }

  previewColorBlindMode(mode: string): void {
    document.body.setAttribute('data-color-blind-preview', mode);
    
    setTimeout(() => {
      document.body.removeAttribute('data-color-blind-preview');
    }, 3000);
  }
}