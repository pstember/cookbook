export default {
  id: "strawberry-yoghurt-lollies",
  title: "Strawberry Yoghurt Lollies",
  category: "Desserts",
  totalTime: "At least 6 hr, plus blending and unmoulding",
  restTime: "Freeze at least 6 hr, plus 10–15 min to soften if desired",
  description: "Strawberries, banana and Greek yoghurt blended into creamy ice lollies.",
  thumbnail: "assets/illustrations/recipes/strawberry-yoghurt-lollies.webp",
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
  setup: [
    "Have a blender, lolly moulds and sticks ready.",
  ],
  allergens: ["Milk"],
  steps: [
    {
      id: "blend",
      title: "Blend the fruit and yoghurt",
      tone: "pink",
      activity: "prep",
      uses: ["yoghurt", "strawberries", "banana", "glucose", "lemon-juice"],
      instructions: [
        "Put the yoghurt, strawberries, banana, glucose syrup and optional lemon juice in a blender.",
        "Blend until smooth.",
      ],
    },
    {
      id: "fill",
      title: "Fill the moulds",
      tone: "pink",
      activity: "prep",
      uses: ["yoghurt", "strawberries", "banana", "glucose", "lemon-juice"],
      instructions: [
        "Pour the mixture into the lolly moulds.",
        "Insert the sticks.",
      ],
    },
    {
      id: "freeze",
      title: "Freeze the lollies",
      tone: "pink",
      activity: "chill",
      uses: ["yoghurt", "strawberries", "banana", "glucose", "lemon-juice"],
      instructions: [
        "Freeze the filled moulds for at least 6 hours or overnight, until the lollies are solid.",
      ],
      duration: [360, 360],
      durationMinimum: true,
      wait: "At least 6 hr or overnight",
      timers: [
        { label: "Check the frozen lollies", minutes: 360, afterInstruction: 1 },
      ],
    },
    {
      id: "release",
      title: "Release the lollies",
      tone: "pink",
      activity: "prep",
      uses: ["yoghurt", "strawberries", "banana", "glucose", "lemon-juice"],
      instructions: [
        "Run warm water briefly over the outside of each mould.",
        "Ease each lolly out by its stick.",
      ],
    },
    {
      id: "soften",
      title: "Soften before serving, if you like",
      tone: "pink",
      activity: "wait",
      uses: ["yoghurt", "strawberries", "banana", "glucose", "lemon-juice"],
      instructions: [
        "Leave the lollies to soften for 10–15 minutes if you prefer a gentler bite.",
      ],
      duration: [10, 15],
      optional: true,
      wait: "10–15 min, optional",
      timers: [
        { label: "Check the texture", minutes: 10, afterInstruction: 1 },
      ],
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
