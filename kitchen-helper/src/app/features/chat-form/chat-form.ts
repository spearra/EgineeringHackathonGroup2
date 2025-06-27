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
    
    const response = await client.responses.create({
      model: 'gpt-4o',
      instructions: 'You are a recipe generator for an old person',
      input: this.promptText,
    });
    this.responseStr = response.output_text;
    
    console.log(response.output_text);
  }


}
