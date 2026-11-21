export default {
  id: "waffles",
  title: "Vanilla Waffles",
  category: "Breakfast & brunch",
  description: "Golden waffles made with vanilla sugar and rested batter.",
  times: [{ label: "Rest", value: "1 hr", icon: "snow" }, { label: "Cook", value: "3–5 min each", icon: "oven" }],
  groups: [{
    title: "Waffle batter",
    tone: "yellow",
    ingredients: [
      { id: "flour", name: "plain wheat flour", grams: 500, note: "French T45–T55 if available" },
      { id: "baking-powder", name: "baking powder", grams: 10 },
      { id: "vanilla-sugar", name: "vanilla sugar", grams: 60 },
      { id: "salt", name: "salt", grams: 2 },
      { id: "eggs", name: "eggs", quantity: 6, note: "about 300 g without shells" },
      { id: "milk", name: "whole milk", quantity: 500, unit: "ml" },
      { id: "butter", name: "melted butter", grams: 180, note: "lukewarm" },
    ],
  }],
  steps: [
    {
      id: "dry", title: "Mix the dry ingredients",
      instructions: ["Whisk together the flour, baking powder, vanilla sugar and salt."],
    },
    {
      id: "batter", title: "Whisk the batter",
      instructions: ["Beat the eggs lightly, whisk them into the dry ingredients and gradually add the milk. Whisk out any lumps, then stir in the lukewarm melted butter."],
      tip: "For fluffier waffles, separate the eggs at the start. Use the yolks in the batter, then whip the reserved whites to stiff peaks and fold them in after the butter.",
    },
    {
      id: "rest", title: "Rest the batter", timing: "1 hr in the fridge",
      instructions: ["Cover the batter and refrigerate it for an hour, until slightly thickened."],
      timers: [{ label: "Rest the batter", minutes: 60 }],
    },
    {
      id: "cook", title: "Cook the waffles", timing: "3–5 min per waffle",
      instructions: ["Heat a waffle iron to medium-high. Cook the waffles in batches until golden, about 3–5 minutes each, following the waffle iron’s instructions for how much batter to use."],
    },
  ],
  notes: [
    "For a less sweet batch, reduce the vanilla sugar to 30 g. For savoury waffles, omit it and add cheese, herbs or spices.",
    "Try adding vanilla extract, cinnamon or citrus zest. The original notes also suggest replacing half the butter with neutral oil or light cream for a different texture.",
  ],
};
