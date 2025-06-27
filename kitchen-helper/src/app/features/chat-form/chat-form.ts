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
      apiKey: 'key',
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
