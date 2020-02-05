exports.seed = async function (knex) {
  await knex('food_request')
          .insert([
            {
              type: "Soup",
              servings: 22,
              pickup_time: 1581066814,
              description: "Describe food to be picked up.",
              completed: false,
              business_id: 1,
              volunteer_id: 1
            },
            {
              type: "Salad",
              servings: 24,
              pickup_time: 1581498814,
              description: "Describe food to be picked up.",
              completed: false,
              business_id: 3,
              volunteer_id: 3
            },
            {
              type: "Fruit/Vegetable",
              servings: 12,
              pickup_time: 1583741614,
              description: "Describe food to be picked up.",
              completed: false,
              business_id: 5,
              volunteer_id: 5
            },
            {
              type: "Side Dish",
              servings: 30,
              pickup_time: 1581239614,
              description: "Describe food to be picked up.",
              completed: false,
              business_id: 7,
              volunteer_id: 7
            },
            {
              type: "Entree/Main Dish",
              servings: 20,
              pickup_time: 1580894014,
              description: "Describe food to be picked up.",
              completed: false,
              business_id: 9,
              volunteer_id: 2
            },
            {
              type: "Bread",
              servings: 40,
              pickup_time: 1581758014,
              description: "Describe food to be picked up.",
              completed: false,
              business_id: 2,
              volunteer_id: 2
            },
            {
              type: "Dessert",
              servings: 16,
              pickup_time: 1581671614,
              description: "Describe food to be picked up.",
              completed: false,
              business_id: 4,
              volunteer_id: 4
            },
            {
              type: "Beverages",
              servings: 12,
              pickup_time: 1584173614,
              description: "Describe food to be picked up.",
              completed: false,
              business_id: 6,
              volunteer_id: 6
            }
          ])
      }