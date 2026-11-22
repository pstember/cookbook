export default {
  id: "creme-au-beurre",
  title: "Crème au beurre",
  category: "Baking basics",
  description: "A simple buttercream for icing cakes or piping onto cupcakes.",
  thumbnail: "assets/illustrations/recipes/creme-au-beurre.webp",
  groups: [{
    title: "Buttercream",
    art: "whisk",
    tone: "pink",
    ingredients: [
      { id: "butter", name: "unsalted butter", grams: 150, note: "softened" },
      { id: "sugar", name: "icing sugar", grams: 340, note: "sifted" },
      { id: "liquid", name: "whole milk", gramRange: [45, 60], quantity: "3–4", unit: "tbsp", weightEstimate: true, note: "or infused milk, juice or another liquid" },
    ],
  }],
  yield: "Ices 12 cupcakes or 1 layer cake",
  totalTime: "About 15 min",
  allergens: ["Milk"],
  steps: [
    {
      id: "beat-butter",
      title: "Beat the butter",
      activity: "prep",
      tone: "pink",
      uses: ["butter"],
      instructions: ["Beat the softened butter until smooth and pale."],
    },
    {
      id: "add-sugar",
      title: "Add the icing sugar",
      activity: "prep",
      tone: "pink",
      uses: ["butter", "sugar"],
      instructions: [
        "Beat in the sifted icing sugar in batches.",
        "Scrape down the sides of the bowl between additions.",
      ],
    },
    {
      id: "adjust",
      title: "Adjust the consistency",
      activity: "prep",
      tone: "pink",
      uses: ["butter", "sugar", "liquid"],
      instructions: [
        "Beat in the liquid about 15 g (1 tbsp) at a time, until the buttercream is smooth and soft enough to spread or pipe.",
      ],
    },
  ],
  notes: [
    "Add the liquid a spoonful at a time. Stop when the cream is soft enough for your piping bag or palette knife.",
    {
      text: "The batch size and preparation time are from Cupcake Jemma’s written recipe.",
      source: {
        url: "https://cupcakejemma.com/products/classic-american-buttercream-recipe",
        label: "Classic American Buttercream",
      },
    },
  ],
  source: {
    label: "Cupcake Jemma · Buttercream Masterclass",
    url: "https://www.youtube.com/watch?v=O4qazwRvO6E",
  },
};
