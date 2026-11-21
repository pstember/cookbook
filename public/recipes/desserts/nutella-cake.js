export default {
  id: "nutella-cake",
  category: "Desserts",
  title: "Nutella Cake",
  description: "A small three-layer génoise with whipped hazelnut chocolate ganache and mascarpone frosting.",
  thumbnail: "assets/illustrations/recipes/nutella-cake.webp",
  times: [
    { label: "Tin diameter", value: "10 cm", icon: "oven" },
    { label: "Bake", value: "15–18 min", icon: "clock" },
    { label: "Chill filling", value: "At least 30 min", icon: "snow" },
  ],
  related: [{ id: "genoise" }],
  groups: [
    {
      title: "Génoise sponge", art: "whisk", tone: "yellow",
      ingredients: [
        { id: "egg", name: "large egg", quantity: 1, grams: 50, weightEstimate: true, note: "room temperature, weighed without the shell" },
        { id: "caster-sugar", name: "caster sugar", grams: 30 },
        { id: "flour", name: "plain flour", grams: 30, note: "sifted" },
        { id: "butter", name: "unsalted butter", grams: 10, note: "melted and cooled" },
        { id: "vanilla", name: "vanilla extract", quantity: "¼", unit: "tsp", grams: 1.1, weightEstimate: true },
      ],
    },
    {
      title: "Simple syrup", art: "saucepan", tone: "blue",
      ingredients: [
        { id: "white-sugar", name: "white sugar", quantity: 1, unit: "tbsp", grams: 12.4, weightEstimate: true },
        { id: "water", name: "hot water", quantity: 1, unit: "tbsp", grams: 15, weightEstimate: true },
      ],
    },
    {
      title: "Whipped ganache", art: "whisk", tone: "pink",
      ingredients: [
        { id: "ganache-nutella", name: "Nutella", grams: 40 },
        { id: "cream", name: "double cream", quantity: 40, unit: "ml", grams: 40, weightEstimate: true },
      ],
    },
    {
      title: "Frosting and garnish", art: "pie", tone: "yellow",
      ingredients: [
        { id: "mascarpone", name: "mascarpone or full-fat cream cheese", grams: 60, note: "cold" },
        { id: "frosting-nutella", name: "Nutella", grams: 40 },
        { id: "garnish", name: "sea salt or crushed hazelnuts", gramRange: [0.4, 5], weightEstimate: true, note: "optional garnish, about 0.4 g sea salt or 5 g crushed hazelnuts" },
      ],
    },
  ],
  steps: [
    {
      id: "ganache", title: "Make the ganache first", art: "saucepan", tone: "pink",
      timing: "Chill at least 30 min",
      instructions: [
        "Warm the cream until it just starts simmering. Pour it over the Nutella and stir until smooth and glossy.",
        "Refrigerate the ganache for at least 30 minutes before whipping it.",
      ],
      timers: [{ label: "Chill the ganache", minutes: 30 }],
    },
    {
      id: "sponge", title: "Mix and bake the génoise", art: "oven", tone: "yellow",
      timing: "170°C / 340°F · bake 15–18 min",
      instructions: [
        "Preheat the oven to 170°C (340°F). Grease a 10 cm tin and line it with baking parchment.",
        "Whisk the egg and caster sugar in a bowl over simmering water for about 2 minutes, until lukewarm. Take the bowl off the heat and beat for 5–7 minutes, until pale, thick and about three times its original volume. The batter should leave a ribbon when you lift the whisk.",
        "Fold in the flour in two batches, then fold in the melted butter and vanilla. Pour into the prepared tin and bake for 15–18 minutes. Let the sponge cool completely.",
      ],
      timers: [{ label: "Check the sponge", minutes: 15 }],
    },
    {
      id: "syrup-and-frosting", title: "Make the syrup and whip the fillings", art: "whisk", tone: "blue",
      instructions: [
        "Stir the white sugar into the hot water until dissolved. Let the syrup cool.",
        "Whisk the chilled ganache vigorously for about 30 seconds, until it lightens and becomes fluffy. In a separate bowl, whisk the cold mascarpone and Nutella for about 1 minute, until thick enough to spread.",
      ],
    },
    {
      id: "layer", title: "Layer and frost the cake", art: "slice", tone: "pink",
      instructions: [
        "Slice the cooled sponge horizontally into three even layers. Brush each with syrup and spread the whipped ganache between the layers.",
        "Spread the mascarpone frosting over the top and sides. Finish with a little sea salt or crushed hazelnuts, if using.",
      ],
    },
  ],
  notes: ["Keep the finished cake refrigerated. Let it stand for 15 minutes before serving so the filling softens."],
};
