import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseModel } from '../model/gpt-response';
import { gptModels } from '../model/constants';
import { OpenAI } from 'openai/client.js';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppSettings, SettingsComponent } from '../settings/settings';
import { SettingsService } from '../settings/settings.service';
import { environment } from '../../../environments/environment';
import {marked} from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-chat-form',
  imports: [FormsModule, RouterModule],
  templateUrl: './chat-form.html',
  styleUrl: './chat-form.css'
})
export class ChatForm implements OnInit{

  responseStr: SafeHtml='';
  gptModels = gptModels;
  promptText = '';
  showSpinner = false;
  ingredients = '';
  dietaryRestrictions = '';
  other = '';


  ngOnInit(): void {
  }

  constructor(private settingsService: SettingsService,
    private sanitizer: DomSanitizer) {
    
  }

  checkResponse() {
    const apiKey = environment.apiKey;
    const client = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true
    });
    this.callAPI(client);
  }

  getText(data:string) {
    return data.split('\n').filter(f=>f.length>0);
  }

  async callAPI(client: OpenAI) {

    this.showSpinner = true;
    const settings = this.settingsService.getSettings();
    const settingsStr = settings ? JSON.stringify(settings) : 'default settings';

    const measurement = settings? settings.measurementSystem: "Metric";
    const servings = settings? settings.defaultServings: 4;
    const lang = settings? settings.language: "English";
    const nutrition = settings? settings.showNutritionInfo: "true";
    const temp = settings? settings.temperatureUnit: "Celcius";



    this.promptText = "Generate a recipe in plain text with the given ingredients: " + this.ingredients + 
    ", the following dietary restrictions: " + this.dietaryRestrictions +
    ", and the following additional requirements: " + this.other + 
    ", with the following settings: measurement system - " + 
    measurement + ", defaultServings - " + 
    servings + ", language - " + 
    lang + ", show nutrition info - " + 
    nutrition + ", temperature unit - "  + 
    temp;
    
    console.log(this.promptText);

    const response = await client.responses.create({
      model: 'gpt-4o',
      instructions: 'You are a recipe generator for an old person',
      input: this.promptText,
    });
    const html = await marked(response.output_text);
  this.responseStr = this.sanitizer.bypassSecurityTrustHtml(html);
  this.showSpinner = false;
  }


}
