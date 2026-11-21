export default {
  id: "easy-chocolate-chip-cookies",
  category: "Desserts",
  title: "Easy Chocolate Chip Cookies",
  description: "Thick chocolate chip cookies with crisp edges and a soft middle.",
  thumbnail: "assets/illustrations/recipes/easy-chocolate-chip-cookies.webp",
  times: [
    { label: "Mix", value: "About 10 min", icon: "clock" },
    { label: "Chill", value: "1–24 hr", icon: "snow" },
    { label: "Bake", value: "15–20 min", icon: "oven" },
  ],
  groups: [
    {
      title: "Cookie dough", art: "rolling", tone: "yellow",
      ingredients: [
        { id: "butter", name: "softened butter", grams: 115, note: "½ cup, preferably salted" },
        { id: "sugar", name: "sugar", grams: 200, note: "1 cup" },
        { id: "egg", name: "egg", quantity: 1, grams: 50, weightEstimate: true, note: "beaten, weighed without the shell" },
        { id: "vanilla", name: "vanilla extract", quantity: 1, unit: "tsp", grams: 4.2, weightEstimate: true },
        { id: "flour", name: "plain flour", grams: 220, note: "1¾ cups, plus a little for shaping" },
        { id: "baking-soda", name: "bicarbonate of soda", quantity: "½", unit: "tsp", grams: 3, weightEstimate: true },
        { id: "salt", name: "fine salt", quantity: "1 pinch", grams: 0.4, weightEstimate: true, note: "use about 1.5 g (¼ tsp) instead if using unsalted butter" },
        { id: "chocolate-chips", name: "chocolate chips", grams: 150, note: "1 cup of milk, dark or white chocolate chips" },
      ],
    },
  ],
  steps: [
    {
      id: "mix", title: "Mix the dough", art: "whisk", tone: "yellow",
      instructions: [
        "Beat the softened butter with the sugar for 2–3 minutes. Add the beaten egg and vanilla and mix until combined.",
        "Whisk the flour, bicarbonate of soda and salt together and mix in the chocolate chips. Add the dry mixture to the butter mixture in three batches, beating on low until it just comes together.",
      ],
    },
    {
      id: "chill", title: "Chill the dough", art: "rolling", tone: "blue",
      timing: "1–24 hr",
      instructions: [
        "Turn the dough out onto a lightly floured worktop. Bring it together gently, shape into one ball and wrap it. Refrigerate for at least 1 hour, or up to 24 hours.",
      ],
      tip: "Chilling helps the dough spread less. An overnight chill gives thicker cookies and a fuller flavour.",
      timers: [{ label: "Chill the dough", minutes: 60 }],
    },
    {
      id: "shape", title: "Shape the cookies", art: "rolling", tone: "pink",
      instructions: [
        "Divide the chilled dough into golf-ball-sized portions. Place them apart on parchment-lined baking trays and flatten the tops lightly with a flour-dusted fork. Press on extra chocolate chips if you like.",
        "Put the trays back in the fridge while the oven heats to 175–180°C.",
      ],
    },
    {
      id: "bake", title: "Bake and cool", art: "oven", tone: "yellow",
      timing: "175–180°C · about 15–20 min",
      instructions: [
        "Bake for about 15 minutes and check the cookies. Larger or colder cookies may need up to 20 minutes. Cool them before serving.",
      ],
      tip: "Let the cookies cool on the tray for a crisper outside, or move them to a rack once they are firm enough to lift for a softer finish.",
      timers: [{ label: "Check the cookies", minutes: 15 }],
    },
  ],
  notes: [
    "Store in an airtight container at room temperature for 3–5 days, with parchment between layers.",
    "Freeze in a freezer-safe container or bag for up to 3 months.",
  ],
  source: {
    label: "Easy Chocolate Chip Cookies by Rosemary Molloy",
    credit: "Adapted from the recipe published by An Italian in My Kitchen.",
    url: "https://anitalianinmykitchen.com/thick-chocolate-chip-cookies/",
  },
};
