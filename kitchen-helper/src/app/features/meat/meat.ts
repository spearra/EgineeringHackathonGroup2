import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MeatType {
  category: string;
  items: MeatItem[];
}

interface MeatItem {
  name: string;
  temperature: string;
  celsius: string;
  description?: string;
}

@Component({
  selector: 'app-meat',
  standalone: true,
  imports: [CommonModule,
            RouterModule
  ],
  templateUrl: './meat.html',
  styleUrls: ['./meat.css']
})
export class MeatComponent {
  @Output() backToHome = new EventEmitter<void>();

  meatData: MeatType[] = [
    {
      category: 'POULTRY',
      items: [
        { name: 'White Meat', temperature: '160°F', celsius: '71°C' },
        { name: 'Dark Meat', temperature: '165°F', celsius: '75°C' },
        { name: 'Ground Poultry', temperature: '165°F', celsius: '75°C' }
      ]
    },
    {
      category: 'PORK',
      items: [
        { name: 'White Meat', temperature: '145°F', celsius: '63°C' },
        { name: 'Dark Meat', temperature: '160°F', celsius: '71°C' },
        { name: 'Ground Pork', temperature: '160°F', celsius: '71°C' }
      ]
    },
    {
      category: 'BEEF',
      items: [
        { name: 'Rare', temperature: '120°F', celsius: '49°C' },
        { name: 'Medium-Rare', temperature: '130°F', celsius: '55°C' },
        { name: 'Medium', temperature: '140°F', celsius: '60°C' },
        { name: 'Medium-Well', temperature: '150°F', celsius: '65°C' },
        { name: 'Well-Done', temperature: '155°F', celsius: '70°C' },
        { name: 'Ground Beef', temperature: '160°F', celsius: '71°C' }
      ]
    },
    {
      category: 'LAMB',
      items: [
        { name: 'Medium-Rare', temperature: '125°F', celsius: '52°C' },
        { name: 'Medium', temperature: '130°F', celsius: '55°C' },
        { name: 'Medium-Well', temperature: '145°F', celsius: '63°C' },
        { name: 'Well-Done', temperature: '150°F', celsius: '65°C' },
        { name: 'Ground Lamb', temperature: '160°F', celsius: '71°C' }
      ]
    },
    {
      category: 'SEAFOOD',
      items: [
        { name: 'Fish with Fins', temperature: '145°F', celsius: '63°C' },
        { 
          name: 'Shrimp, Lobster, Crab, Scallops', 
          temperature: 'Visual Check', 
          celsius: '', 
          description: 'Cook until flesh is white and opaque' 
        },
        { 
          name: 'Clams, Oysters, Mussels', 
          temperature: 'Visual Check', 
          celsius: '', 
          description: 'Cook until shells open' 
        }
      ]
    }
  ];

  onBackToHome(): void {
    this.backToHome.emit();
  }
}