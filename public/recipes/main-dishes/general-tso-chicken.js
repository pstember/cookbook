export default {
  id: "general-tso-chicken",
  title: "General Tso’s Chicken",
  category: "Main dishes",
  description: "Pan-fried chicken thighs tossed in a glossy sweet-and-sour sauce with ginger, garlic and chilli.",
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
        { id: "chicken", name: "boneless chicken thighs", quantity: 2, unit: "lb", note: "about 900 g, trimmed" },
        { id: "coating", name: "cornflour", quantity: "½", unit: "cup", note: "cornstarch" },
        { id: "frying-oil", name: "extra-light olive oil", quantity: "¼", unit: "cup", note: "plus more as needed" },
        { id: "ginger", name: "fresh ginger", quantity: 2, unit: "tbsp", note: "finely minced, from about a 5 cm piece" },
        { id: "garlic", name: "garlic cloves", quantity: 3, note: "finely grated or minced, about 1 tbsp" },
        { id: "chilli", name: "chilli flakes", quantity: "½", unit: "tsp", note: "adjust to taste" },
        { id: "sesame", name: "sesame seeds", quantity: 1, unit: "tsp", note: "optional garnish" },
      ],
    },
    {
      title: "Sauce",
      tone: "blue",
      art: "saucepan",
      ingredients: [
        { id: "water", name: "cold water", quantity: "½", unit: "cup" },
        { id: "soy", name: "reduced-salt soy sauce", quantity: 5, unit: "tbsp" },
        { id: "vinegar", name: "rice vinegar", quantity: 3, unit: "tbsp", note: "plus more to taste" },
        { id: "hoisin", name: "hoisin sauce", quantity: "1½", unit: "tbsp" },
        { id: "sugar", name: "granulated sugar", quantity: 4, unit: "tbsp" },
        { id: "thickener", name: "cornflour", quantity: "1½", unit: "tbsp", note: "cornstarch" },
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
        "Check that the thickest pieces reach 74°C (165°F) at the centre, then transfer each batch to a clean bowl. Keep about a tablespoon of oil in the pan.",
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
