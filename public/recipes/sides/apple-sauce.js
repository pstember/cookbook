export default {
  id: "apple-sauce",
  title: "Cinnamon Apple Sauce",
  category: "Sides",
  cookingTime: "15 min after boiling, plus about 5 min if sweetening",
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
  setup: [
    "Start with 200 ml water. Use 100 ml for a chunky sauce or 300 ml for a smooth purée.",
  ],
  allergens: [],
  storage: {
    counter: "Refrigerate within 2 hours of cooking.",
    fridge: "Cover and use within 48 hours.",
    freezer: "Freeze in small portions. Use within 3 months for best quality. Thaw overnight in the fridge.",
  },
  steps: [
    {
      id: "boil",
      title: "Bring the apples to the boil",
      tone: "yellow",
      activity: "cooking",
      uses: ["apples", "water", "cinnamon"],
      instructions: [
        "Core the apples.",
        "Chop the apples.",
        "Put the chopped apples and cinnamon in a saucepan.",
        "Pour in the water for your chosen texture.",
        "Bring to the boil.",
      ],
      heat: "Bring to the boil",
    },
    {
      id: "cook",
      title: "Simmer the apples",
      tone: "yellow",
      activity: "cooking",
      uses: ["apples", "water", "cinnamon"],
      instructions: [
        "Lower the heat to a simmer.",
        "Simmer for 15 minutes, until the apples are soft.",
      ],
      heat: "Gentle simmer",
      duration: [15, 15],
      timers: [
        { label: "Check the apples", minutes: 15, afterInstruction: 2 },
      ],
    },
    {
      id: "texture",
      title: "Mash or blend",
      tone: "yellow",
      activity: "prep",
      uses: ["apples", "water", "cinnamon"],
      instructions: [
        "Take the pan off the heat.",
        "Lift out the cinnamon stick if you used one.",
      ],
      heat: "Off the heat",
      options: [
        {
          title: "Chunky sauce",
          instructions: [
            "Mash the soft apples, leaving some pieces intact.",
          ],
        },
        {
          title: "Smooth purée",
          instructions: [
            "Blend the cooked apples until smooth.",
          ],
        },
      ],
    },
    {
      id: "season",
      title: "Season to taste",
      tone: "pink",
      activity: "prep",
      uses: ["apples", "water", "cinnamon", "sugar", "lemon"],
      instructions: [
        "Taste the sauce.",
        "Add sugar about 12 g at a time if you want a sweeter sauce.",
        "Stir in the optional lemon juice for a sharper flavour.",
      ],
      heat: "Off the heat",
    },
    {
      id: "dissolve",
      title: "Dissolve any added sugar",
      tone: "pink",
      activity: "cooking",
      uses: ["apples", "water", "cinnamon", "sugar", "lemon"],
      instructions: [
        "Return the sauce to low heat if you added sugar.",
        "Warm for about 5 minutes, until the sugar dissolves.",
      ],
      heat: "Low hob",
      duration: [5, 5],
      timing: "About 5 min if adding sugar",
      optional: true,
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
