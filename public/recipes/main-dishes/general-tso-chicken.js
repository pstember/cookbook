export default {
  id: "general-tso-chicken",
  title: "General Tso’s Chicken",
  category: "Main dishes",
  description: "Pan-fried chicken thighs tossed in a glossy sweet-and-sour sauce with ginger, garlic and chilli.",
  thumbnail: "assets/illustrations/recipes/general-tso-chicken.webp",
  servings: 8,
  times: [
    { label: "Prep", value: "15 min", icon: "clock" },
    { label: "Cook", value: "15 min", icon: "oven" },
  ],
  groups: [
    {
      title: "Chicken",
      tone: "yellow",
      ingredients: [
        { id: "chicken", name: "boneless chicken thighs", grams: 900, weightEstimate: true, quantity: 2, unit: "lb", note: "trimmed" },
        { id: "coating", name: "cornflour", grams: 56, weightEstimate: true, quantity: "½", unit: "cup", note: "cornstarch" },
        { id: "frying-oil", name: "extra-light olive oil", grams: 50, weightEstimate: true, quantity: "¼", unit: "cup", note: "plus more as needed" },
        { id: "ginger", name: "fresh ginger", grams: 12, weightEstimate: true, quantity: 2, unit: "tbsp", note: "finely minced, from about a 5 cm piece" },
        { id: "garlic", name: "garlic cloves", grams: 9, weightEstimate: true, quantity: 3, note: "finely grated or minced, about 1 tbsp" },
        { id: "chilli", name: "chilli flakes", grams: 1, weightEstimate: true, quantity: "½", unit: "tsp", note: "adjust to taste" },
        { id: "sesame", name: "sesame seeds", grams: 3, weightEstimate: true, quantity: 1, unit: "tsp", note: "omit if not using as a garnish" },
      ],
    },
    {
      title: "Sauce",
      tone: "blue",
      art: "saucepan",
      ingredients: [
        { id: "water", name: "cold water", grams: 120, weightEstimate: true, quantity: "½", unit: "cup" },
        { id: "soy", name: "reduced-salt soy sauce", grams: 80, weightEstimate: true, quantity: 5, unit: "tbsp" },
        { id: "vinegar", name: "rice vinegar", grams: 45, weightEstimate: true, quantity: 3, unit: "tbsp", note: "plus more to taste" },
        { id: "hoisin", name: "hoisin sauce", grams: 24, weightEstimate: true, quantity: "1½", unit: "tbsp" },
        { id: "sugar", name: "granulated sugar", grams: 50, weightEstimate: true, quantity: 4, unit: "tbsp" },
        { id: "thickener", name: "cornflour", grams: 11, weightEstimate: true, quantity: "1½", unit: "tbsp", note: "cornstarch" },
      ],
    },
  ],
  steps: [
    {
      id: "prep", title: "Coat the chicken and mix the sauce",
      instructions: [
        "Cut the thighs into roughly 2.5 cm pieces. Coat them lightly in cornflour and shake off any excess.",
        "Whisk the water, soy sauce, vinegar, hoisin, sugar and sauce cornflour in a bowl until smooth.",
      ],
    },
    {
      id: "fry", title: "Fry the chicken in batches",
      instructions: [
        "Heat some of the oil in a large non-stick frying pan. Fry the chicken in two or three batches, turning the pieces to brown them on both sides. Add oil as needed.",
        "Check that the thickest pieces reach 74°C (165°F) at the centre, then transfer each batch to a clean bowl. Keep about 13 g of oil in the pan.",
      ],
    },
    {
      id: "sauce", title: "Finish in the sauce", art: "saucepan",
      timing: "30 sec for the aromatics · 1 min for the sauce",
      instructions: [
        "Fry the garlic, ginger and chilli flakes in the remaining oil for around 30 seconds. Stir the sauce mixture again and pour it into the pan.",
        "Stir as it comes to a simmer, then let it bubble for about a minute. Adjust with soy sauce or rice vinegar to taste. Return the chicken, toss until coated and finish with sesame seeds if using.",
      ],
    },
  ],
  notes: ["Serve straight away to keep the coating crisp. Steamed rice or broccoli works well alongside."],
  safety: {
    title: "Check the chicken",
    notes: [{ text: "Use a food thermometer to check the centre of a large piece from each batch reaches 74°C (165°F)." }],
    sources: [{ label: "FoodSafety.gov cooking temperatures", url: "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures" }],
  },
  source: {
    credit: "Adapted from",
    label: "Natalya Drozhzhin’s General Tso’s Chicken on Natasha’s Kitchen",
    url: "https://natashaskitchen.com/general-tsos-chicken/",
  },
};
