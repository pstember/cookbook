export default {
  id: "bavarois-aux-fraises",
  title: "Bavarois aux fraises",
  category: "Desserts",
  lang: "fr",
  description: "Une génoise fine sous une mousse aux fraises, avec un coulis gélifié qui prend toute une nuit au frais.",
  times: [
    { label: "Cuisson de la génoise", value: "18 min", icon: "oven" },
    { label: "Repos", value: "Une nuit", icon: "snow" },
  ],
  groups: [
    {
      title: "Génoise",
      art: "whisk",
      tone: "yellow",
      ingredients: [
        { id: "sponge-egg", name: "œuf", quantity: 1 },
        { id: "sponge-flour", name: "farine", grams: 30 },
        { id: "sponge-sugar", name: "sucre", grams: 30 },
        { id: "sponge-fat", name: "beurre ou huile", grams: 10, note: "pour graisser le moule" },
        { id: "sponge-salt", name: "sel", note: "facultatif" },
      ],
    },
    {
      title: "Mousse aux fraises",
      art: "whisk",
      tone: "pink",
      ingredients: [
        { id: "mousse-fruit", name: "fraises", grams: 350 },
        { id: "mousse-sugar", name: "sucre en poudre", grams: 75 },
        { id: "mousse-cream", name: "crème liquide entière", grams: 225, note: "très froide, à peser" },
        { id: "mousse-gelatin", name: "gélatine en poudre 200 Bloom", grams: 8, note: "ou 4 feuilles de même force" },
        { id: "mousse-water", name: "eau très froide", grams: 40, note: "pour la gélatine en poudre" },
      ],
    },
    {
      title: "Coulis aux fraises",
      art: "saucepan",
      tone: "blue",
      ingredients: [
        { id: "topping-fruit", name: "fraises", grams: 150 },
        { id: "topping-sugar", name: "sucre en poudre", grams: 20, note: "à ajuster selon les fraises" },
        { id: "topping-gelatin", name: "gélatine en poudre 200 Bloom", grams: 3, note: "ou 1½ feuille de même force" },
        { id: "topping-water", name: "eau très froide", grams: 15, note: "pour la gélatine en poudre" },
      ],
    },
  ],
  steps: [
    {
      id: "bloom", title: "Hydrater les deux portions de gélatine", art: "whisk", tone: "blue",
      timing: "Au moins 20 min",
      instructions: [
        "Dans deux récipients séparés, mélangez 8 g de gélatine en poudre avec 40 g d’eau et 3 g de gélatine en poudre avec 15 g d’eau. Laissez gonfler au moins 20 minutes.",
        "Si vous utilisez des feuilles, faites tremper séparément 4 feuilles et 1½ feuille dans deux bols d’eau très froide. Essorez-les avant de les incorporer.",
      ],
      timers: [{ label: "Hydrater la gélatine", minutes: 20 }],
    },
    {
      id: "sponge", title: "Cuire le biscuit", art: "oven", tone: "yellow",
      timing: "160 °C chaleur tournante · environ 18 min",
      instructions: [
        "Fouettez l’œuf et le sucre environ 10 minutes, puis incorporez la farine tamisée et, si vous en utilisez, le sel à la spatule. Versez dans un moule graissé de 18 cm.",
        "Enfournez environ 18 minutes à 160 °C en chaleur tournante. Laissez refroidir sur une grille avant de découper un disque de 16 cm.",
      ],
      timers: [{ label: "Cuisson du biscuit", minutes: 18 }],
    },
    {
      id: "mousse", title: "Préparer la mousse", art: "whisk", tone: "pink",
      instructions: [
        "Mixez les 350 g de fraises avec les 75 g de sucre. Faites chauffer jusqu’au premier bouillon. Retirez du feu, ajoutez la plus grande portion de gélatine et remuez pour la dissoudre.",
        "Versez dans un plat assez large et laissez redescendre à température ambiante. Fouettez la crème froide en augmentant progressivement la vitesse, puis incorporez la purée à la spatule.",
      ],
      tip: "Dans une assiette de 25 cm, la purée peut refroidir en une quarantaine de minutes.",
    },
    {
      id: "set-mousse", title: "Monter et faire prendre la mousse", art: "pie", tone: "blue",
      timing: "Au frais · 2 h 30 à 3 h",
      instructions: [
        "Tendez un film sous un cercle de 18 cm pour fermer le fond et posez-le sur un support plat. Chemisez les parois de rhodoïd si vous en avez.",
        "Centrez le disque de 16 cm dans le cercle. Versez la mousse en laissant environ 3 mm libres en haut pour le coulis. Réfrigérez jusqu’à ce que la surface soit ferme, de 2 h 30 à 3 h.",
      ],
      tip: "Servez un éventuel reste de mousse en verrine avec des chutes de génoise.",
      timers: [{ label: "Vérifier la prise de la mousse", minutes: 150 }],
    },
    {
      id: "coulis", title: "Préparer et verser le coulis", art: "saucepan", tone: "yellow",
      instructions: [
        "Mixez les 150 g de fraises avec les 20 g de sucre et portez à ébullition. Hors du feu, faites dissoudre la petite portion de gélatine et laissez refroidir à température ambiante.",
        "Quand la mousse est prise, versez doucement le coulis refroidi au centre et laissez-le s’étaler jusqu’aux bords.",
      ],
    },
    {
      id: "serve", title: "Laisser reposer et démouler", art: "slice", tone: "pink",
      timing: "Une nuit au réfrigérateur",
      instructions: ["Protégez l’entremets avec une cloche ou un saladier retourné et réfrigérez jusqu’au lendemain. Retirez le film du dessous, soulevez le cercle et enlevez le rhodoïd."],
    },
  ],
  related: [{ id: "genoise", label: "Génoise" }],
  source: {
    credit: "Méthode adaptée de",
    label: "C’est ma fournée ! · Bavarois aux fraises",
    url: "https://www.cestmafournee.com/2019/05/le-bavarois-aux-fraises.html",
  },
};
