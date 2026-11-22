export default {
  id: "strawberry-raspberry-muffins",
  category: "Desserts",
  title: "Strawberry & Raspberry Bakery Muffins",
  description: "Large buttery muffins with fresh berries, homemade berry filling and a crisp sugar top.",
  thumbnail: "assets/illustrations/recipes/strawberry-raspberry-muffins.webp",
  yield: "6 large muffins",
  times: [
    { label: "Cook filling", value: "10–12 min", icon: "clock" },
    { label: "Bake", value: "19–21 min", icon: "oven" },
  ],
  groups: [
    {
      title: "Strawberry–raspberry filling", art: "saucepan", tone: "pink",
      ingredients: [
        { id: "filling-strawberries", name: "strawberries", grams: 120, note: "hulled and diced into 5–8 mm pieces" },
        { id: "filling-raspberries", name: "raspberries", grams: 80, note: "left whole" },
        { id: "filling-sugar", name: "caster sugar", grams: 35 },
        { id: "lemon-juice", name: "lemon juice", grams: 10 },
        { id: "glucose", name: "glucose syrup", grams: 15 },
        { id: "cornflour", name: "cornflour", quantity: "½–1", unit: "tsp", gramRange: [1.2, 2.3], weightEstimate: true, note: "optional, if the filling needs thickening" },
        { id: "slurry-water", name: "cold water", grams: 5, weightEstimate: true, note: "suggested amount for mixing with the optional cornflour" },
      ],
    },
    {
      title: "Muffin batter", art: "whisk", tone: "yellow",
      ingredients: [
        { id: "flour", name: "plain flour", grams: 180 },
        { id: "baking-powder", name: "baking powder", grams: 8 },
        { id: "batter-sugar", name: "caster sugar", grams: 90 },
        { id: "egg", name: "large egg", quantity: 1, grams: 50, weightEstimate: true, note: "weighed without the shell" },
        { id: "butter", name: "salted butter", grams: 70, note: "melted" },
        { id: "milk", name: "milk", grams: 70 },
        { id: "yoghurt", name: "Greek yoghurt", grams: 60 },
        { id: "vanilla", name: "vanilla extract", quantity: 1, unit: "tsp", grams: 4.2, weightEstimate: true, note: "optional" },
        { id: "batter-strawberries", name: "strawberries", grams: 100, note: "diced into about 5 mm pieces" },
        { id: "batter-raspberries", name: "raspberries", grams: 60 },
      ],
    },
    {
      title: "Fruit and sugar topping", art: "pie", tone: "blue",
      ingredients: [
        { id: "extra-berries", name: "extra pieces of strawberry and raspberry", quantity: "A few", gramRange: [20, 50], weightEstimate: true, note: "estimated allowance for the tops and, optionally, the centres" },
        { id: "topping-sugar", name: "caster or coarse sugar", quantity: "1–2", unit: "tsp", gramRange: [4.1, 8.3], weightEstimate: true },
      ],
    },
  ],
  steps: [
    {
      id: "filling", title: "Cook the berry filling", art: "saucepan", tone: "pink",
      timing: "10–12 min, plus cooling",
      instructions: [
        "Put the diced strawberries, whole raspberries, caster sugar, lemon juice and glucose syrup into a small saucepan. Cook over medium heat for 10–12 minutes, stirring regularly and lightly crushing some of the strawberries. The filling should be thick and glossy with a few pieces of fruit still visible.",
        "If the filling is still runny, mix about 1.2–2.3 g cornflour with about 5 g cold water, stir it in and cook for another minute. Cool the filling completely. Refrigerate it while you prepare the batter if it has already cooled.",
      ],
      timers: [{ label: "Check the filling", minutes: 10, afterInstruction: 1 }],
    },
    {
      id: "batter", title: "Mix the batter", art: "whisk", tone: "yellow",
      timing: "Heat the oven to 210°C / 190°C fan",
      instructions: [
        "Heat the oven to 210°C conventional (190°C fan). Line a six-hole tin with large muffin cases.",
        "Mix the flour, baking powder and caster sugar. In another bowl, whisk the egg with the melted salted butter, milk, Greek yoghurt and optional vanilla.",
        "Pour the wet mixture into the dry ingredients and fold gently until almost combined. Fold in the diced strawberries and raspberries.",
      ],
      tip: "Stop mixing while the batter is still slightly uneven. This keeps the crumb tender and limits how much the berries bleed into it.",
    },
    {
      id: "fill", title: "Layer the batter and fruit", art: "pie", tone: "pink",
      instructions: [
        "Spoon about 40–45 g batter into each case. Add about 20 g chilled filling to the centre. If you like, add a few tiny strawberry pieces and a raspberry on top of the filling.",
        "Cover with another 35–40 g batter, so the filling is completely enclosed. Use the weights as a guide and aim for cases around 90% full.",
      ],
    },
    {
      id: "topping", title: "Add the topping", art: "pie", tone: "yellow",
      instructions: [
        "Place a couple of small berry pieces on each muffin and sprinkle each top with about 1 g sugar.",
      ],
    },
    {
      id: "bake", title: "Bake at two temperatures", art: "oven", tone: "blue",
      timing: "5 min hot · 14–16 min lower",
      instructions: [
        "Put the muffins in the oven at 210°C conventional (190°C fan) and start the 5-minute timer.",
        "After 5 minutes, lower the heat to 180°C conventional (160°C fan) without opening the oven. Start the second timer as soon as you lower the heat. Bake at the lower setting for 14–16 minutes.",
        "The muffins are ready when the tops are golden and spring back lightly. A skewer inserted through the cake beside the berry centre should come out free of wet batter.",
      ],
      timers: [
        { label: "Lower oven temperature", minutes: 5, afterInstruction: 1 },
        { label: "Check the muffins", minutes: 14, afterInstruction: 2 },
      ],
    },
  ],
  notes: [
    "Salted butter seasons the batter, and cornflour can thicken the filling if needed.",
    "The original quantities specify six large muffins. The amount of batter or filling left over depends on the size of the cases.",
    "Cool completely before storing airtight at room temperature. Best within 2–3 days. To soften a muffin just before eating, microwave it for about 10–15 seconds.",
  ],
};
