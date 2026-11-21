export default {
  id: "genoise",
  title: "Génoise",
  category: "Baking basics",
  lang: "fr",
  description: "Une génoise légère à garnir, préparée en fouettant longuement l’œuf avec le sucre.",
  servings: 3,
  times: [{ label: "Cuisson", value: "25 min", icon: "oven" }],
  groups: [{
    title: "Biscuit",
    art: "whisk",
    tone: "yellow",
    ingredients: [
      { id: "egg", name: "œuf", quantity: 1 },
      { id: "flour", name: "farine", grams: 30 },
      { id: "sugar", name: "sucre", grams: 30 },
      { id: "fat", name: "beurre ou huile", grams: 10, note: "pour préparer le moule" },
      { id: "salt", name: "sel", note: "facultatif" },
    ],
  }],
  steps: [
    {
      id: "prepare", title: "Préparer le moule", art: "oven", tone: "blue",
      instructions: ["Préchauffez le four à 180 °C. Graissez et farinez un moule de 20 cm, ou chemisez le fond et les bords de papier cuisson."],
    },
    {
      id: "whip", title: "Fouetter puis incorporer la farine", art: "whisk", tone: "yellow",
      timing: "10 min",
      instructions: [
        "Battez l’œuf et le sucre pendant 10 minutes pour obtenir un mélange crémeux qui a triplé de volume.",
        "Tamisez la farine avec le sel si vous en utilisez. Incorporez-la doucement à la spatule pour conserver le volume.",
      ],
      timers: [{ label: "Fouetter l’œuf et le sucre", minutes: 10 }],
    },
    {
      id: "bake", title: "Cuire la génoise", art: "oven", tone: "pink",
      timing: "180 °C · 25 min",
      instructions: ["Versez la pâte dans le moule et enfournez pour 25 minutes. Démoulez sur une grille et laissez refroidir avant de garnir."],
      timers: [{ label: "Cuisson de la génoise", minutes: 25 }],
    },
  ],
  source: {
    credit: "Vidéo",
    label: "Les Secrets de Muriel · Génoise",
    url: "https://www.youtube.com/watch?v=flKwZOZRnJI",
  },
};
