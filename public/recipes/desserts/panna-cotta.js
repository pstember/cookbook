export default {
  id: "panna-cotta",
  title: "Vanilla Panna Cotta",
  category: "Desserts",
  description: "A simple cream-and-milk panna cotta set with leaf gelatine.",
  times: [{ label: "Chill", value: "4 hr", icon: "snow" }],
  groups: [{
    title: "Panna cotta",
    tone: "yellow",
    ingredients: [
      { id: "cream", name: "whipping cream", grams: 130 },
      { id: "milk", name: "milk", grams: 115 },
      { id: "gelatine", name: "of leaf gelatine", quantity: 1, unit: "sheet" },
      { id: "vanilla", name: "vanilla" },
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
