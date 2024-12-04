import React from 'react';

const Recipes: React.FC = () => {
  const recipes = [
    {
      id: 1,
      name: "Probiotic Mojito Mocktail",
      image: "/placeholder3.png",
      time: "5 mins",
      difficulty: "Easy",
      ingredients: [
        "1 bottle Classic Probiotic Lemonade",
        "Fresh mint leaves",
        "Lime wedges",
        "Crushed ice",
        "Sparkling water (optional)"
      ],
      steps: [
        "Muddle fresh mint leaves in a glass",
        "Add crushed ice and lime wedges",
        "Pour in Classic Probiotic Lemonade",
        "Top with sparkling water if desired",
        "Garnish with mint sprig"
      ]
    },
    {
      id: 2,
      name: "Blueberry Mint Spritzer",
      image: "/placeholder4.png",
      time: "3 mins",
      difficulty: "Easy",
      ingredients: [
        "1 bottle Blueberry Mint Fusion",
        "Fresh blueberries",
        "Mint sprigs",
        "Ice cubes",
        "Lemon twist"
      ],
      steps: [
        "Fill glass with ice cubes",
        "Pour in Blueberry Mint Fusion",
        "Add fresh blueberries",
        "Garnish with mint and lemon twist",
        "Serve immediately"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Drink Recipes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover creative ways to enjoy our probiotic drinks with these
            simple and delicious recipes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{recipe.name}</h3>
                <div className="flex space-x-4 mb-6">
                  <span className="text-gray-600">⏱ {recipe.time}</span>
                  <span className="text-gray-600">📝 {recipe.difficulty}</span>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Ingredients</h4>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-600">• {ingredient}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Instructions</h4>
                  <ol className="space-y-2">
                    {recipe.steps.map((step, index) => (
                      <li key={index} className="text-gray-600">
                        {index + 1}. {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;