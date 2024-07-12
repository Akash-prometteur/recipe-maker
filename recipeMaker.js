let recipes = [
  {
    title: "Spaghetti Carbonara",
    description:
      "A classic Italian pasta dish with a creamy sauce made from eggs, Pecorino Romano cheese, and pancetta or guanciale.",
    ingredients: [
      "200g spaghetti",
      "100g pancetta or guanciale, diced",
      "2 large eggs",
      "50g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
    ],
    instructions:
      "1. Cook spaghetti in boiling salted water until al dente. Reserve pasta water. 2. Cook pancetta until crisp. 3. Whisk eggs and cheeses. 4. Toss hot spaghetti with pancetta, then egg mixture. 5. Add reserved pasta water, if needed. 6. Season and serve with extra cheese.",
    image:
      "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg",
  },
  {
    title: "Chicken Stir-Fry",
    description:
      "A quick and flavorful dish featuring thinly sliced chicken and colorful bell peppers stir-fried with garlic, ginger, and a savory sauce.",
    ingredients: [
      "2 boneless, skinless chicken breasts, thinly sliced",
      "1 red bell pepper, thinly sliced",
      "1 green bell pepper, thinly sliced",
      "1 onion, thinly sliced",
      "2 cloves garlic, minced",
      "1 inch ginger, grated",
      "2 tablespoons soy sauce",
      "1 tablespoon oyster sauce",
      "1 tablespoon cornstarch",
      "1/2 cup chicken broth",
      "2 tablespoons vegetable oil",
      "Salt and pepper to taste",
    ],
    instructions:
      "1. Mix soy sauce, oyster sauce, cornstarch, and broth. 2. Stir-fry chicken until cooked; set aside. 3. Stir-fry garlic and ginger; add vegetables. 4. Return chicken to skillet with sauce; stir until thickened. 5. Season and serve hot with rice.",
    image:
      "https://www.saltandlavender.com/wp-content/uploads/2022/03/chicken-stir-fry-1.jpg",
  },
  {
    title: "Caprese Salad",
    description:
      "A simple and elegant salad featuring ripe tomatoes, fresh mozzarella, and basil, drizzled with olive oil and balsamic glaze.",
    ingredients: [
      "2 large ripe tomatoes, sliced",
      "1 ball fresh mozzarella cheese, sliced",
      "Fresh basil leaves",
      "Extra virgin olive oil",
      "Balsamic glaze",
      "Salt and pepper to taste",
    ],
    instructions:
      "1. Alternate tomato and mozzarella slices. 2. Add basil leaves. 3. Drizzle with olive oil and balsamic glaze. 4. Season and serve as a side dish or appetizer.",
    image:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
  },
  {
    title: "Chocolate Chip Cookies",
    description:
      "Classic cookies with a perfect balance of buttery dough and semisweet chocolate chips, baked until golden brown.",
    ingredients: [
      "1 cup unsalted butter, softened",
      "1 cup granulated sugar",
      "1 cup packed brown sugar",
      "2 large eggs",
      "1 teaspoon vanilla extract",
      "3 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1/2 teaspoon salt",
      "2 cups semisweet chocolate chips",
    ],
    instructions:
      "1. Cream butter and sugars. 2. Beat in eggs and vanilla. 3. Mix flour, baking soda, and salt; gradually add to creamed mixture. 4. Stir in chocolate chips. 5. Drop onto baking sheets; bake until golden. 6. Cool on wire rack.",
    image:
      "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg",
  },
  {
    title: "Greek Salad",
    description:
      "A vibrant salad with cherry tomatoes, cucumber, red onion, bell pepper, Kalamata olives, feta cheese, and a Mediterranean dressing.",
    ingredients: [
      "2 cups cherry tomatoes, halved",
      "1 cucumber, sliced",
      "1/2 red onion, thinly sliced",
      "1/2 green bell pepper, chopped",
      "1/2 cup Kalamata olives, pitted",
      "1/2 cup crumbled feta cheese",
      "Fresh oregano leaves",
      "Extra virgin olive oil",
      "Red wine vinegar",
      "Salt and pepper to taste",
    ],
    instructions:
      "1. Combine tomatoes, cucumber, onion, bell pepper, and olives. 2. Add feta cheese and oregano. 3. Drizzle with olive oil and vinegar. 4. Season and toss gently. 5. Serve chilled.",
    image:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-6-1.jpg",
  },
  {
    title: "Guacamole",
    description:
      "A creamy dip made from mashed avocados mixed with lime juice, spices, onion, cilantro, and tomatoes.",
    ingredients: [
      "2 ripe avocados, peeled and mashed",
      "1 lime, juiced",
      "1/2 teaspoon salt",
      "1/2 teaspoon ground cumin",
      "1/2 teaspoon cayenne pepper",
      "1/2 onion, finely diced",
      "2 tablespoons chopped fresh cilantro",
      "1 roma tomato, diced",
    ],
    instructions:
      "1. Mash avocados with lime juice, salt, cumin, and cayenne. 2. Fold in onion, cilantro, and tomato. 3. Cover and chill. 4. Serve with chips or as a topping.",
    image:
      "https://detoxinista.com/wp-content/uploads/2019/01/guacamole-in-bowl.jpg",
  },
  {
    title: "Pasta Primavera",
    description:
      "A light pasta dish with fettuccine, mixed vegetables, garlic, Parmesan, and a touch of cream.",
    ingredients: [
      "8 oz fettuccine pasta",
      "1 cup broccoli florets",
      "1 cup sliced bell peppers (assorted colors)",
      "1/2 cup sliced carrots",
      "1/2 cup cherry tomatoes, halved",
      "1/2 cup peas",
      "2 cloves garlic, minced",
      "1/4 cup grated Parmesan cheese",
      "1/4 cup heavy cream",
      "2 tablespoons olive oil",
      "Salt and pepper to taste",
    ],
    instructions:
      "1. Cook pasta with vegetables; reserve water. 2. Sauté garlic in oil; add pasta and vegetables. 3. Stir in Parmesan and cream; add reserved water. 4. Season and serve.",
    image:
      "https://thecozycook.com/wp-content/uploads/2024/02/Pasta-Primavera-f.jpg",
  },
  {
    title: "Caesar Salad",
    description:
      "A classic salad of romaine lettuce tossed with Caesar dressing, croutons, Parmesan cheese, and black pepper.",
    ingredients: [
      "1 head romaine lettuce, torn into bite-size pieces",
      "1/2 cup Caesar salad dressing",
      "1/2 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "Freshly ground black pepper",
    ],
    instructions:
      "1. Toss lettuce with dressing. 2. Add croutons and toss. 3. Sprinkle with Parmesan and pepper. 4. Serve as a side or main dish with chicken.",
    image:
      "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
  },
  {
    title: "Ratatouille",
    description:
      "A flavorful vegetable stew with eggplant, zucchini, bell peppers, onion, garlic, tomatoes, and aromatic herbs.",
    ingredients: [
      "1 eggplant, diced",
      "1 zucchini, diced",
      "1 yellow squash, diced",
      "1 onion, diced",
      "2 bell peppers (assorted colors), diced",
      "3 cloves garlic, minced",
      "2 cups diced tomatoes (canned or fresh)",
      "2 tablespoons tomato paste",
      "1/4 cup fresh basil leaves, chopped",
      "1/4 cup fresh parsley leaves, chopped",
      "1 teaspoon dried thyme",
      "Salt and pepper to taste",
      "Olive oil",
    ],
    instructions:
      "1. Sauté eggplant until browned; set aside. 2. Sauté zucchini, squash, onion, peppers, and garlic. 3. Add tomatoes and paste; cook. 4. Return eggplant with herbs; simmer. 5. Season and serve hot.",
    image:
      "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg",
  },
  {
    title: "Berry Smoothie",
    description:
      "A refreshing blend of mixed berries, banana, Greek yogurt, and milk, sweetened with honey.",
    ingredients: [
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "1 banana, peeled and sliced",
      "1/2 cup plain Greek yogurt",
      "1/2 cup milk (or dairy-free alternative)",
      "1 tablespoon honey (optional)",
    ],
    instructions:
      "1. Blend berries, banana, yogurt, and milk. 2. Add honey if desired. 3. Blend until smooth. 4. Serve immediately.",
    image:
      "https://www.dinneratthezoo.com/wp-content/uploads/2017/01/mixed-berry-smoothie-2.jpg",
  },
];

function renderRecipeList() {
  let recipeListHTML = "";

  recipes.forEach(function (recipeObject, index) {
    const { title, description, ingredients, instructions, image } =
      recipeObject;

    html = `
        <div>
            <img src="${image}" width="100" height="100">
            <h3 class="recipe-title" data-index="${index}">${title}</h3>
            <ul class="ingredients">
                ${ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}
            </ul>
            <p>${description}</p>
        </div> 
        `;

    recipeListHTML += html;
  });

  document.querySelector(".js-recipe-list").innerHTML = recipeListHTML;

  document.querySelectorAll(".recipe-title").forEach((title, index) => {
    title.addEventListener("click", () => {
      const selectedRecipe = recipes[index]

      const title = selectedRecipe.title;
      const instructions = selectedRecipe.instructions;

      showModal(title, instructions);
      openModal();
    });
  });
}

function showModal(title, instructions) {
  let modalHTML;

  const modal = `
  <div>
      <h3>Recipe Name: ${title}</h3>
      <p>Instructions: </p>
      <p>${instructions}</p>
  </div>
  <button class="close-modal" onclick=(closeModal())>Close</button>
      `;

  modalHTML += modal;

  document.querySelector(".modal").innerHTML = modalHTML;
}

function openModal() {
  document.querySelector(".modal").classList.remove("hidden");
}

function closeModal() {
  document.querySelector(".modal").classList.add("hidden");
}

document.querySelector("#searchbar").addEventListener("keydown", () => {
  searchRecipe();
});
// document.querySelector(".search-btn").addEventListener("click", () => {
//   searchRecipe();
// });

function searchRecipe() {
  let searchInput = document.getElementById("searchbar").value;
  searchInput = searchInput.toLowerCase();
  let ingredients = document.getElementsByClassName("ingredients");

  for (i = 0; i < ingredients.length; i++) {
    if (!ingredients[i].innerHTML.toLocaleLowerCase().search(searchInput)) {
      ingredients[i].style.display = "none";
    } else {
      ingredients[i].style.display = "list-item";
    }
  }

  renderRecipeList();
}
