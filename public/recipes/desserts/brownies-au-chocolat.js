const batter = ["oeuf", "farine", "sucre", "cacao", "cacahuetes", "beurre", "chocolat"];

export default {
  id: "brownies-au-chocolat",
  category: "Desserts",
  cookingTime: "20 à 25 min au four, plus la fonte du chocolat",
  restTime: "Jusqu’à refroidissement complet dans le moule",
  title: "Brownies au chocolat",
  description: "Un petit brownie au chocolat noir et aux cacahuètes, à cuire dans un moule de 10 cm.",
  thumbnail: "assets/illustrations/recipes/brownies-au-chocolat.webp",
  lang: "fr",
  servings: 3,
  times: [
    { label: "Moule", value: "10 cm", icon: "oven" },
    { label: "Cuisson", value: "20–25 min", icon: "clock" },
  ],
  plan: [
    { title: "Four et moule", detail: "Préchauffez à 200 °C et beurrez un moule de 10 cm." },
    {
      title: "Préparez deux mélanges",
      detail: "Préparez-les séparément avant de les réunir.",
      branches: [
        { step: "fouetter", title: "Œuf + sucre", detail: "Fouettez environ 10 min, jusqu’à ce que le mélange triple de volume." },
        { step: "fondre", title: "Chocolat + beurre", detail: "Faites fondre au bain-marie, puis retirez du feu." },
      ],
    },
    {
      step: "melanger",
      title: "Assemblez, cuisez et laissez refroidir",
      detail: "Incorporez la farine, le cacao, les cacahuètes et le chocolat fondu à l’œuf fouetté. Vérifiez la cuisson dès 20 min. Laissez refroidir avant de découper.",
    },
  ],
  groups: [
    {
      title: "Pâte à brownie", art: "whisk", tone: "yellow",
      ingredients: [
        { id: "oeuf", name: "œuf", quantity: 1, grams: 50, weightEstimate: true, note: "pesé sans coquille" },
        { id: "farine", name: "farine", grams: 15 },
        { id: "sucre", name: "sucre", grams: 25 },
        { id: "cacao", name: "cacao", grams: 8 },
        { id: "cacahuetes", name: "cacahuètes", grams: 30, note: "ou amandes torréfiées" },
        { id: "beurre", name: "beurre", grams: 35 },
        { id: "chocolat", name: "chocolat noir", grams: 62.5 },
      ],
    },
  ],
  setup: ["Préchauffez le four à 200 °C.", "Beurrez un moule de 10 cm."],
  allergens: [
    "Blé",
    "Œuf",
    "Lait",
    "Cacahuètes, ou amandes en cas de substitution",
    "Vérifiez les autres allergènes éventuels sur l’emballage du chocolat noir.",
  ],
  steps: [
    {
      id: "fouetter",
      title: "Fouetter l’œuf et le sucre",
      activity: "prep",
      tone: "yellow",
      uses: ["oeuf", "sucre"],
      duration: [10, 10],
      timing: "Environ 10 min au fouet",
      instructions: [
        "Préchauffez le four à 200 °C.",
        "Beurrez un moule de 10 cm.",
        "Fouettez l’œuf et le sucre environ 10 minutes, jusqu’à ce que le mélange soit crémeux et ait triplé de volume.",
      ],
      timers: [
        {
          label: "Vérifier le volume du mélange",
          minutes: 10,
          afterInstruction: 3,
        },
      ],
    },
    {
      id: "fondre",
      title: "Faire fondre le chocolat",
      activity: "cooking",
      tone: "yellow",
      uses: ["beurre", "chocolat"],
      heat: "Bain-marie frémissant",
      tip: "Chauffez juste assez pour faire fondre le chocolat et le beurre.",
      instructions: ["Posez un bol au-dessus d’une casserole d’eau frémissante.", "Faites fondre le chocolat et le beurre dans le bol."],
    },
    {
      id: "melanger",
      title: "Mélanger la pâte",
      activity: "prep",
      tone: "yellow",
      uses: batter,
      heat: "Hors du feu",
      instructions: [
        "Retirez le bol de chocolat fondu du bain-marie.",
        "Mélangez le chocolat et le beurre fondus.",
        "Tamisez la farine et le cacao sur l’œuf fouetté.",
        "Incorporez-les à la spatule.",
        "Incorporez les cacahuètes concassées et le mélange de chocolat et de beurre.",
      ],
    },
    {
      id: "cuire",
      title: "Cuire le brownie",
      activity: "cooking",
      tone: "yellow",
      uses: batter,
      duration: [20, 25],
      heat: "200 °C",
      instructions: [
        "Versez la pâte dans le moule beurré à l’aide d’une spatule.",
        "Enfournez à 200 °C pour 20 à 25 minutes.",
        "Plantez une pique au centre au bout de 20 minutes.",
        "Poursuivez la cuisson si de la pâte liquide adhère à la pique.",
        "Sortez le moule lorsque la pique ressort propre ou avec quelques miettes humides.",
      ],
      timers: [
        {
          label: "Vérifier la cuisson",
          minutes: 20,
          afterInstruction: 2,
        },
      ],
    },
    {
      id: "refroidir",
      title: "Laisser refroidir dans le moule",
      activity: "wait",
      tone: "yellow",
      uses: batter,
      wait: "Jusqu’à refroidissement complet",
      instructions: ["Laissez le brownie refroidir complètement dans le moule avant de le découper."],
    },
  ],
  notes: [{
    text: "Le test à la pique et le refroidissement complet sont des repères généraux pour les brownies.",
    source: { label: "Conseils de King Arthur Baking", url: "https://www.kingarthurbaking.com/recipes/quick-and-easy-brownies-recipe" },
  }],
  source: {
    label: "Vidéo de la recette",
    url: "https://www.youtube.com/watch?v=IwQLHARXUFo",
  },
};
