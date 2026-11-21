export default {
  id: "two-day-birthday-cake",
  category: "Desserts",
  title: "Two-Day Birthday Cake",
  description: "Two layers of génoise filled with strawberries and raspberries and finished with whipped mascarpone icing.",
  times: [
    { label: "Schedule", value: "2 days", icon: "clock" },
    { label: "Tin diameter", value: "20 or 23 cm", icon: "oven" },
    { label: "Final chill", value: "At least 2 hr", icon: "snow" },
  ],
  ingredientTip: "Where two quantities appear, use the first for a 20 cm cake and the second for a 23 cm cake.",
  related: [{ id: "genoise" }, { id: "creme-au-beurre" }],
  groups: [
    {
      title: "Génoise", art: "whisk", tone: "yellow",
      ingredients: [
        { id: "eggs", name: "large eggs", quantity: "4 / 6" },
        { id: "sponge-sugar", name: "granulated sugar", quantity: "120 / 180", unit: "g" },
        { id: "flour", name: "cake flour or T45 flour", quantity: "120 / 180", unit: "g" },
        { id: "fat", name: "melted butter or oil", quantity: "40 / 60", unit: "g" },
      ],
    },
    {
      title: "Fruit filling", art: "saucepan", tone: "pink",
      ingredients: [
        { id: "strawberries", name: "strawberries", quantity: "180 / 240", unit: "g", note: "diced" },
        { id: "raspberries", name: "raspberries", quantity: "120 / 160", unit: "g", note: "left whole" },
        { id: "gelatine", name: "gelatine (200 Bloom)", quantity: "3.5 / 4.7", unit: "g", note: "about 2 / 2½ sheets, depending on the brand" },
        { id: "filling-sugar", name: "sugar", quantity: "30 / 40", unit: "g" },
        { id: "lemon-juice", name: "lemon juice", note: "amount unspecified" },
      ],
    },
    {
      title: "Mascarpone icing", art: "whisk", tone: "blue",
      ingredients: [
        { id: "mascarpone", name: "mascarpone", quantity: "300 / 400", unit: "g", note: "cold" },
        { id: "cream", name: "cream (at least 30% fat)", quantity: "300 / 400", unit: "g", note: "cold" },
        { id: "icing-sugar", name: "icing sugar", quantity: "60 / 80", unit: "g" },
        { id: "vanilla", name: "vanilla", note: "amount unspecified" },
      ],
    },
  ],
  steps: [
    {
      id: "make-sponge", title: "Day 1 · Mix the génoise", art: "whisk", tone: "yellow",
      timing: "165°C · whisk for 8–10 min",
      instructions: [
        "Preheat the oven to 165°C. Soak the cake tin strips in water and wrap them around the prepared tin.",
        "Whisk the eggs and sugar until the batter falls from the whisk in a ribbon, about 8–10 minutes. Sift in the flour in three batches, folding gently each time. Fold in the melted butter or oil last.",
      ],
    },
    {
      id: "bake", title: "Day 1 · Bake and rest the sponge", art: "oven", tone: "blue",
      timing: "20 cm · 25–30 min / 23 cm · 35–40 min",
      instructions: [
        "Pour the batter into the tin, then bake for about 25–30 minutes in a 20 cm tin or 35–40 minutes in a 23 cm tin.",
        "Leave the sponge in the tin for 10 minutes, then transfer to a wire rack. Once completely cool, wrap it tightly and leave it overnight at room temperature. Refrigerate it if the kitchen is very warm.",
      ],
      tip: "Let the sponge rest overnight so the crumb holds together when you slice it.",
      timers: [{ label: "Check the 20 cm sponge", minutes: 25 }, { label: "Check the 23 cm sponge", minutes: 35 }],
    },
    {
      id: "filling", title: "Day 2 · Make the fruit filling", art: "saucepan", tone: "pink",
      timing: "Simmer 3–4 min · chill 1–2 hr",
      instructions: [
        "Soak the gelatine sheets in ice water for 5 minutes. Simmer the diced strawberries, sugar and lemon juice for 3–4 minutes.",
        "Take the pan off the heat. Squeeze the water from the gelatine and stir it into the warm fruit until dissolved. Gently fold in the whole raspberries.",
        "Refrigerate the filling for 1–2 hours, until thick enough to spread without running.",
      ],
      timers: [{ label: "Chill the fruit filling", minutes: 60 }],
    },
    {
      id: "slice-and-whip", title: "Day 2 · Slice the sponge and whip the icing", art: "whisk", tone: "blue",
      instructions: [
        "Unwrap the sponge and use a serrated knife to cut it horizontally into two even layers.",
        "Whip the cold mascarpone and cream with the icing sugar and vanilla until the icing holds stiff peaks.",
      ],
      tip: "Chill the bowl and whisk in the freezer for 10 minutes before whipping the icing.",
    },
    {
      id: "assemble", title: "Day 2 · Fill and crumb-coat", art: "pie", tone: "yellow",
      timing: "Chill 30–60 min",
      instructions: [
        "Pipe a tall ring of icing around the bottom layer. Spread the chilled filling inside the ring and place the second layer on top.",
        "Spread a thin coat of icing over the top and sides to hold the crumbs in place. Refrigerate for 30–60 minutes before finishing.",
      ],
      timers: [{ label: "Chill the crumb coat", minutes: 30 }],
    },
    {
      id: "finish", title: "Day 2 · Finish and chill", art: "slice", tone: "pink",
      timing: "Chill at least 2 hr",
      instructions: [
        "Coat the top and sides with the remaining mascarpone icing. Refrigerate for at least 2 hours or until ready to serve.",
      ],
      tip: "Dip the knife in hot water and wipe it dry between slices.",
      timers: [{ label: "Chill the finished cake", minutes: 120 }],
    },
  ],
};
