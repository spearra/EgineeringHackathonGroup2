import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface RecipeCategory {
  category: string;
  season?: string;
  recipes: Recipe[];
}

interface Recipe {
  name: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cookTime: string;
  ingredients?: string[];
  instructions?: string[];
  tips?: string[];
}

@Component({
  selector: 'app-indiana',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './indiana.html',
  styleUrls: ['./indiana.css']
})
export class IndianaComponent {
  @Output() backToHome = new EventEmitter<void>();

  indianaRecipes: RecipeCategory[] = [
    {
      category: 'ICONIC INDIANA DISHES',
      recipes: [
        {
          name: 'Hoosier Pork Tenderloin Sandwich',
          description: 'Indiana\'s most famous sandwich - a massive breaded pork cutlet that hangs over the bun!',
          difficulty: 'Medium',
          cookTime: '30 minutes',
          ingredients: [
            '1 pork tenderloin (1-2 lbs)',
            '2 cups all-purpose flour',
            '2 eggs, beaten',
            '2 cups fine breadcrumbs or cracker crumbs',
            'Salt and pepper to taste',
            'Vegetable oil for frying',
            'Hamburger buns',
            'Lettuce, tomato, pickles, onion',
            'Mayo, mustard, ketchup'
          ],
          instructions: [
            'Slice pork tenderloin into 1/2 inch thick medallions',
            'Pound each piece between plastic wrap until very thin (1/4 inch)',
            'Season both sides with salt and pepper',
            'Set up breading station: flour, beaten eggs, breadcrumbs',
            'Dredge each piece in flour, then egg, then breadcrumbs',
            'Heat oil to 350°F in large skillet',
            'Fry cutlets 2-3 minutes per side until golden brown',
            'Drain on paper towels',
            'Serve on buns with your favorite toppings'
          ],
          tips: [
            'The pork should be pounded very thin - it will be huge!',
            'Don\'t overcrowd the pan when frying',
            'Use a meat thermometer - internal temp should reach 145°F'
          ]
        },
        {
          name: 'Indiana Sugar Cream Pie',
          description: 'The official state pie of Indiana - creamy, sweet, and topped with cinnamon.',
          difficulty: 'Medium',
          cookTime: '1 hour 15 minutes',
          ingredients: [
            '1 unbaked 9-inch pie crust',
            '1 cup heavy cream',
            '1 cup whole milk',
            '2/3 cup granulated sugar',
            '1/3 cup cornstarch',
            '1 teaspoon vanilla extract',
            '3 tablespoons butter',
            'Ground cinnamon for sprinkling'
          ],
          instructions: [
            'Preheat oven to 450°F',
            'Mix sugar and cornstarch in a bowl',
            'Sprinkle mixture evenly in pie crust',
            'Pour cream and milk over sugar mixture',
            'Dot with butter pieces',
            'Bake 15 minutes at 450°F',
            'Reduce to 350°F and bake 30-40 minutes until set',
            'Sprinkle with cinnamon while warm',
            'Cool completely before serving'
          ]
        }
      ]
    },
    {
      category: 'FALL HARVEST RECIPES',
      season: 'Fall (September - November)',
      recipes: [
        {
          name: 'Indiana Sweet Corn Casserole',
          description: 'A beloved side dish featuring fresh Indiana corn at its peak.',
          difficulty: 'Easy',
          cookTime: '45 minutes',
          ingredients: [
            '4 cups fresh corn kernels (about 6 ears)',
            '1 cup sour cream',
            '1/2 cup butter, melted',
            '1 box corn muffin mix',
            '1 can creamed corn',
            '2 eggs, beaten',
            '1 cup shredded cheddar cheese'
          ],
          instructions: [
            'Preheat oven to 350°F',
            'Grease a 9x13 baking dish',
            'Mix all ingredients except cheese in large bowl',
            'Pour into prepared baking dish',
            'Top with shredded cheese',
            'Bake 35-40 minutes until golden and set'
          ]
        },
        {
          name: 'Pumpkin Roll',
          description: 'A classic fall dessert perfect for Indiana pumpkin season.',
          difficulty: 'Hard',
          cookTime: '1 hour + chilling',
          ingredients: [
            '3 eggs',
            '1 cup granulated sugar',
            '2/3 cup pumpkin puree',
            '3/4 cup all-purpose flour',
            '1 tsp baking soda',
            '1 tsp cinnamon',
            '8 oz cream cheese, softened',
            '1 cup powdered sugar',
            '6 tbsp butter, softened'
          ]
        }
      ]
    },
    {
      category: 'SPRING & SUMMER FAVORITES',
      season: 'Spring & Summer (March - August)',
      recipes: [
        {
          name: 'Indiana Strawberry Shortcake',
          description: 'Made with fresh berries from Indiana strawberry farms.',
          difficulty: 'Easy',
          cookTime: '30 minutes',
          ingredients: [
            '2 cups all-purpose flour',
            '1/4 cup granulated sugar',
            '1 tbsp baking powder',
            '1/2 cup cold butter, cubed',
            '2/3 cup milk',
            '2 quarts fresh Indiana strawberries',
            '1/4 cup sugar (for berries)',
            'Whipped cream'
          ]
        },
        {
          name: 'Fresh Tomato Sandwich',
          description: 'Simple perfection with vine-ripened Indiana tomatoes.',
          difficulty: 'Easy',
          cookTime: '5 minutes',
          ingredients: [
            '2 slices thick white bread',
            '1 large ripe tomato, sliced thick',
            'Mayonnaise',
            'Salt and pepper',
            'Fresh basil (optional)'
          ],
          instructions: [
            'Toast bread lightly if desired',
            'Spread mayo generously on both slices',
            'Layer thick tomato slices on one piece',
            'Season tomatoes with salt and pepper',
            'Add fresh basil if using',
            'Top with second slice of bread'
          ],
          tips: [
            'Use the ripest, juiciest tomatoes you can find',
            'Don\'t skimp on the mayo - it\'s essential!',
            'Salt the tomatoes and let sit 5 minutes before assembling'
          ]
        }
      ]
    },
    {
      category: 'WINTER COMFORT FOODS',
      season: 'Winter (December - February)',
      recipes: [
        {
          name: 'Hoosier Bean Soup',
          description: 'Hearty soup perfect for cold Indiana winters.',
          difficulty: 'Easy',
          cookTime: '2 hours',
          ingredients: [
            '1 lb dried navy beans',
            '1 ham bone or ham hock',
            '1 large onion, diced',
            '2 carrots, diced',
            '2 celery stalks, diced',
            '8 cups water',
            'Salt and pepper to taste',
            'Bay leaves'
          ]
        },
        {
          name: 'Indiana Persimmon Pudding',
          description: 'Traditional dessert made with native Indiana persimmons.',
          difficulty: 'Medium',
          cookTime: '1 hour 30 minutes',
          ingredients: [
            '2 cups persimmon pulp',
            '2 cups sugar',
            '2 eggs',
            '1 1/2 cups all-purpose flour',
            '1 tsp baking soda',
            '1 cup buttermilk',
            '1/2 cup melted butter',
            'Spices: cinnamon, nutmeg, ginger'
          ]
        }
      ]
    }
  ];

  onBackToHome(): void {
    console.log('Indiana component: Back button clicked');
    this.backToHome.emit();
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'Easy': return '#28a745';
      case 'Medium': return '#ffc107';
      case 'Hard': return '#dc3545';
      default: return '#6c757d';
    }
  }
}