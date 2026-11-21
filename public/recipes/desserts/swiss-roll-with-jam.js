export default {
  id: "swiss-roll-with-jam",
  category: "Desserts",
  title: "Swiss Roll with Raspberry–Strawberry Filling",
  description: "A rolled génoise with homemade berry filling and silky Swiss meringue buttercream.",
  servings: 4,
  times: [
    { label: "Sponge bake", value: "10–12 min", icon: "oven" },
    { label: "Chill to set", value: "20–30 min", icon: "snow" },
    { label: "Total", value: "About 1 hr 50 min", icon: "clock" },
  ],
  groups: [
    {
      title: "Génoise sponge", art: "whisk", tone: "yellow",
      ingredients: [
        { id: "eggs", name: "large eggs", quantity: 2, note: "room temperature" },
        { id: "sponge-sugar", name: "granulated sugar", grams: 60 },
        { id: "flour", name: "plain flour", grams: 60, note: "sifted twice" },
        { id: "sponge-butter", name: "salted butter", grams: 20, note: "melted and cooled" },
        { id: "sponge-vanilla", name: "vanilla extract", quantity: "½", unit: "tsp" },
        { id: "icing-sugar", name: "icing sugar", note: "for dusting the tea towel and, optionally, the finished roll" },
      ],
    },
    {
      title: "Berry filling", art: "saucepan", tone: "pink",
      ingredients: [
        { id: "raspberries", name: "raspberries", grams: 75, note: "fresh or frozen" },
        { id: "strawberries", name: "strawberries", grams: 75, note: "fresh or frozen, hulled and chopped" },
        { id: "filling-sugar", name: "granulated sugar", grams: 40 },
        { id: "cornflour", name: "cornflour", quantity: 1, unit: "tsp" },
        { id: "lemon-juice", name: "lemon juice", quantity: 2, unit: "tsp" },
        { id: "water", name: "water", quantity: 2, unit: "tsp", note: "divided between the fruit and the cornflour slurry" },
      ],
    },
    {
      title: "Swiss meringue buttercream", art: "whisk", tone: "blue",
      ingredients: [
        { id: "egg-whites", name: "egg whites", grams: 30, note: "about one large egg white" },
        { id: "buttercream-sugar", name: "granulated sugar", grams: 50 },
        { id: "buttercream-butter", name: "salted butter", grams: 75, note: "softened and cubed" },
        { id: "buttercream-vanilla", name: "vanilla extract", quantity: "¼", unit: "tsp" },
      ],
    },
  ],
  steps: [
    {
      id: "fruit", title: "Cook the berry filling", art: "saucepan", tone: "pink",
      timing: "15 min active",
      instructions: [
        "Combine the berries, sugar and half the water in a small saucepan. Cook over medium heat for 5–7 minutes, until the fruit softens and releases its juices.",
        "Stir the cornflour into the remaining water, then add the slurry to the fruit and stir until thickened. Stir in the lemon juice, transfer to a shallow dish and refrigerate until completely cool.",
      ],
      tip: "If the berries are very ripe, adjust the sugar to taste.",
    },
    {
      id: "sponge", title: "Make and roll the sponge", art: "oven", tone: "yellow",
      timing: "180°C / 350°F · bake 10–12 min",
      instructions: [
        "Heat the oven to 180°C (350°F). Line a 25 × 18 cm tray with baking parchment.",
        "Whisk the eggs and sugar in a heatproof bowl over simmering water until warm to the touch. Take the bowl off the heat and beat on high for 5–6 minutes, until the mixture triples in volume and falls in ribbons.",
        "Fold in the flour in two batches, then gently fold in the melted butter and vanilla. Spread evenly in the tray and bake for 10–12 minutes, until golden and springy.",
        "Turn the hot sponge out onto a clean tea towel dusted with icing sugar. Peel off the parchment, gently roll the sponge with the towel and let it cool completely, about 30 minutes.",
      ],
      timers: [{ label: "Check the sponge", minutes: 10 }],
    },
    {
      id: "buttercream", title: "Whip the buttercream", art: "whisk", tone: "blue",
      timing: "About 20 min",
      instructions: [
        "In a clean heatproof bowl over a pan of simmering water, whisk the egg whites and sugar until the sugar dissolves and a food thermometer reads 72°C (162°F) throughout.",
        "Remove from the heat. Whisk on high for 5–7 minutes, until the meringue forms stiff peaks and the bowl feels cool. Beat in the softened butter a piece at a time, then add the vanilla and whip until smooth.",
      ],
    },
    {
      id: "assemble", title: "Fill and chill the roll", art: "rolling", tone: "pink",
      timing: "15 min assembly · chill 20–30 min",
      instructions: [
        "Unroll the cooled sponge. Spread on a 2–3 mm layer of buttercream, leaving a 1 cm border, then gently spread the chilled berry filling over it.",
        "Roll the sponge up snugly, wrap it and refrigerate it for 20–30 minutes to set.",
      ],
      timers: [{ label: "Chill the Swiss roll", minutes: 20 }],
    },
    {
      id: "finish", title: "Finish and serve", art: "slice", tone: "yellow",
      timing: "Up to 10 min",
      instructions: [
        "If desired, coat the roll with the remaining buttercream or dust it with icing sugar. Slice with a sharp knife, wiping between cuts. Serve straight away or keep chilled until serving.",
      ],
    },
  ],
  source: {
    label: "Swiss meringue buttercream technique from King Arthur Baking",
    url: "https://www.kingarthurbaking.com/recipes/swiss-meringue-buttercream-recipe",
  },
};
