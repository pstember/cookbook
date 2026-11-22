export default {
  id: "lemon-meringue-pie",
  category: "Desserts",
  title: "Lemon Meringue Pie",
  description: "Buttery shortcrust with an oven-baked lemon filling and soft swirls of toasted Swiss meringue.",
  image: {
    src: "assets/illustrations/lemon-meringue-pie.webp",
    alt: "Illustrated lemon meringue pie on a blue plate, with a slice pulled forward to show the lemon filling.",
  },
  times: [
    { label: "Prep", value: "40 min", icon: "clock" },
    { label: "Cook", value: "51–67 min", icon: "oven" },
    { label: "Chill & rest", value: "2–3½ hr", icon: "snow" },
  ],
  servings: 8,
  batches: [
    { servings: 4, tins: "one 16 cm tin" },
    { servings: 8, tins: "one 23 cm tin" },
    { servings: 12, tins: "two 20 cm tins" },
    { servings: 16, tins: "two 23 cm tins" },
  ],
  groups: [
    {
      title: "Pastry", art: "rolling", tone: "yellow",
      ingredients: [
        { id: "flour", name: "plain flour", grams: 175, food: "flour" },
        { id: "pastry-butter", name: "unsalted butter", note: "cold, cubed", grams: 100, food: "butter" },
        { id: "pastry-sugar", name: "caster sugar", grams: 12, food: "sugar" },
        { id: "pastry-yolk", name: "egg yolk", grams: 18, food: "yolk", eggGrams: 18, eggName: "large yolk" },
        { id: "pastry-water", name: "cold water", grams: 15, food: "water" },
      ],
    },
    {
      title: "Lemon filling", art: "lemon", tone: "blue",
      ingredients: [
        { id: "filling-eggs", name: "beaten whole eggs", grams: 150, food: "egg", eggGrams: 50, eggName: "egg" },
        { id: "filling-yolk", name: "egg yolk", grams: 18, food: "yolk", eggGrams: 18, eggName: "large yolk" },
        { id: "filling-sugar", name: "caster sugar", grams: 150, food: "sugar" },
        { id: "filling-juice", name: "fresh lemon juice", grams: 155, food: "juice", weightEstimate: true, quantity: 150, unit: "ml", note: "strained, from about 4 lemons" },
        { id: "filling-zest", name: "finely grated lemon zest", grams: 18, food: "zest", weightEstimate: true, quantity: 3, unit: "lemons", note: "yellow peel only" },
        { id: "filling-butter", name: "salted butter", grams: 100, food: "saltedButter", note: "melted and cooled until just warm" },
        { id: "filling-cornflour", name: "cornflour", grams: 10, food: "cornflour", note: "cornstarch" },
      ],
    },
    {
      title: "Swiss meringue", art: "whisk", tone: "pink",
      ingredients: [
        { id: "white", name: "egg whites", grams: 120, food: "white", eggGrams: 30, eggName: "white" },
        { id: "meringue-sugar", name: "caster sugar", grams: 200, food: "sugar" },
      ],
    },
  ],
  ingredientTip: "Save the whites from the pastry and filling yolks and top up to the listed weight for the meringue. Weigh the eggs without their shells. If using carton whites, choose ones suitable for whipping.",
  steps: [
    {
      id: "pastry", title: "Roll the pastry", art: "rolling", tone: "yellow",
      timing: "Chill for 30 min",
      instructions: [
        "Rub the cold butter into the flour and sugar until the mixture looks like breadcrumbs. Add the yolk and cold water, then gently press the dough together.",
        "Roll between sheets of baking parchment to about 3 mm thick and line {tins}. Use loose-bottomed tart tins around 2.5 cm deep. Trim the rim, prick the base with a fork and chill for 30 minutes.",
      ],
      tip: "Patch any cracks with a little spare dough.",
      timers: [{ label: "Chill pastry", minutes: 30 }],
    },
    {
      id: "blind-bake", title: "Bake the shell", art: "oven", tone: "blue",
      timing: "200°C / 180°C fan · 20–23 min",
      instructions: [
        "Heat the oven to 200°C (180°C fan / 400°F) with a baking tray inside. Line the pastry with baking parchment and fill it with baking beans.",
        "Set the tin on the hot tray and bake for 15 minutes. Lift out the parchment and beans, then bake for another 5–8 minutes until the base is dry and golden.",
      ],
      tip: "Fill the shell with baking beans right up to the rim to support the sides.",
      timers: [{ label: "Bake with weights", minutes: 15 }, { label: "Bake uncovered", minutes: 5 }],
    },
    {
      id: "prep-lemons", title: "Zest and juice the lemons", tone: "yellow",
      instructions: [
        "Wash and dry the lemons. Finely grate the zest for the filling, taking only the yellow peel. Squeeze the lemons, strain out the seeds and weigh the juice.",
      ],
    },
    {
      id: "mix-filling", title: "Mix the lemon filling", tone: "pink",
      timing: "Whisk gently for 30–45 sec",
      instructions: [
        "Melt the salted butter and let it cool until just warm. In a mixing bowl, stir the caster sugar and cornflour together, then add the whole eggs and extra yolk. Whisk gently for 30–45 seconds until smooth.",
        "Whisk in the lemon juice gradually, followed by the zest. Drizzle in the melted butter while whisking just until combined. The filling should be runny. Use a light hand to keep air bubbles to a minimum.",
      ],
    },
    {
      id: "bake-filling", title: "Bake the filling in the shell", tone: "blue",
      timing: "150°C fan · 25–35 min",
      instructions: [
        "Lower the oven to 150°C fan. Put the warm baked pastry shell on a tray and pour in the filling to just below the rim. Bake on the middle shelf for 25 minutes before checking.",
        "Gently nudge the tray. The edges should be set and the centre should wobble slightly like jelly. Check that the centre reaches 75°C (167°F) with a food thermometer. If the centre is still liquid or below temperature, bake for another 3–5 minutes and check again.",
      ],
      tip: "Check each tart separately if baking more than one. Loosely shield the pastry rim with strips of foil if it starts to darken.",
      timers: [{ label: "Check the baked filling", minutes: 25 }, { label: "Recheck after extra baking", minutes: 3 }],
    },
    {
      id: "cool-filling", title: "Cool the baked tart", tone: "pink",
      timing: "30–60 min on a wire rack",
      instructions: [
        "Leave the tart in its tin on a wire rack for 30–60 minutes, until the filling is set and has cooled to room temperature. Make the meringue when the tart is ready to top.",
      ],
      timers: [{ label: "Check the tart has cooled", minutes: 30 }],
    },
    {
      id: "meringue", title: "Whisk the meringue", art: "whisk", tone: "yellow",
      timing: "72°C / 162°F minimum",
      instructions: [
        "Combine the whites and sugar in a clean heatproof bowl. Set it over a pan of barely simmering water, with the bowl above the water. Whisk continuously until the sugar dissolves and the mixture reaches at least 72°C (162°F) throughout, about 5–7 minutes.",
        "Lift the bowl off the heat. Beat with an electric mixer for 5–8 minutes, until the meringue is glossy and holds stiff peaks.",
      ],
      tip: "Stir before checking the temperature. Keep the tip of the thermometer off the bowl.",
      timers: [{ label: "Check the whisked peaks", minutes: 5 }],
    },
    {
      id: "brown", title: "Swirl and toast", art: "pie", tone: "blue",
      timing: "Hot grill · about 1–2 min",
      instructions: [
        "Spoon the fresh meringue onto the room-temperature filling and spread it right to the pastry edge. Lift your spoon as you go to make wavy peaks.",
        "Set the pie under a preheated hot grill, about 15 cm from the element. Watch constantly and turn the tin if needed. Take it out as soon as the peaks turn golden.",
      ],
      tip: "The grill adds colour. The thermometer check in the previous step is what verifies the meringue temperature.",
    },
    {
      id: "chill", title: "Chill, then slice", art: "slice", tone: "pink",
      timing: "Chill for 1–2 hr",
      instructions: [
        "Refrigerate the finished pie for 1–2 hours before serving. Get it into the fridge within 2 hours of baking the filling.",
        "Lift the chilled pie from the tin and slice straight down with a sharp knife. Keep the pie refrigerated and serve within 24 hours for the best texture.",
      ],
      tip: "Wipe the knife between cuts to keep the lemon and meringue layers neat.",
      timers: [{ label: "Check the chilled pie", minutes: 60 }],
    },
  ],
  nutrition: {
    finishedWeightGrams: 1150,
    yieldAssumptions: "The 1,150 g finished yield assumes roughly 90 g lost to pastry trimming and moisture loss during baking, heating and cooling. Weigh the chilled pie for a more accurate yield.",
    dataAssumptions: "The calculation treats the weight loss as predominantly water and retains all ingredient nutrients. Raw egg white is a proxy for pasteurised white. Raw lemon peel is a proxy for zest, with fibre subtracted from total carbohydrate. Fresh lemon juice uses CoFID’s NSP fibre as a proxy because its AOAC value is unavailable. The lemon juice weight is converted from volume using USDA data. The zest weight assumes three medium lemons. CoFID trace values and tap-water nutrients are treated as zero.",
  },
  source: {
    credit: "Shortcrust adapted from",
    label: "Angela Nilsen’s lemon meringue pie in Good Food",
    url: "https://www.bbcgoodfood.com/recipes/ultimate-lemon-meringue-pie",
  },
};
