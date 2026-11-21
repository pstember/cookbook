export default {
  id: "lemon-meringue-pie",
  category: "Desserts",
  title: "Lemon Meringue Pie",
  qualifier: "Pregnancy-friendly",
  description: "A buttery shortcrust, a bright lemon filling and soft swirls of toasted Swiss meringue.",
  image: {
    src: "assets/illustrations/lemon-meringue-pie.webp",
    alt: "Illustrated lemon meringue pie on a blue plate, with a slice pulled forward to show the lemon filling.",
  },
  times: [
    { label: "Prep", value: "30 min", icon: "clock" },
    { label: "Cook", value: "40 min", icon: "oven" },
    { label: "Chill & rest", value: "3 hr 15 min", icon: "snow" },
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
        { id: "juice", name: "fresh lemon juice", grams: 125, food: "juice" },
        { id: "zest", name: "finely grated lemon zest", grams: 6, food: "zest" },
        { id: "water", name: "water", grams: 200, food: "water" },
        { id: "cornflour", name: "cornflour", note: "cornstarch", grams: 24, food: "cornflour" },
        { id: "curd-sugar", name: "caster sugar", grams: 100, food: "sugar" },
        { id: "curd-butter", name: "unsalted butter", note: "cubed", grams: 85, food: "butter" },
        { id: "curd-yolks", name: "egg yolks", grams: 54, food: "yolk", eggGrams: 18, eggName: "large yolk" },
        { id: "whole-egg", name: "beaten whole egg", grams: 50, food: "egg", eggGrams: 50, eggName: "egg" },
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
  ingredientTip: "Use British Lion shell eggs or pasteurised liquid whites suitable for whipping. If using shell eggs, save the whites when you separate the pastry and filling yolks. Weigh the eggs without their shells.",
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
      id: "curd", title: "Make the lemon filling", art: "saucepan", tone: "pink",
      timing: "72°C / 162°F minimum",
      instructions: [
        "Whisk the cornflour, sugar, zest, juice and water in a saucepan. Stir over medium heat until thickened and bubbling, then let it bubble for 1 minute, stirring constantly.",
        "Whisk the yolks and whole egg separately. Gradually whisk in a few spoonfuls of the hot lemon mixture, then return everything to the pan. Stir over medium-low heat until it bubbles gently and reaches at least 72°C (162°F) throughout. Take off the heat, stir in the butter and pour into the baked shell.",
      ],
      tip: "Add the hot mixture to the eggs a spoonful at a time so they warm up evenly.",
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
        "Spoon the meringue onto the warm filling and spread it right to the pastry edge. Lift your spoon as you go to make wavy peaks.",
        "Set the pie under a preheated hot grill, about 15 cm from the element. Watch constantly and turn the tin if needed. Take it out as soon as the peaks turn golden.",
      ],
      tip: "The grill adds colour. The thermometer check in the previous step is what verifies the meringue temperature.",
    },
    {
      id: "chill", title: "Chill, then slice", art: "slice", tone: "pink",
      timing: "Cool 45 min · chill 2 hr",
      instructions: [
        "Cool the pie in its tin on a rack for about 45 minutes, then refrigerate for at least 2 hours so the filling sets. Get it into the fridge within 2 hours of cooking.",
        "Lift the set pie from the tin and slice with a sharp knife. Chill leftovers and eat within 48 hours.",
      ],
      tip: "Wipe the knife between cuts to keep the lemon and meringue layers neat.",
      timers: [{ label: "Cool on the rack", minutes: 45 }, { label: "Chill the finished pie", minutes: 120 }],
    },
  ],
  safety: {
    title: "Egg safety during pregnancy",
    notes: [
      { title: "Choose your eggs", text: "Use British Lion hen eggs within their use-by date or pasteurised liquid egg whites for the topping. Pick a carton labelled suitable for whipping. If you use carton whites, still cook the filling eggs as directed." },
      { title: "Check both egg mixtures", text: "Whisk the whites and sugar over simmering water and check that the mixture reaches at least 72°C (162°F) throughout before whipping. Check the filling reaches the same temperature on the hob. This target is above the 160°F minimum for egg dishes." },
      { title: "Golden peaks are for colour", text: "A browned top can still be undercooked underneath. Use a clean digital food thermometer for both checks." },
    ],
    sources: [
      { label: "NHS pregnancy guidance", url: "https://www.nhs.uk/pregnancy/keeping-well/foods-to-avoid/" },
      { label: "FDA guidance on egg dishes", url: "https://www.fda.gov/food/people-risk-foodborne-illness/holiday-goodies-food-safety-moms-be" },
      { label: "Swiss meringue method", url: "https://www.kingarthurbaking.com/recipes/swiss-meringue-recipe" },
    ],
  },
  nutrition: {
    finishedWeightGrams: 1200,
    yieldAssumptions: "The finished weight allows for moisture lost during cooking and cooling, plus a small amount of pastry trimming. The yield is estimated from the ingredient weights and has not been weighed.",
    dataAssumptions: "The calculation treats the weight loss as predominantly water and retains all ingredient nutrients. Raw egg white is a proxy for pasteurised white. Raw lemon peel is a proxy for zest, with fibre subtracted from total carbohydrate. Fresh lemon juice uses CoFID’s NSP fibre as a proxy because its AOAC value is unavailable. CoFID trace values are treated as zero. Tap water is modelled as zero for the listed nutrients.",
  },
  source: {
    label: "Angela Nilsen’s lemon meringue pie in Good Food",
    url: "https://www.bbcgoodfood.com/recipes/ultimate-lemon-meringue-pie",
  },
};
