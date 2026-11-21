export default {
  id: "panna-cotta",
  title: "Vanilla Panna Cotta",
  category: "Desserts",
  description: "A simple cream-and-milk panna cotta set with leaf gelatine.",
  thumbnail: "assets/illustrations/recipes/panna-cotta.webp",
  times: [{ label: "Chill", value: "4 hr", icon: "snow" }],
  groups: [{
    title: "Panna cotta",
    tone: "yellow",
    ingredients: [
      { id: "cream", name: "whipping cream", grams: 130 },
      { id: "milk", name: "milk", grams: 115 },
      { id: "gelatine", name: "leaf gelatine", grams: 2, quantity: 1, unit: "sheet", weightEstimate: true, note: "about 2 g for a gold-grade sheet. Check the packet for your grade" },
      { id: "vanilla", name: "vanilla extract", grams: 2, weightEstimate: true, note: "suggested starting amount. The original recipe does not specify a quantity" },
    ],
  }],
  steps: [
    {
      id: "heat", title: "Warm the cream",
      instructions: ["Soak the gelatine in cold water as directed on the packet. Meanwhile, bring the cream, milk and vanilla just to a boil in a small pan."],
    },
    {
      id: "dissolve", title: "Add the gelatine",
      instructions: ["Take the pan off the heat. Squeeze the excess water from the gelatine and stir it into the hot cream until completely dissolved."],
    },
    {
      id: "set", title: "Set in ramekins", timing: "4 hr",
      instructions: ["Pour into ramekins, leave to cool and refrigerate for about 4 hours until set."],
      timers: [{ label: "Chill the panna cotta", minutes: 240 }],
    },
  ],
  notes: ["Leaf gelatine strength varies by brand. Check the packet for the recommended amount for 245 g of liquid."],
};
