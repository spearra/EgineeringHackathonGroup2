import { Routes } from '@angular/router';
import { ChatForm } from './features/chat-form/chat-form';
import { Home } from './features/home/home';
import { SettingsComponent } from './features/settings/settings';
import { MeatComponent } from './features/meat/meat';
import { IndianaComponent } from './features/indiana/indiana';

export const routes: Routes = [
    {path: '', component: Home, pathMatch: 'full'},
    {path: 'settings', component: SettingsComponent},
    {path: 'recipes', component: ChatForm},
    {path: 'meat', component: MeatComponent},
    {path: 'indiana', component: IndianaComponent}
];
