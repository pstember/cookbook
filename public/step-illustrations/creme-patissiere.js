export default {
  whisk: {
    before: ["egg", "flour"],
    focus: "bowl",
    tool: "whisk",
    motion: "stir",
    en: "After whisking the yolks with sugar, whisk in the flour and cornflour until no lumps remain.",
    fr: "Fouettez les jaunes avec le sucre, puis incorporez la farine et la fécule jusqu’à ce qu’il ne reste plus de grumeaux.",
  },
  thicken: {
    before: ["milk", "bowl"],
    focus: "saucepan",
    tool: "whisk",
    motion: "stir",
    en: "Whisk a third of the hot milk into the yolks, then stir everything over low heat until large bubbles rise through the thickened cream.",
    fr: "Versez un tiers du lait chaud sur les jaunes en fouettant, puis remuez le tout à feu doux jusqu’à ce que de grosses bulles remontent à la surface de la crème épaissie.",
  },
  cool: {
    before: ["saucepan"],
    focus: "tray",
    tool: "spatula",
    after: "fridge",
    motion: "spread",
    en: "Spread the cream on a tray to stop the cooking. If making it ahead, press cling film directly against the cream and refrigerate.",
    fr: "Étalez la crème sur une plaque pour arrêter la cuisson. Si vous la préparez à l’avance, couvrez-la de film alimentaire au contact et réfrigérez-la.",
  },
};
