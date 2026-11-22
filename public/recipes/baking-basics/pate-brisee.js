export default {
  id: "pate-brisee",
  title: "Pâte brisée",
  category: "Baking basics",
  restTime: "Au réfrigérateur jusqu’à utilisation, préparation possible la veille",
  lang: "fr",
  description: "Une pâte à foncer au beurre et au jaune d’œuf pour les tartes salées ou sucrées.",
  thumbnail: "assets/illustrations/recipes/pate-brisee.webp",
  groups: [{
    title: "Pâte",
    art: "rolling",
    tone: "yellow",
    ingredients: [
      { id: "flour", name: "farine", grams: 200 },
      { id: "butter", name: "beurre", grams: 100, note: "souple et coupé en morceaux" },
      { id: "salt", name: "sel fin", grams: 0.8, quantity: 2, unit: "pincées", weightEstimate: true },
      { id: "yolk", name: "jaune d’œuf", grams: 17, quantity: 1, weightEstimate: true },
      { id: "water", name: "eau", grams: 40, quantity: 4, unit: "cl", weightEstimate: true, note: "à ajuster selon la consistance" },
    ],
  }],
  allergens: ["Blé (gluten)", "Œuf", "Lait"],
  steps: [
    {
      id: "rub-in",
      title: "Sabler le beurre",
      activity: "prep",
      tone: "yellow",
      uses: ["flour", "butter", "salt"],
      instructions: ["Réunissez la farine, le sel et les morceaux de beurre dans un bol."],
      options: [
        {
          title: "À la main",
          instructions: [
            "Sablez le mélange du bout des doigts jusqu’à obtenir une texture de sable grossier.",
          ],
        },
        {
          title: "Au robot",
          instructions: [
            "Travaillez le mélange à la feuille jusqu’à obtenir une texture de sable grossier.",
          ],
        },
      ],
    },
    {
      id: "form",
      title: "Former la pâte",
      activity: "prep",
      tone: "yellow",
      uses: ["flour", "butter", "salt", "yolk", "water"],
      instructions: [
        "Incorporez le jaune.",
        "Ajoutez l’eau peu à peu, juste assez pour que la pâte se tienne sans s’effriter.",
      ],
    },
    {
      id: "fraise",
      title: "Fraiser la pâte",
      activity: "prep",
      tone: "yellow",
      uses: ["flour", "butter", "salt", "yolk", "water"],
      instructions: [
        "Déposez la pâte sur le plan de travail.",
        "Écrasez-la brièvement avec le talon de la main pour aplatir les morceaux de beurre encore visibles.",
        "Rassemblez la pâte avec une corne ou une spatule.",
      ],
    },
    {
      id: "rest",
      title: "Laisser reposer au frais",
      activity: "chill",
      tone: "yellow",
      uses: ["flour", "butter", "salt", "yolk", "water"],
      wait: "Jusqu’à utilisation",
      instructions: ["Enveloppez la pâte.", "Réfrigérez-la jusqu’à son utilisation."],
      tip: "Vous pouvez préparer la pâte plusieurs heures à l’avance ou la veille.",
    },
  ],
  notes: [
    "Arrêtez de mélanger dès que la pâte se tient. Versez l’eau peu à peu pour pouvoir ajuster la quantité.",
  ],
  storage: {
    fridge: "Gardez la pâte enveloppée plusieurs heures ou une nuit avant de l’utiliser.",
  },
  source: {
    credit: "Technique d’après",
    label: "Meilleur du Chef · Pâte brisée",
    url: "https://www.meilleurduchef.com/fr/recette/pate-brisee.html",
  },
};
