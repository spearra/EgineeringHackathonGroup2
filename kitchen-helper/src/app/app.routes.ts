import { Routes } from '@angular/router';
import { ChatForm } from './features/chat-form/chat-form';

export const routes: Routes = [
    {path: '', component: ChatForm, pathMatch: 'full'}
];
