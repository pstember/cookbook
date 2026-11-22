export default {
  id: "waffles",
  title: "Vanilla Waffles",
  category: "Breakfast & brunch",
  description: "Golden waffles made with vanilla sugar and rested batter.",
  thumbnail: "assets/illustrations/recipes/waffles.webp",
  times: [{ label: "Rest", value: "1 hr", icon: "snow", highlight: "rest" }, { label: "Cook", value: "3–5 min each", icon: "oven", highlight: "cook" }],
  groups: [{
    title: "Waffle batter",
    tone: "yellow",
    ingredients: [
      { id: "flour", name: "plain wheat flour", grams: 500, note: "French T45–T55 if available" },
      { id: "baking-powder", name: "baking powder", grams: 10 },
      { id: "vanilla-sugar", name: "vanilla sugar", grams: 60 },
      { id: "salt", name: "salt", grams: 2 },
      { id: "eggs", name: "eggs", grams: 300, quantity: 6, weightEstimate: true, note: "weighed without shells" },
      { id: "milk", name: "whole milk", grams: 516, quantity: 500, unit: "ml", weightEstimate: true },
      { id: "butter", name: "melted butter", grams: 180, note: "lukewarm" },
    ],
  }],
  setup: [
    "Use a waffle iron. Check its instructions for the amount of batter per waffle.",
  ],
  allergens: ["Wheat (gluten)", "Eggs", "Milk"],
  steps: [
    {
      id: "dry",
      title: "Mix the dry ingredients",
      tone: "yellow",
      activity: "prep",
      uses: ["flour", "baking-powder", "vanilla-sugar", "salt"],
      instructions: [
        "Whisk together the flour, baking powder, vanilla sugar and salt.",
      ],
    },
    {
      id: "batter",
      title: "Whisk the batter",
      tone: "yellow",
      activity: "prep",
      uses: ["flour", "baking-powder", "vanilla-sugar", "salt", "eggs", "milk", "butter"],
      instructions: [],
      options: [
        {
          title: "Whole eggs",
          instructions: [
            "Lightly beat the eggs.",
            "Whisk the eggs into the dry ingredients.",
            "Gradually whisk in the milk until the batter is smooth.",
            "Stir in the lukewarm melted butter.",
          ],
        },
        {
          title: "Whipped whites for lighter waffles",
          instructions: [
            "Separate the eggs.",
            "Whisk the yolks into the dry ingredients.",
            "Gradually whisk in the milk until the batter is smooth.",
            "Stir in the lukewarm melted butter.",
            "Whip the reserved whites to stiff peaks.",
            "Fold the whites gently into the batter.",
          ],
        },
      ],
    },
    {
      id: "rest",
      title: "Rest the batter",
      tone: "yellow",
      activity: "chill",
      uses: ["flour", "baking-powder", "vanilla-sugar", "salt", "eggs", "milk", "butter"],
      instructions: [
        "Cover the bowl.",
        "Refrigerate for 1 hour, until the batter is slightly thicker.",
      ],
      duration: [60, 60],
      wait: "1 hr in the fridge",
      timers: [
        { label: "Check the rested batter", minutes: 60, afterInstruction: 2 },
      ],
    },
    {
      id: "cook",
      title: "Cook the waffles in batches",
      tone: "yellow",
      activity: "cooking",
      uses: ["flour", "baking-powder", "vanilla-sugar", "salt", "eggs", "milk", "butter"],
      instructions: [
        "Heat the waffle iron to medium-high.",
        "Fill the iron with the amount of batter recommended for your model.",
        "Cook for 3–5 minutes, until golden.",
        "Lift out the cooked waffle.",
        "Repeat with the remaining batter.",
      ],
      duration: [3, 5],
      durationPerBatch: true,
      timing: "3–5 min per waffle",
      heat: "Medium-high waffle iron",
      timers: [
        { label: "Check the waffle", minutes: 3, afterInstruction: 3 },
      ],
    },
  ],
  notes: [
    "For a less sweet batch, reduce the vanilla sugar to 30 g. For savoury waffles, omit it and add cheese, herbs or spices.",
    "Try adding vanilla extract, cinnamon or citrus zest. The original notes also suggest replacing half the butter with neutral oil or light cream for a different texture.",
  ],
};
