export default {
  id: "creme-au-beurre",
  title: "Crème au beurre",
  category: "Baking basics",
  description: "A simple buttercream for icing cakes or piping onto cupcakes.",
  groups: [{
    title: "Buttercream",
    art: "whisk",
    tone: "pink",
    ingredients: [
      { id: "butter", name: "unsalted butter", grams: 150, note: "softened" },
      { id: "sugar", name: "icing sugar", grams: 340, note: "sifted" },
      { id: "liquid", name: "whole milk", quantity: "3–4", unit: "tbsp", note: "or infused milk, juice or another liquid" },
    ],
  }],
  steps: [
    {
      id: "beat-butter", title: "Beat the butter", art: "whisk", tone: "pink",
      instructions: ["Beat the softened butter until smooth and pale."],
    },
    {
      id: "add-sugar", title: "Add the icing sugar", art: "whisk", tone: "yellow",
      instructions: ["Beat in the sifted icing sugar in batches. Scrape down the sides of the bowl so the buttercream mixes evenly."],
    },
    {
      id: "adjust", title: "Adjust the consistency", art: "whisk", tone: "blue",
      instructions: ["Beat in the liquid a spoonful at a time until the buttercream is smooth and soft enough to spread or pipe."],
    },
  ],
  source: {
    label: "Cupcake Jemma · Buttercream Masterclass",
    url: "https://www.youtube.com/watch?v=O4qazwRvO6E",
  },
};
