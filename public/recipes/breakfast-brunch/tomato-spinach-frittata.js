export default {
  id: "tomato-spinach-frittata",
  title: "Spanish Tomato & Spinach Frittata",
  category: "Breakfast & brunch",
  description: "A tomato and spinach frittata that uses the rest of the passata from the chicken and butter bean stew.",
  thumbnail: "assets/illustrations/recipes/tomato-spinach-frittata.webp",
  servings: "2 adult portions + 1 toddler portion",
  groups: [
    {
      title: "Frittata",
      tone: "blue",
      ingredients: [
        { id: "passata", name: "passata", grams: 250, note: "half a standard 500 g carton" },
        { id: "spinach", name: "baby spinach", grams: 160 },
        { id: "eggs", name: "large eggs", grams: 250, weightEstimate: true, quantity: 5, note: "weighed without the shells" },
        { id: "extra-eggs", name: "additional large eggs", grams: 100, weightEstimate: true, quantity: 2, note: "or 100 g liquid egg whites" },
        { id: "cheese", name: "cheddar or feta", grams: 40, note: "grated or crumbled" },
        { id: "oil", name: "avocado oil", grams: 8, note: "about ½ tbsp" },
        { id: "oregano", name: "dried oregano", grams: 1, weightEstimate: true, quantity: 1, unit: "tsp" },
        { id: "seasoning", name: "sea salt and black pepper", gramRange: [0, 3], weightEstimate: true, quantity: "To taste", note: "suggested total range. Start with less and adjust to taste" },
      ],
    },
  ],
  steps: [
    {
      id: "wilt", title: "Wilt the spinach and heat the tomatoes",
      timing: "200°C grill · 4 min on the hob",
      instructions: [
        "Preheat the oven grill to medium-high, around 200°C. Heat the oil in an ovenproof frying pan over medium heat and wilt the spinach for 2 minutes.",
        "Add the passata and oregano and cook for another 2 minutes until bubbling.",
      ],
    },
    {
      id: "eggs", title: "Set the eggs on the hob",
      timing: "4–5 min",
      instructions: [
        "Whisk the five eggs and the extra eggs or liquid whites with salt and pepper. Pour them into the bubbling tomato and spinach mixture and swirl gently with a spatula.",
        "Let the frittata cook undisturbed for 4–5 minutes, until the edges set.",
      ],
    },
    {
      id: "grill", title: "Grill and slice", art: "oven",
      timing: "4–5 min",
      instructions: [
        "Scatter the cheese over the top and place the pan under the grill for 4–5 minutes. The frittata should puff and set. Cook longer if the centre has not reached 71°C (160°F).",
        "Slice into wedges. For small hands, cut a portion into easy-to-grasp strips.",
      ],
      timers: [{ label: "Check the frittata", minutes: 4 }],
    },
  ],
  related: [{ id: "chicken-butter-bean-stew" }],
  safety: {
    title: "Check the centre",
    notes: [{ text: "Check the centre reaches 71°C (160°F) with a food thermometer before slicing." }],
    sources: [{ label: "FoodSafety.gov cooking temperatures", url: "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures" }],
  },
};
