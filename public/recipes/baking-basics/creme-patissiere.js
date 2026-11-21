export default {
  id: "creme-patissiere",
  title: "Crème pâtissière",
  category: "Baking basics",
  lang: "fr",
  description: "Une crème au lait et aux jaunes d’œufs à utiliser pour garnir des choux ou un fond de tarte.",
  groups: [{
    title: "Crème",
    art: "whisk",
    tone: "yellow",
    ingredients: [
      { id: "milk", name: "lait", grams: 250 },
      { id: "yolks", name: "jaunes d’œufs", quantity: 3 },
      { id: "sugar", name: "sucre cristallisé", grams: 50, note: "type S2" },
      { id: "flour", name: "farine", grams: 12.5 },
      { id: "starch", name: "fécule de maïs", grams: 12.5 },
    ],
  }],
  steps: [
    {
      id: "whisk", title: "Mélanger les jaunes", art: "whisk", tone: "pink",
      instructions: [
        "Faites chauffer le lait dans une casserole. Pendant ce temps, fouettez les jaunes avec le sucre. Ajoutez la farine et la fécule ensemble et fouettez jusqu’à obtenir un mélange lisse.",
      ],
    },
    {
      id: "thicken", title: "Faire épaissir la crème", art: "saucepan", tone: "yellow",
      instructions: [
        "Quand le lait bout, versez-en un tiers sur les jaunes en fouettant. Reversez le mélange dans la casserole avec le reste de lait.",
        "Remettez à feu doux et remuez sans arrêt jusqu’à ce que la crème épaississe et forme de grosses bulles.",
      ],
    },
    {
      id: "cool", title: "Refroidir la crème", art: "whisk", tone: "blue",
      instructions: ["Transvasez dans un bol en inox ou étalez sur une plaque pour arrêter la cuisson. Si vous ne l’utilisez pas aussitôt, couvrez la surface de film alimentaire et réfrigérez."],
    },
  ],
  notes: ["Matériel utile : balance, casserole, tamis, fouet, spatule et film alimentaire.", "Les blancs d’œufs peuvent être conservés au congélateur."],
};
