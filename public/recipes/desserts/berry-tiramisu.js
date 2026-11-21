export default {
  id: "berry-tiramisu",
  title: "Berry Tiramisu",
  category: "Desserts",
  description: "Layers of berry-soaked boudoir biscuits, fresh fruit and whipped mascarpone cream.",
  thumbnail: "assets/illustrations/recipes/berry-tiramisu.webp",
  times: [{ label: "Chill", value: "2–4 hr", icon: "snow" }],
  groups: [
    {
      title: "Berries and syrup", tone: "pink",
      ingredients: [
        { id: "water", name: "water", grams: 170, quantity: 170, unit: "ml", weightEstimate: true },
        { id: "syrup-sugar", name: "granulated sugar", grams: 170 },
        { id: "strawberries", name: "fresh strawberries", grams: 284, note: "quartered" },
        { id: "raspberries", name: "fresh raspberries", grams: 142 },
        { id: "blueberries", name: "fresh blueberries", grams: 142 },
        { id: "cassis", name: "crème de cassis", grams: 33, quantity: 2, unit: "tbsp", weightEstimate: true, note: "optional. The weight varies by brand" },
      ],
    },
    {
      title: "Mascarpone cream", tone: "blue",
      ingredients: [
        { id: "cream", name: "whipping cream", grams: 284, quantity: 282, unit: "ml", weightEstimate: true },
        { id: "cream-sugar", name: "granulated sugar", grams: 71 },
        { id: "vanilla", name: "vanilla extract", grams: 4.2, quantity: 1, unit: "tsp", weightEstimate: true },
        { id: "mascarpone", name: "mascarpone", grams: 225, note: "room temperature" },
      ],
    },
    {
      title: "Assembly", tone: "yellow",
      ingredients: [
        { id: "biscuits", name: "boudoir biscuits", gramRange: [200, 240], quantity: 1, unit: "pack", weightEstimate: true, note: "savoiardi or ladyfingers. Pack sizes vary. Allow about 28 biscuits" },
        { id: "icing-sugar", name: "icing sugar", grams: 5, weightEstimate: true, note: "suggested amount for dusting. The original recipe does not specify a quantity" },
        { id: "almonds", name: "toasted slivered almonds", grams: 15, weightEstimate: true, note: "suggested garnish amount. The original recipe does not specify a quantity" },
        { id: "extra-berries", name: "extra berries", grams: 50, weightEstimate: true, note: "suggested garnish amount. The original recipe does not specify a quantity" },
      ],
    },
  ],
  steps: [
    {
      id: "syrup", title: "Infuse the berries", timing: "10 min",
      instructions: ["Heat the water and syrup sugar in a saucepan until the sugar dissolves. Take it off the heat, add the berries and let them steep for 10 minutes. Strain and keep both the fruit and syrup. Stir the optional cassis into the syrup."],
      timers: [{ label: "Infuse the berries", minutes: 10 }],
    },
    {
      id: "whip", title: "Whip the cream",
      instructions: ["Whip the cream, sugar and vanilla to soft peaks. Add the mascarpone and continue whipping just until the mixture holds stiff peaks."],
    },
    {
      id: "layer", title: "Layer the tiramisu",
      instructions: ["Dip the biscuits briefly in the syrup and line a 20 cm square dish with a single layer. Spread half the berries over them, then half the cream. Repeat with a second layer of syrup-dipped biscuits, the remaining berries and the remaining cream."],
      tip: "Dip the biscuits one by one so they hold together. The source uses about 14 per layer.",
    },
    {
      id: "chill", title: "Chill and finish", timing: "2–4 hr",
      instructions: ["Cover the dish and refrigerate for 2–4 hours. Before serving, dust with icing sugar and top with toasted almonds and extra berries."],
      timers: [{ label: "Chill the tiramisu", minutes: 120 }],
    },
  ],
  notes: ["Cover and refrigerate leftovers for up to one day."],
  source: { label: "Gemma Stafford’s Bigger Bolder Baking", url: "https://www.biggerbolderbaking.com/berry-tiramisu-recipe/", credit: "Recipe adapted from" },
};
