export default {
  id: "strawberry-yoghurt-lollies",
  title: "Strawberry Yoghurt Lollies",
  category: "Desserts",
  description: "Strawberries, banana and Greek yoghurt blended into creamy ice lollies.",
  yield: "About 5 lollies",
  times: [{ label: "Freeze", value: "At least 6 hr", icon: "snow" }],
  groups: [{
    title: "Lolly mixture",
    tone: "pink",
    ingredients: [
      { id: "yoghurt", name: "full-fat Greek yoghurt", grams: 120, food: "greekYoghurt" },
      { id: "strawberries", name: "strawberries", grams: 100, food: "strawberries", note: "fresh or thawed from frozen" },
      { id: "banana", name: "ripe banana", grams: 118, food: "banana", note: "about one small banana, peeled" },
      { id: "glucose", name: "glucose syrup", grams: 15, food: "glucoseSyrup" },
      { id: "lemon-juice", name: "lemon juice", grams: 6, food: "juice", note: "optional" },
    ],
  }],
  steps: [
    {
      id: "blend", title: "Blend the fruit and yoghurt",
      instructions: ["Add the yoghurt, strawberries, banana, glucose syrup and optional lemon juice to a blender. Blend until smooth."],
    },
    {
      id: "freeze", title: "Fill the moulds and freeze", timing: "At least 6 hr",
      instructions: ["Pour into ice lolly moulds, insert the sticks and freeze for at least 6 hours or overnight."],
      timers: [{ label: "Freeze the lollies", minutes: 360 }],
    },
    {
      id: "release", title: "Release the lollies",
      instructions: ["Run warm water briefly over the outside of the moulds. Let the lollies soften for 10–15 minutes if you prefer a gentler bite."],
    },
  ],
  notes: [
    "To vary the sweetener, try 15 g maple syrup or two soaked dates. Either can change how firmly the lollies freeze.",
    "Try mango and coconut milk in place of the strawberries and yoghurt. For a layered look, freeze two fruit mixtures in the same mould. Vanilla, cinnamon, finely chopped fruit or crushed cereal can also be added.",
  ],
  nutrition: {
    finishedWeightGrams: 359,
    yieldAssumptions: "The frozen mixture is assumed to retain the ingredient weight, with negligible evaporation and transfer loss.",
    dataAssumptions: "The calculation includes the optional lemon juice and uses 5% fat Greek yoghurt and the listed glucose syrup as reference products. CoFID trace values are treated as zero.",
  },
};
