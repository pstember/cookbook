export default {
  id: "chicken-butter-bean-stew",
  title: "Spanish Chicken & Butter Bean Stew",
  category: "Main dishes",
  description: "A smoky one-pan stew with tender chicken, whole butter beans and a creamy blended cannellini base.",
  servings: "4 adult portions + 2 toddler portions",
  groups: [
    {
      title: "Bean and tomato base",
      tone: "blue",
      art: "saucepan",
      ingredients: [
        { id: "cannellini", name: "cannellini beans", grams: 240, note: "drained from one 400 g tin" },
        { id: "passata", name: "passata", grams: 250, note: "half a standard 500 g carton" },
        { id: "stock", name: "low-sodium chicken stock", quantity: 200, unit: "ml", note: "divide into 75 ml and 125 ml" },
        { id: "tomatoes", name: "chopped tomatoes", grams: 400, note: "one tin" },
        { id: "butter-beans", name: "butter beans", grams: 480, note: "drained from two 400 g tins" },
      ],
    },
    {
      title: "Chicken and vegetables",
      tone: "yellow",
      ingredients: [
        { id: "chicken", name: "boneless, skinless chicken thighs", grams: 600, note: "cut into bite-size pieces" },
        { id: "peppers", name: "red peppers", grams: 200, note: "about 2 medium, diced" },
        { id: "carrot", name: "carrot", grams: 150, note: "about 1 large, finely diced" },
        { id: "onion", name: "yellow onion", grams: 150, note: "about 1 medium, finely chopped" },
        { id: "garlic", name: "garlic", grams: 12, note: "about 3 cloves, minced" },
        { id: "paprika", name: "sweet smoked paprika", grams: 5, note: "about 1½ tsp" },
        { id: "oil", name: "avocado oil", grams: 15, note: "about 1 tbsp" },
        { id: "seasoning", name: "sea salt and black pepper", quantity: "To taste" },
      ],
    },
  ],
  steps: [
    {
      id: "blend", title: "Blend the sauce",
      instructions: ["Blend the drained cannellini beans with the passata and 75 ml of stock until smooth. Set aside."],
    },
    {
      id: "brown", title: "Brown the chicken",
      timing: "4–5 min",
      instructions: ["Heat the oil in a 3.5–4 litre deep pan over medium-high heat. Brown the chicken for 4–5 minutes, then transfer it to a plate."],
    },
    {
      id: "vegetables", title: "Soften the vegetables",
      timing: "6–8 min · 1 min for garlic and paprika",
      instructions: ["Reduce the heat to medium. Cook the onion, carrot and peppers for 6–8 minutes until softened. Stir in the garlic and paprika and cook for 1 minute."],
    },
    {
      id: "simmer", title: "Simmer the stew", art: "saucepan",
      timing: "20 min covered · 10 min uncovered",
      instructions: [
        "Return the chicken and any juices to the pan. Stir in the blended sauce, the chopped tomatoes and the remaining 125 ml of stock. Cover and simmer over low heat for 20 minutes.",
        "Stir in the drained butter beans and simmer uncovered for another 10 minutes until the stew thickens. Check that the chicken reaches 74°C (165°F) at the centre. Season to taste.",
      ],
      timers: [{ label: "Simmer covered", minutes: 20 }, { label: "Reduce uncovered", minutes: 10 }],
    },
  ],
  notes: [
    "The source estimates about 2.4 kg finished stew. It suggests roughly 450 g per adult portion and 300 g per toddler portion. Lightly mash the butter beans before serving to a toddler.",
    "For a fuller meal, the notes suggest serving an adult portion with 150 g cooked quinoa and 50 g fat-free Greek yoghurt.",
    "Refrigerate the remaining half-carton of passata for the tomato and spinach frittata.",
  ],
  related: [{ id: "tomato-spinach-frittata" }],
  safety: {
    title: "Check the chicken",
    notes: [{ text: "Before serving, use a food thermometer to check the centre of a large piece of chicken has reached 74°C (165°F)." }],
    sources: [{ label: "FoodSafety.gov cooking temperatures", url: "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures" }],
  },
};
