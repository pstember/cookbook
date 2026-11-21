export default {
  id: "creme-brulee",
  title: "Crème Brûlée",
  category: "Desserts",
  description: "A small batch of cream custard baked gently with steam.",
  thumbnail: "assets/illustrations/recipes/creme-brulee.webp",
  times: [{ label: "Cook", value: "1 hr 45 min", icon: "oven" }, { label: "Chill", value: "A few hours", icon: "snow" }],
  groups: [{
    title: "Custard and topping",
    tone: "yellow",
    ingredients: [
      { id: "cream", name: "whipping cream", grams: 100 },
      { id: "milk", name: "milk", grams: 20 },
      { id: "yolk", name: "egg yolk", grams: 17, quantity: 1, weightEstimate: true },
      { id: "white", name: "egg white", gramRange: [5, 7] },
      { id: "sugar", name: "sugar", grams: 12 },
      { id: "vanilla", name: "vanilla extract", grams: 1, weightEstimate: true, note: "suggested starting amount. The original recipe does not specify a quantity" },
      { id: "topping-sugar", name: "sugar", grams: 5, weightEstimate: true, note: "optional topping. The original recipe does not specify a quantity" },
    ],
  }],
  steps: [
    {
      id: "mix", title: "Mix the custard",
      instructions: ["Mix the milk, cream and vanilla, then stir in the sugar. Gently whisk in the yolk and measured egg white. Pour into small ovenproof ramekins."],
    },
    {
      id: "bake", title: "Cook gently with steam", timing: "100°C · about 1 hr 45 min",
      instructions: ["Bake in a steam oven set to 100°C and 100% humidity. Check that the edges are set and the centre still trembles slightly."],
      tip: "For a conventional oven, the notes suggest a shallow ovenproof tray of water on a lower shelf. Check the custard as the cooking time may differ.",
      timers: [{ label: "Check the custard", minutes: 105 }],
    },
    {
      id: "chill", title: "Chill the custard",
      instructions: ["Cool the ramekins, then refrigerate for a few hours so the custard sets fully."],
      tip: "For a classic crisp top, sprinkle a thin layer of the topping sugar just before serving and caramelise it with a kitchen torch.",
    },
  ],
};
