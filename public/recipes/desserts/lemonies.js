export default {
  id: "lemonies",
  title: "Lemonies",
  lang: "fr",
  category: "Desserts",
  description: "Des carrés fondants au citron, avec un glaçage acidulé.",
  thumbnail: "assets/illustrations/recipes/lemonies.webp",
  servings: 9,
  times: [{ label: "Préparation", value: "10 min", icon: "clock" }, { label: "Cuisson", value: "15–20 min", icon: "oven" }],
  groups: [
    {
      title: "Pâte au citron",
      tone: "yellow",
      ingredients: [
        { id: "eggs", name: "d’œufs", grams: 200, quantity: 4, weightEstimate: true, note: "pesés sans coquille" },
        { id: "flour", name: "de farine", grams: 115 },
        { id: "baking-powder", name: "de levure chimique", grams: 4, quantity: "1 c. à café rase", weightEstimate: true },
        { id: "sugar", name: "de sucre", grams: 120 },
        { id: "lemon-juice", name: "de jus de citron", grams: 15 },
        { id: "vanilla", name: "de vanille liquide", grams: 4.2, quantity: "1 c. à café", weightEstimate: true },
        { id: "butter", name: "de beurre fondu", grams: 120 },
        { id: "zest", name: "de zeste de citron non traité", grams: 6, quantity: "le zeste d’un citron", weightEstimate: true },
      ],
    },
    {
      title: "Glaçage",
      tone: "pink",
      ingredients: [
        { id: "icing-sugar", name: "de sucre glace", grams: 60 },
        { id: "icing-juice", name: "de jus de citron", grams: 15 },
      ],
    },
  ],
  steps: [
    {
      id: "prepare", title: "Préparer le moule",
      instructions: ["Préchauffez le four à 165°C en chaleur tournante. Graissez un moule carré de 18 cm et chemisez-le de papier cuisson en laissant dépasser deux languettes."],
    },
    {
      id: "mix", title: "Mélanger la pâte",
      instructions: ["Fouettez le beurre fondu et le sucre, puis incorporez les œufs un par un. Ajoutez le jus de citron, la farine et la levure tamisées, puis le zeste et la vanille. Mélangez jusqu’à ce que la pâte soit lisse."],
    },
    {
      id: "bake", title: "Cuire les lemonies", timing: "165°C chaleur tournante · 15–20 min",
      instructions: ["Versez la pâte dans le moule et enfournez 15 à 20 minutes. Pour une texture fondante, vérifiez la cuisson dès 15 minutes. La surface doit être légèrement dorée. Laissez refroidir."],
      timers: [{ label: "Vérifier la cuisson", minutes: 15 }],
    },
    {
      id: "glaze", title: "Glacer et découper",
      instructions: ["Mélangez le sucre glace et le jus de citron. Soulevez le gâteau à l’aide du papier cuisson et étalez le glaçage à la spatule. Laissez figer avant de découper neuf carrés."],
      tip: "Décorez de quelques zestes si vous le souhaitez.",
    },
  ],
  source: { label: "Mes Délicieuses Créations", url: "https://mesdelicieusescreations.com/brownie-au-citron/", credit: "Recette adaptée de" },
};
