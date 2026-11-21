export default {
  "pate-brisee": {
    title: "Shortcrust pastry",
    description: "A butter and egg yolk pastry for sweet or savoury tarts.",
    groupTitles: ["Pastry"],
    ingredients: {
      flour: { name: "flour" },
      butter: { name: "butter", note: "softened and cut into pieces" },
      salt: { name: "fine salt", unit: "pinches" },
      yolk: { name: "egg yolk" },
      water: { name: "water", note: "adjust to achieve the right consistency" },
    },
    steps: {
      "rub-in": {
        title: "Rub in the butter",
        instructions: [
          "Mix the flour, salt and pieces of butter. Work them together with a stand mixer fitted with the paddle attachment or rub them in with your fingertips until the mixture resembles coarse sand.",
        ],
      },
      form: {
        title: "Bring the pastry together",
        instructions: [
          "Add the yolk, then pour in the water a little at a time. Stop mixing as soon as the dough comes together and holds without crumbling.",
          "Turn the dough onto the work surface and briefly push it away from you with the heel of your hand to flatten any visible pieces of butter. Gather it together with a dough scraper or spatula.",
        ],
      },
      rest: {
        title: "Chill the pastry",
        instructions: [
          "Wrap the pastry and refrigerate it until needed. You can make it several hours ahead or the day before.",
        ],
      },
    },
    source: {
      credit: "Technique from",
      label: "Meilleur du Chef – Shortcrust pastry",
    },
  },

  genoise: {
    title: "Genoise sponge",
    description: "A light sponge made by whipping the egg and sugar together until airy, ready to fill or decorate.",
    times: [{ label: "Baking", value: "25 min" }],
    groupTitles: ["Sponge"],
    ingredients: {
      egg: { name: "egg", note: "without shell" },
      flour: { name: "flour" },
      sugar: { name: "sugar" },
      fat: { name: "butter or oil", note: "for preparing the tin" },
      "tin-flour": { name: "flour", note: "for dusting the tin if you aren’t lining it" },
      salt: { name: "salt", note: "optional, up to 1 pinch" },
    },
    steps: {
      prepare: {
        title: "Prepare the tin",
        instructions: [
          "Preheat the oven to 180 °C. Grease a 20 cm tin and dust with the 5 g of flour set aside for the tin, or line the base and sides with baking parchment.",
        ],
      },
      whip: {
        title: "Whip the egg and fold in the flour",
        timing: "10 min",
        instructions: [
          "Whisk the egg and sugar for 10 minutes, until creamy and tripled in volume.",
          "Sift the flour with the salt, if using. Fold it in gently with a spatula to keep as much air in the mixture as possible.",
        ],
        timerLabels: ["Whisk the egg and sugar"],
      },
      bake: {
        title: "Bake the genoise",
        timing: "180 °C · 25 min",
        instructions: [
          "Pour the batter into the tin and bake for 25 minutes. Turn the sponge out onto a wire rack and let it cool before filling or decorating.",
        ],
        timerLabels: ["Bake the genoise"],
      },
    },
    source: {
      credit: "Video",
      label: "Les Secrets de Muriel – Genoise sponge",
    },
  },

  "creme-patissiere": {
    title: "Pastry cream",
    description: "A milk and egg yolk custard for filling choux pastries or lining a tart shell.",
    groupTitles: ["Custard"],
    ingredients: {
      milk: { name: "milk" },
      yolks: { name: "egg yolks" },
      sugar: { name: "granulated sugar", note: "type S2" },
      flour: { name: "flour" },
      starch: { name: "cornflour" },
    },
    steps: {
      whisk: {
        title: "Whisk the yolks",
        instructions: [
          "Heat the milk in a saucepan. Meanwhile, whisk the yolks with the sugar. Add the flour and cornflour together and whisk until smooth.",
        ],
      },
      thicken: {
        title: "Thicken the custard",
        instructions: [
          "When the milk comes to the boil, pour about 83 g (a third) over the yolks while whisking. Pour the mixture back into the saucepan with the remaining milk.",
          "Return it to a low heat and stir constantly until the custard thickens and forms large bubbles.",
        ],
      },
      cool: {
        title: "Cool the custard",
        instructions: [
          "Transfer to a stainless steel bowl or spread the custard on a tray to stop the cooking. If you are preparing it ahead, press cling film directly against the surface and refrigerate.",
        ],
      },
    },
    notes: [
      "Useful equipment includes scales, a saucepan, a sieve, a whisk, a spatula and cling film.",
      "The egg whites can be frozen for another recipe.",
    ],
  },

  "creme-au-beurre": {
    title: "Crème au beurre",
    description: "Une crème au beurre simple pour glacer les gâteaux ou décorer les cupcakes à la poche.",
    groupTitles: ["Crème au beurre"],
    ingredients: {
      butter: { name: "beurre doux", note: "ramolli" },
      sugar: { name: "sucre glace", note: "tamisé" },
      liquid: { name: "lait entier", unit: "c. à soupe", note: "ou du lait infusé, du jus ou un autre liquide" },
    },
    steps: {
      "beat-butter": {
        title: "Fouetter le beurre",
        instructions: ["Fouettez le beurre ramolli jusqu’à ce qu’il soit lisse et pâle."],
      },
      "add-sugar": {
        title: "Incorporer le sucre glace",
        instructions: [
          "Ajoutez le sucre glace tamisé en plusieurs fois, tout en fouettant. Raclez les parois du bol pour obtenir une crème homogène.",
        ],
      },
      adjust: {
        title: "Ajuster la consistance",
        instructions: [
          "Incorporez le liquide en fouettant, environ 15 g (1 c. à soupe) à la fois, jusqu’à ce que la crème soit lisse et assez souple pour être étalée ou dressée à la poche.",
        ],
      },
    },
    source: { label: "Cupcake Jemma – Cours de crème au beurre" },
  },

  "tarte-aux-pommes": {
    title: "Tarte aux pommes",
    description: "Une tarte en pâte brisée garnie de compote à la cannelle et de fines lamelles de pommes Golden.",
    times: [
      { label: "Cuisson à blanc", value: "15 min" },
      { label: "Cuisson finale", value: "Environ 30 min" },
    ],
    groupTitles: ["Pâte brisée", "Compote de pommes", "Garniture"],
    ingredients: {
      flour: { name: "farine" },
      butter: { name: "beurre ramolli" },
      "pastry-yolk": { name: "jaune d’œuf" },
      "pastry-water": { name: "eau", note: "ajuster au besoin" },
      salt: { name: "sel", unit: "pincées" },
      "compote-apples": { name: "pommes à cuire Bramley", note: "à peser après avoir retiré le trognon, puis à couper en morceaux. On peut utiliser le même poids de pommes à croquer (environ 6)" },
      "compote-water": { name: "eau", note: "100 g (100 ml) pour une compote avec des morceaux, ou 300 g (300 ml) pour une purée lisse" },
      cinnamon: { name: "bâton de cannelle", unit: "pouces", note: "ou environ 1,3 g (½ c. à café) de cannelle moulue" },
      "lemon-juice": { name: "jus de citron", unit: "c. à soupe", note: "ajouter 14 g (1 c. à soupe) de plus selon le goût" },
      sugar: { name: "sucre cristallisé", note: "facultatif, à doser selon le goût" },
      "golden-apples": { name: "pommes Golden", note: "à peser après avoir retiré le trognon" },
      "glaze-yolk": { name: "jaune d’œuf" },
      "glaze-water": { name: "eau", unit: "c. à soupe" },
    },
    steps: {
      "make-pastry": {
        title: "Préparer la pâte",
        instructions: [
          "Sablez le beurre avec la farine et le sel. Incorporez le jaune, puis ajoutez l’eau peu à peu jusqu’à ce que la pâte se rassemble. Enveloppez la pâte et laissez-la reposer au réfrigérateur avant de l’étaler et de foncer le moule.",
        ],
      },
      "blind-bake": {
        title: "Cuire le fond à blanc",
        timing: "180 °C · 15 min",
        instructions: [
          "Préchauffez le four à 180 °C. Recouvrez la pâte de papier cuisson et ajoutez des poids de cuisson. Enfournez 15 minutes, puis retirez le papier et les poids.",
        ],
        timerLabels: ["Cuire le fond de tarte à blanc"],
      },
      compote: {
        title: "Cuire la compote",
        instructions: [
          "Faites cuire les morceaux de pomme avec l’eau, la cannelle et le jus de citron jusqu’à ce qu’ils soient tendres. Retirez le bâton de cannelle si vous en avez utilisé. Écrasez ou mixez selon la texture souhaitée, sucrez à votre goût et laissez refroidir.",
        ],
      },
      assemble: {
        title: "Garnir et dorer la tarte",
        instructions: [
          "Étalez la compote sur le fond de tarte. Coupez les pommes Golden en fines lamelles et disposez-les sur la compote.",
          "Mélangez le jaune restant avec 15 g d’eau (1 c. à soupe) et badigeonnez-en les lamelles de pomme.",
        ],
      },
      bake: {
        title: "Terminer la cuisson",
        timing: "180 °C · environ 30 min",
        instructions: [
          "Enfournez à 180 °C pendant environ 30 minutes, jusqu’à ce que la pâte soit dorée et les lamelles de pomme tendres. Laissez refroidir la tarte avant de la démouler.",
        ],
      },
    },
    notes: [
      "La cuisson finale suit la recette de tarte aux pommes et à la compote de Meilleur du Chef. Les notes d’origine précisent le temps de cuisson à blanc et s’arrêtent à l’étape de la dorure.",
    ],
    source: { label: "Meilleur du Chef – Temps de cuisson finale" },
  },

  "bavarois-aux-fraises": {
    title: "Strawberry bavarois",
    description: "A thin genoise topped with strawberry mousse and a strawberry coulis that sets overnight in the fridge.",
    times: [
      { label: "Baking the genoise", value: "18 min" },
      { label: "Chilling", value: "Overnight" },
    ],
    groupTitles: ["Genoise sponge", "Strawberry mousse", "Strawberry coulis"],
    ingredients: {
      "sponge-egg": { name: "egg", note: "without shell" },
      "sponge-flour": { name: "flour" },
      "sponge-sugar": { name: "sugar" },
      "sponge-fat": { name: "butter or oil", note: "for greasing the tin" },
      "sponge-salt": { name: "salt", note: "optional, up to 1 pinch" },
      "mousse-fruit": { name: "strawberries" },
      "mousse-sugar": { name: "granulated sugar" },
      "mousse-cream": { name: "full-fat whipping cream", note: "very cold, weighed" },
      "mousse-gelatin": { name: "200 Bloom powdered gelatine", note: "or 8 g of leaf gelatine of the same strength (about 4 leaves)" },
      "mousse-water": { name: "very cold water", note: "for the powdered gelatine" },
      "topping-fruit": { name: "strawberries" },
      "topping-sugar": { name: "granulated sugar", note: "adjust to suit the strawberries" },
      "topping-gelatin": { name: "200 Bloom powdered gelatine", note: "or 3 g of leaf gelatine of the same strength (about 1½ leaves)" },
      "topping-water": { name: "very cold water", note: "for the powdered gelatine" },
    },
    steps: {
      bloom: {
        title: "Bloom both portions of gelatine",
        timing: "At least 20 min",
        instructions: [
          "In separate bowls, mix 8 g of powdered gelatine with 40 g of water and 3 g of powdered gelatine with 15 g of water. Leave to bloom for at least 20 minutes.",
          "If using leaves, soak 8 g (about 4 leaves) and 3 g (about 1½ leaves) separately in two bowls of very cold water. Squeeze them out before adding them.",
        ],
        timerLabels: ["Bloom the gelatine"],
      },
      sponge: {
        title: "Bake the sponge",
        timing: "160 °C fan · about 18 min",
        instructions: [
          "Whisk the egg and sugar for about 10 minutes, then fold in the sifted flour and the salt, if using, with a spatula. Pour into a greased 18 cm tin.",
          "Bake for about 18 minutes at 160 °C fan. Cool on a rack before cutting out a 16 cm disc.",
        ],
        timerLabels: ["Bake the sponge"],
      },
      mousse: {
        title: "Prepare the mousse",
        instructions: [
          "Blend the 350 g of strawberries with the 75 g of sugar. Heat until it just comes to the boil. Remove from the heat, add the larger portion of gelatine and stir until it dissolves.",
          "Pour into a wide dish and let cool to room temperature. Whip the cold cream, gradually increasing the speed, then fold in the purée with a spatula.",
        ],
        tip: "On a 25 cm plate, the purée can cool in about 40 minutes.",
      },
      "set-mousse": {
        title: "Assemble and chill the mousse",
        timing: "Chill · 2 hr 30 min to 3 hr",
        instructions: [
          "Stretch cling film tightly across the base of an 18 cm cake ring and place it on a flat surface. Line the sides with acetate if you have it.",
          "Centre the 16 cm sponge disc inside the ring. Pour in the mousse, leaving about 3 mm at the top for the coulis. Refrigerate until the surface is firm, 2 hours 30 minutes to 3 hours.",
        ],
        tip: "Serve any leftover mousse in a small glass with the sponge trimmings.",
        timerLabels: ["Check whether the mousse has set"],
      },
      coulis: {
        title: "Prepare and add the coulis",
        instructions: [
          "Blend the 150 g of strawberries with the 20 g of sugar and bring to the boil. Take off the heat, stir in the smaller portion of gelatine until it dissolves and leave to cool to room temperature.",
          "Once the mousse is set, gently pour the cooled coulis into the centre and let it spread to the edges.",
        ],
      },
      serve: {
        title: "Chill overnight and unmould",
        timing: "Overnight in the fridge",
        instructions: [
          "Cover the bavarois with a cake dome or an overturned bowl and refrigerate overnight. Remove the cling film from underneath, lift off the ring and peel away the acetate.",
        ],
      },
    },
    source: {
      credit: "Method adapted from",
      label: "C’est ma fournée ! – Strawberry bavarois",
    },
  },
};
