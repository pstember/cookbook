export default {
  id: "tarte-aux-pommes",
  title: "Tarte aux pommes",
  category: "Desserts",
  description: "A shortcrust tart with cinnamon apple compote and a layer of thinly sliced Golden apples.",
  thumbnail: "assets/illustrations/recipes/tarte-aux-pommes.webp",
  times: [
    { label: "Blind bake", value: "15 min", icon: "oven" },
    { label: "Final bake", value: "About 30 min", icon: "oven" },
  ],
  groups: [
    {
      title: "Shortcrust pastry",
      art: "rolling",
      tone: "yellow",
      ingredients: [
        { id: "flour", name: "flour", grams: 200 },
        { id: "butter", name: "softened butter", grams: 100 },
        { id: "pastry-yolk", name: "egg yolk", grams: 17, quantity: 1, weightEstimate: true },
        { id: "pastry-water", name: "water", grams: 40, quantity: 4, unit: "cl", weightEstimate: true, note: "adjust as needed" },
        { id: "salt", name: "salt", grams: 0.8, quantity: 2, unit: "pinches", weightEstimate: true },
      ],
    },
    {
      title: "Apple compote",
      art: "saucepan",
      tone: "blue",
      ingredients: [
        { id: "compote-apples", name: "Bramley cooking apples", grams: 900, quantity: 4, weightEstimate: true, note: "weigh after coring, then chop. Use the same weight of eating apples if substituting (about 6)" },
        { id: "compote-water", name: "water", grams: 200, quantity: 200, unit: "ml", weightEstimate: true, note: "use 100 g (100 ml) for a chunky sauce or 300 g (300 ml) for a smooth purée" },
        { id: "cinnamon", name: "cinnamon stick", grams: 3, quantity: 3, unit: "inches", weightEstimate: true, note: "or about 1.3 g (½ tsp) ground cinnamon" },
        { id: "lemon-juice", name: "lemon juice", grams: 14, quantity: 1, unit: "tbsp", weightEstimate: true, note: "add another 14 g (1 tbsp) if you like" },
        { id: "sugar", name: "granulated sugar", grams: 150, note: "optional, adjust to taste" },
      ],
    },
    {
      title: "Topping",
      art: "pie",
      tone: "pink",
      ingredients: [
        { id: "golden-apples", name: "Golden apples", grams: 360, quantity: 2, weightEstimate: true, note: "weighed after coring" },
        { id: "glaze-yolk", name: "egg yolk", grams: 17, quantity: 1, weightEstimate: true },
        { id: "glaze-water", name: "water", grams: 15, quantity: 1, unit: "tbsp", weightEstimate: true },
      ],
    },
  ],
  steps: [
    {
      id: "make-pastry", title: "Make the pastry", art: "rolling", tone: "yellow",
      instructions: [
        "Rub the butter into the flour and salt until sandy. Mix in the yolk and add water gradually until the dough holds together. Refrigerate the wrapped dough before rolling it to line a tart tin.",
      ],
    },
    {
      id: "blind-bake", title: "Blind-bake the shell", art: "oven", tone: "blue",
      timing: "180 °C · 15 min",
      instructions: ["Preheat the oven to 180 °C. Line the pastry with baking paper and fill with baking beans. Bake for 15 minutes, then lift out the paper and beans."],
      timers: [{ label: "Blind-bake the tart shell", minutes: 15 }],
    },
    {
      id: "compote", title: "Cook the compote", art: "saucepan", tone: "pink",
      instructions: ["Cook the chopped apples with the water, cinnamon and lemon juice until the apples are tender. Remove the cinnamon stick if using one. Mash or blend to the texture you prefer, sweeten to taste and leave to cool."],
    },
    {
      id: "assemble", title: "Fill and glaze the tart", art: "pie", tone: "yellow",
      instructions: [
        "Spread the compote in the pastry shell. Thinly slice the Golden apples and arrange the slices over the compote.",
        "Mix the remaining yolk with 15 g (1 tbsp) of water and brush it over the apple slices.",
      ],
    },
    {
      id: "bake", title: "Finish baking", art: "oven", tone: "blue",
      timing: "180 °C · about 30 min",
      instructions: ["Bake at 180 °C until the pastry is golden and the apple slices are tender, about 30 minutes. Let the tart cool before lifting it from the tin."],
    },
  ],
  notes: ["The final bake follows Meilleur du Chef’s apple and compote tart. The original notes give the blind-bake time and finish at the glazing step."],
  related: [
    { id: "pate-brisee", label: "Pâte brisée" },
    { id: "apple-sauce", label: "Apple sauce" },
  ],
  source: {
    label: "Meilleur du Chef · Final baking time",
    url: "https://www.meilleurduchef.com/fr/recette/tarte-pommes-cap.html",
  },
};
