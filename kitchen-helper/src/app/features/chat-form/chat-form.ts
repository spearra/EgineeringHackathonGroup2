import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseModel } from '../model/gpt-response';
import { gptModels } from '../model/constants';
import { environment } from '../../../environments/environment';
import { OpenAI } from 'openai/client.js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-form',
  imports: [FormsModule],
  templateUrl: './chat-form.html',
  styleUrl: './chat-form.css'
})
export class ChatForm implements OnInit{

  responseStr!: string;
  gptModels = gptModels;
  promptText = '';
  showSpinner = false;
  ingredients = '';
  dietaryRestrictions = '';
  other = '';


  ngOnInit(): void {
  }

  checkResponse() {
    const client = new OpenAI({
      apiKey: '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',
      dangerouslyAllowBrowser: true
    });
    this.callAPI(client);
  }

  getText(data:string) {
    return data.split('\n').filter(f=>f.length>0);
  }

  async callAPI(client: OpenAI) {

    this.showSpinner = true;

    this.promptText = "Generate a recipe in plain text with the given ingredients: " + this.ingredients + 
    ", the following dietary restrictions: " + this.dietaryRestrictions +
    ", and the following additional requirements: " + this.other;
    
    const response = await client.responses.create({
      model: 'gpt-4o',
      instructions: 'You are a recipe generator for an old person, specializing in Indiana-based cuisine and local ingrediants',
      input: this.promptText,
    });
    this.responseStr = response.output_text;

    this.showSpinner = false;
  }


}
