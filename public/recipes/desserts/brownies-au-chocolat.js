export default {
  id: "brownies-au-chocolat",
  category: "Desserts",
  title: "Brownies au chocolat",
  description: "Un petit brownie au chocolat noir et aux cacahuètes, à cuire dans un moule de 10 cm.",
  thumbnail: "assets/illustrations/recipes/brownies-au-chocolat.webp",
  lang: "fr",
  servings: 3,
  times: [
    { label: "Moule", value: "10 cm", icon: "oven" },
    { label: "Cuisson", value: "20–25 min", icon: "clock" },
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
  steps: [
    {
      id: "fouetter", title: "Fouetter l’œuf et le sucre", art: "whisk", tone: "yellow",
      timing: "Four à 200°C · fouetter 10 min",
      instructions: [
        "Préchauffez le four à 200°C et beurrez un moule de 10 cm.",
        "Fouettez l’œuf et le sucre pendant environ 10 minutes, jusqu’à ce que le mélange soit crémeux et ait triplé de volume.",
      ],
    },
    {
      id: "fondre", title: "Faire fondre le chocolat", art: "saucepan", tone: "pink",
      instructions: [
        "Faites fondre le chocolat et le beurre au bain-marie. Dès qu’ils sont fondus, retirez le récipient du feu et mélangez.",
      ],
      tip: "Chauffez juste assez pour faire fondre le chocolat et le beurre.",
    },
    {
      id: "melanger", title: "Mélanger et enfourner", art: "oven", tone: "blue",
      timing: "200°C · 20–25 min",
      instructions: [
        "Tamisez la farine et le cacao sur l’œuf fouetté, puis incorporez-les à la spatule. Ajoutez les cacahuètes concassées et le mélange de chocolat et de beurre.",
        "Versez la pâte dans le moule beurré et faites cuire 20 à 25 minutes.",
      ],
      timers: [{ label: "Vérifier la cuisson", minutes: 20 }],
    },
  ],
  source: {
    label: "Vidéo de la recette",
    url: "https://www.youtube.com/watch?v=IwQLHARXUFo",
  },
};
