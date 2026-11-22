export default {
  id: "genoise",
  title: "Génoise",
  category: "Baking basics",
  restTime: "Sur grille jusqu’à refroidissement avant de garnir",
  lang: "fr",
  description: "Une génoise légère à garnir, préparée en fouettant longuement l’œuf avec le sucre.",
  thumbnail: "assets/illustrations/recipes/genoise.webp",
  servings: 3,
  times: [{ label: "Cuisson", value: "25 min", icon: "oven", highlight: "cook" }],
  groups: [{
    title: "Biscuit",
    art: "whisk",
    tone: "yellow",
    ingredients: [
      { id: "egg", name: "œuf", grams: 50, quantity: 1, weightEstimate: true, note: "sans coquille" },
      { id: "flour", name: "farine", grams: 30 },
      { id: "sugar", name: "sucre", grams: 30 },
      { id: "fat", name: "beurre ou huile", grams: 10, note: "pour préparer le moule" },
      { id: "tin-flour", name: "farine", grams: 5, weightEstimate: true, note: "pour fariner le moule s’il n’est pas chemisé" },
      { id: "salt", name: "sel", gramRange: [0, 0.4], weightEstimate: true, note: "facultatif, jusqu’à 1 pincée" },
    ],
  }],
  allergens: ["Blé (gluten)", "Œuf", "Lait (si vous utilisez du beurre)"],
  setup: ["Utilisez un moule de 20 cm. Préchauffez le four à 180 °C."],
  steps: [
    {
      id: "prepare",
      title: "Préparer le moule",
      activity: "prep",
      tone: "yellow",
      uses: ["fat", "tin-flour"],
      instructions: ["Préchauffez le four à 180 °C."],
      options: [
        {
          title: "Beurre et farine",
          instructions: [
            "Graissez le moule de 20 cm avec le beurre ou l’huile.",
            "Farinez le moule avec les 5 g de farine prévus à cet effet.",
          ],
        },
        {
          title: "Papier cuisson",
          instructions: ["Chemisez le fond et les bords du moule de 20 cm de papier cuisson."],
        },
      ],
    },
    {
      id: "whip",
      title: "Fouetter l’œuf et le sucre",
      activity: "prep",
      tone: "yellow",
      uses: ["egg", "sugar"],
      duration: [10, 10],
      instructions: [
        "Fouettez l’œuf et le sucre pendant 10 minutes, jusqu’à obtenir un mélange crémeux qui a triplé de volume.",
      ],
      timers: [
        { label: "Fouetter l’œuf et le sucre", minutes: 10, afterInstruction: 1 },
      ],
    },
    {
      id: "fold",
      title: "Incorporer la farine",
      activity: "prep",
      tone: "yellow",
      uses: ["egg", "flour", "sugar", "salt"],
      instructions: [
        "Tamisez la farine avec le sel, si vous en utilisez.",
        "Incorporez-la délicatement à l’œuf fouetté avec une spatule.",
        "Versez la pâte dans le moule préparé.",
      ],
    },
    {
      id: "bake",
      title: "Cuire la génoise",
      activity: "cooking",
      tone: "yellow",
      uses: ["egg", "flour", "sugar", "salt", "fat", "tin-flour"],
      duration: [25, 25],
      heat: "180 °C",
      instructions: ["Enfournez à 180 °C pour 25 minutes."],
      timers: [
        { label: "Cuisson de la génoise", minutes: 25, afterInstruction: 1 },
      ],
    },
    {
      id: "cool",
      title: "Refroidir sur une grille",
      activity: "wait",
      tone: "yellow",
      uses: ["egg", "flour", "sugar", "salt", "fat", "tin-flour"],
      wait: "Jusqu’à refroidissement",
      instructions: [
        "Démoulez la génoise sur une grille.",
        "Laissez-la refroidir avant de la garnir ou de la décorer.",
      ],
    },
  ],
  notes: [
    "Incorporez la farine délicatement à la spatule pour préserver le volume des œufs.",
  ],
  source: {
    credit: "Vidéo",
    label: "Les Secrets de Muriel · Génoise",
    url: "https://www.youtube.com/watch?v=flKwZOZRnJI",
  },
};
