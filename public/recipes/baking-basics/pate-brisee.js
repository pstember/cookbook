export default {
  id: "pate-brisee",
  title: "Pâte brisée",
  category: "Baking basics",
  lang: "fr",
  description: "Une pâte à foncer au beurre et au jaune d’œuf pour les tartes salées ou sucrées.",
  groups: [{
    title: "Pâte",
    art: "rolling",
    tone: "yellow",
    ingredients: [
      { id: "flour", name: "farine", grams: 200 },
      { id: "butter", name: "beurre", grams: 100, note: "souple et coupé en morceaux" },
      { id: "salt", name: "sel fin", quantity: 2, unit: "pincées" },
      { id: "yolk", name: "jaune d’œuf", quantity: 1 },
      { id: "water", name: "eau", quantity: 4, unit: "cl", note: "à ajuster selon la consistance" },
    ],
  }],
  steps: [
    {
      id: "rub-in", title: "Sabler la pâte", art: "rolling", tone: "yellow",
      instructions: [
        "Mélangez la farine, le sel et le beurre en morceaux. Travaillez le mélange avec la feuille du batteur ou du bout des doigts jusqu’à obtenir une texture de sable grossier.",
      ],
    },
    {
      id: "form", title: "Former la pâte", art: "rolling", tone: "blue",
      instructions: [
        "Ajoutez le jaune et versez l’eau petit à petit. Arrêtez de mélanger dès que la pâte se rassemble et tient sans s’effriter.",
        "Posez la pâte sur le plan de travail et étalez-la brièvement avec le talon de la main pour écraser les morceaux de beurre encore visibles. Rassemblez-la avec une corne ou une spatule.",
      ],
    },
    {
      id: "rest", title: "Laisser reposer au frais", art: "rolling", tone: "pink",
      instructions: ["Enveloppez la pâte et réfrigérez-la jusqu’à son utilisation. Vous pouvez la préparer plusieurs heures à l’avance ou la veille."],
    },
  ],
  source: {
    credit: "Technique d’après",
    label: "Meilleur du Chef · Pâte brisée",
    url: "https://www.meilleurduchef.com/fr/recette/pate-brisee.html",
  },
};
