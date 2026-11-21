export default {
  id: "riz-au-lait",
  title: "Riz au Lait",
  category: "Desserts",
  description: "French vanilla rice pudding finished with butter and a folded-in whipped egg white.",
  times: [{ label: "Simmer the rice", value: "22 min", icon: "clock" }],
  groups: [
    {
      title: "Rice pudding",
      art: "saucepan",
      tone: "yellow",
      ingredients: [
        { id: "milk", name: "milk", quantity: 1, unit: "litre" },
        { id: "rice", name: "short-grain rice", grams: 250, note: "risotto rice works" },
        { id: "sugar", name: "sugar", grams: 60, note: "plus 4 tbsp" },
        { id: "egg", name: "egg", quantity: 1, note: "separated" },
        { id: "vanilla", name: "vanilla pod", quantity: 1, note: "or 1 tbsp vanilla extract" },
        { id: "salt", name: "salt", quantity: "A pinch" },
        { id: "butter", name: "butter", grams: 15 },
      ],
    },
  ],
  steps: [
    {
      id: "simmer", title: "Cook the rice in vanilla milk", art: "saucepan",
      timing: "22 min",
      instructions: [
        "Warm the milk with the vanilla and salt in a saucepan. Add the rice and simmer gently for about 22 minutes, stirring occasionally, until tender.",
        "If you used a vanilla pod, remove it once the rice is cooked.",
      ],
      timers: [{ label: "Simmer the rice", minutes: 22 }],
    },
    {
      id: "yolk", title: "Stir in the yolk and butter", art: "whisk",
      instructions: [
        "Whisk the yolk and sugar together, loosening the mixture gradually with spoonfuls of hot milk from the pan. Stir the warmed yolk mixture back into the cooked rice, then add the butter.",
      ],
    },
    {
      id: "finish", title: "Fold in the whipped white",
      instructions: [
        "Whisk the white in a clean bowl until it holds peaks. Fold it gently into the pudding, then stir over low heat until the mixture reaches 72°C (162°F) throughout. Keep the heat gentle so the egg stays smooth.",
      ],
    },
  ],
  safety: {
    title: "Cooking and storing rice pudding",
    notes: [
      { text: "After folding in the whipped white, check that the pudding reaches 72°C (162°F) throughout with a food thermometer." },
      { text: "If you have leftovers, cool them promptly, ideally within an hour. Refrigerate and use within one day." },
    ],
    sources: [
      { label: "FoodSafety.gov cooking temperatures", url: "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures" },
      { label: "Food Standards Agency rice storage guidance", url: "https://www.food.gov.uk/print/pdf/node/7611" },
    ],
  },
};
