export default {
  id: "apple-sauce",
  title: "Cinnamon Apple Sauce",
  category: "Sides",
  description: "A simple apple sauce you can mash for texture or blend to a smooth purée.",
  thumbnail: "assets/illustrations/recipes/apple-sauce.webp",
  times: [{ label: "Simmer", value: "15–20 min", icon: "clock" }],
  groups: [
    {
      title: "Apple sauce",
      tone: "yellow",
      art: "saucepan",
      ingredients: [
        { id: "apples", name: "Bramley apples", gramVariants: [800, 1100], weightEstimate: true, quantity: 4, note: "4 Bramley apples (about 800 g) or 6 medium eating apples (about 1,100 g), weighed before coring and chopping" },
        { id: "water", name: "water", grams: 200, weightEstimate: true, quantity: 200, unit: "ml", note: "100 g for chunky sauce or 300 g for smooth purée" },
        { id: "cinnamon", name: "cinnamon stick", gramVariants: [3, 1.3], weightEstimate: true, quantity: 1, note: "one stick about 7.5 cm long (about 3 g), or ½ tsp ground cinnamon (about 1.3 g)" },
      ],
    },
    {
      title: "Optional to finish",
      tone: "pink",
      ingredients: [
        { id: "sugar", name: "granulated sugar", gramRange: [0, 150], quantity: "Up to 150", unit: "g", note: "add to taste" },
        { id: "lemon", name: "lemon juice", gramRange: [0, 15], weightEstimate: true, quantity: 1, unit: "tbsp" },
      ],
    },
  ],
  steps: [
    {
      id: "cook", title: "Simmer the apples", art: "saucepan",
      timing: "15 min",
      instructions: ["Put the chopped apples, water and cinnamon in a saucepan. Bring to a boil, then lower the heat and simmer for 15 minutes until the apples are soft."],
      timers: [{ label: "Simmer the apples", minutes: 15 }],
    },
    {
      id: "texture", title: "Mash or blend",
      instructions: ["Take the pan off the heat and lift out the cinnamon stick if using. Mash for a chunky sauce, or blend for a smooth purée."],
    },
    {
      id: "season", title: "Sweeten to taste",
      timing: "5 min if adding sugar",
      instructions: [
        "Taste and, if needed, add sugar about 12 g at a time. Stir in the optional lemon juice for brightness. If you added sugar, return the pan to low heat for about 5 minutes to dissolve it.",
      ],
    },
  ],
  notes: [
    "Serve alongside roast pork, spoon over ice cream or use in baking.",
    "Cool promptly, cover and refrigerate. Use within 48 hours or freeze in ice cube trays. Transfer the cubes to a freezer bag and use within three months for best quality. Thaw individual portions overnight in the fridge.",
  ],
  safety: {
    title: "Storing apple sauce",
    notes: [{ text: "Refrigerate within two hours of cooking. Use refrigerated leftovers within 48 hours, or freeze them in small portions." }],
    sources: [{ label: "Food Standards Agency leftovers guidance", url: "https://www.food.gov.uk/safety-hygiene/cooking-your-food" }],
  },
};
