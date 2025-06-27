import { Routes } from '@angular/router';
import { ChatForm } from './features/chat-form/chat-form';
import { Home } from './features/home/home';

export const routes: Routes = [
    {path: '', component: Home, pathMatch: 'full'},
    {path: 'recipes', component: ChatForm}
];
