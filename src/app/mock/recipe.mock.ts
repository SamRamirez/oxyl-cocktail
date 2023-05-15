import { Recipe } from "../model/recipe.model";

export const MOCK_RECIPES: Recipe[] = [
  {
    id: 0,
    name: 'Daiquiri',
    picture:
      'https://www.liquor.com/thmb/AN9OCZOXjnCO8_YpiYWNTLZDGjY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mango-brava-daiquiri-720x720-primary-4a3e81859e1e497bbd528f71ef09494a.jpg',
    description:
      `The classic Daiquiri is a super simple rum cocktail that’s well-balanced and refreshing.
      The combination of sweet, sour and spirit is refreshingly tangy and perfect for any occasion.`,
    ingredients: [
      {
        ingredient: {
          name: 'Dark rum (Appleton Estate Reserve)',
        },
        quantity: 2,
        unit: 'oz'
      },
      {
        ingredient: {
          name: 'Fresh lime juice',
        },
        quantity: 1,
        unit: 'oz'
      },
      {
        ingredient: {
          name: 'Simple sirup',
        },
        quantity: 1,
        unit: 'oz'
      }
    ],
    instructions: [
      'Add all the ingredients to a shaker and fill with ice.',
      'Shake, and strain into a chilled Martini glass.',
      'Garnish with a lime wheel.'
    ]
  },
  {
    id: 1,
    name: 'Piña Colada',
    picture:
      'https://www.liquor.com/thmb/hmc01qQqlwI0H1od1Qw0me4LEjI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__02__13090826__pina-colada-720x720-recipe-253f1752769447f6998afd2b9469c24e.jpg',
    description:
      `The Piña Colada is a classic tropical cocktail with rum, pineapple and coconut milk.
      This classic recipe will transport you to paradise. Getting caught in the rain is not required.`,
    ingredients: [
      {
        ingredient: {
          name: 'Light or gold rum',
        },
        quantity: 1.5,
        unit: 'oz'
      },
      {
        ingredient: {
          name: 'Coconut milk',
        },
        quantity: 2,
        unit: 'oz'
      },
      {
        ingredient: {
          name: 'Fresh pineapple juice',
        },
        quantity: 2,
        unit: 'oz'
      }
    ],
    instructions: [
      'Add all the ingredients to a shaker and fill with ice.',
      'Shake, and strain into a Hurricane glass filled with fresh ice.',
      'Garnish with a cherry and a pineapple wedge.'
    ]
  },
  {
    id: 2,
    name: 'Mojito',
    picture:
      'https://www.liquor.com/thmb/G6gVUxrTRCesHawcaUYl9ITSNmA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mojito-720x720-primary-6a57f80e200c412e9a77a1687f312ff7.jpg',
    description:
      `To many people, the Mojito represents the perfect rum cocktail. The origins of the drink can be traced back to
      Cuba and the 16th-century Cuban cocktail El Draque, named for Sir Francis Drake. `,
    ingredients: [
      {
        ingredient: {
          name: 'Mint leaves',
        },
        quantity: 6,
        unit: ''
      },
      {
        ingredient: {
          name: 'Simple syrup',
        },
        quantity: 0.75,
        unit: 'oz'
      },
      {
        ingredient: {
          name: 'Fresh lime juice',
        },
        quantity: 0.75,
        unit: 'oz'
      },
      {
        ingredient: {
          name: 'White rum',
        },
        quantity: 1.5,
        unit: 'oz'
      },
      {
        ingredient: {
          name: 'Club soda',
        },
        quantity: 1.5,
        unit: 'oz'
      }
    ],
    instructions: [
      'In a shaker, lightly muddle the mint.',
      'Add the simple syrup, lime juice and rum, and fill with ice.',
      'Shake well and pour (unstrained) into a highball glass.',
      'Top with the club soda and garnish with a mint sprig.'
    ]
  },
  {
    id: 3,
    name: 'Dirty Martini',
    picture:
      'https://www.liquor.com/thmb/rSFRMIErR5V0GN1eQMobHHwX498=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dirty-martini-1500x1500-hero-6cbd60561031409ea1dbf1657d05cb2d.jpg',
    description:
      'A dash of olive brine brings a salty, savory note to the all-time classic.',
    ingredients: [
      {
        ingredient: {
          name: 'Gin or vodka',
        },
        quantity: 2.5,
        unit: 'oz'
      },
      {
        ingredient: {
          name: 'Dry vermouth',
        },
        quantity: 0.5,
        unit: 'oz'
      },
      {
        ingredient: {
          name: 'Olive brine',
        },
        quantity: 0.5,
        unit: 'oz'
      }
    ],
    instructions: [
      'Add all the ingredients to a mixing glass filled with ice.',
      'Stir, and strain into a chilled cocktail glass.',
      'Garnish with 2 olives.'
    ]
  }
];// TODO : add mock recipes here
