export default {
  "pate-brisee": {
    restTime: "Chill until needed. Can be made the day before.",
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
    allergens: ["Wheat (gluten)", "Egg", "Milk"],
    steps: {
      "rub-in": {
        title: "Rub in the butter",
        instructions: ["Put the flour, salt and butter pieces in a bowl."],
        options: [
          {
            title: "By hand",
            instructions: ["Rub the mixture between your fingertips until it feels like coarse sand."],
          },
          {
            title: "Stand mixer",
            instructions: [
              "Work the mixture with the paddle attachment until it resembles coarse sand.",
            ],
          },
        ],
      },
      form: {
        title: "Bring the dough together",
        instructions: [
          "Mix in the yolk.",
          "Add the water a little at a time, just until the dough holds together without crumbling.",
        ],
      },
      fraise: {
        title: "Smooth out the butter",
        instructions: [
          "Turn the dough onto the work surface.",
          "Press it away from you briefly with the heel of your hand to flatten any visible butter pieces.",
          "Gather the dough with a scraper or spatula.",
        ],
      },
      rest: {
        title: "Chill the pastry",
        wait: "Until needed",
        instructions: ["Wrap the dough.", "Refrigerate it until needed."],
        tip: "You can prepare the pastry several hours ahead or the day before.",
      },
    },
    notes: [
      "Stop mixing as soon as the dough holds together. Add the water gradually so you can judge when it has enough.",
    ],
    storage: {
      fridge: "Keep wrapped for several hours or overnight before using.",
    },
    source: {
      credit: "Technique from",
      label: "Meilleur du Chef – Shortcrust pastry",
    },
  },

  genoise: {
    restTime: "Cool on a rack before filling",
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
    allergens: ["Wheat (gluten)", "Egg", "Milk (if using butter)"],
    setup: ["Use a 20 cm tin. Preheat the oven to 180 °C."],
    steps: {
      prepare: {
        title: "Prepare the tin",
        instructions: ["Preheat the oven to 180 °C."],
        options: [
          {
            title: "Grease and flour",
            instructions: [
              "Grease the 20 cm tin with butter or oil.",
              "Dust the greased tin with the 5 g of flour set aside for it.",
            ],
          },
          {
            title: "Baking parchment",
            instructions: ["Line the base and sides of the 20 cm tin with baking parchment."],
          },
        ],
      },
      whip: {
        title: "Whip the egg and sugar",
        instructions: [
          "Whisk the egg and sugar for 10 minutes, until creamy and tripled in volume.",
        ],
        timerLabels: ["Whisk the egg and sugar"],
      },
      fold: {
        title: "Fold in the flour",
        instructions: [
          "Sift the flour with the salt, if using.",
          "Fold it gently into the whipped egg with a spatula.",
          "Pour the batter into the prepared tin.",
        ],
      },
      bake: {
        title: "Bake the sponge",
        heat: "180 °C",
        instructions: ["Bake at 180 °C for 25 minutes."],
        timerLabels: ["Bake the genoise"],
      },
      cool: {
        title: "Cool on a rack",
        wait: "Until cool",
        instructions: [
          "Turn the sponge out onto a wire rack.",
          "Leave it to cool before filling or decorating.",
        ],
      },
    },
    notes: ["Keep the air in the eggs by folding the flour in gently with a spatula."],
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
    allergens: ["Wheat (gluten)", "Egg", "Milk"],
    steps: {
      "heat-milk": {
        title: "Bring the milk to the boil",
        heat: "Hob · bring to the boil",
        instructions: ["Bring the milk to the boil in a saucepan."],
        tip: "Whisk the yolks while the milk heats.",
      },
      whisk: {
        title: "Whisk the yolks",
        instructions: [
          "Whisk the yolks with the sugar.",
          "Add the flour and cornflour together.",
          "Whisk until smooth.",
        ],
      },
      temper: {
        title: "Temper the yolks",
        heat: "Off the heat",
        instructions: [
          "Whisk about 83 g of the boiling milk (one third) into the yolk mixture in a steady stream.",
          "Pour the mixture back into the pan with the remaining milk.",
        ],
      },
      thicken: {
        title: "Thicken the custard",
        heat: "Low heat",
        instructions: [
          "Return the pan to a low heat.",
          "Stir continuously until the custard thickens and large bubbles rise through it.",
        ],
      },
      cool: {
        title: "Cool the custard",
        heat: "Off the heat",
        instructions: [
          "Transfer the custard to a stainless steel bowl or a tray to stop the cooking.",
          "Press cling film directly against the surface if preparing ahead.",
          "Refrigerate the covered custard if preparing ahead.",
        ],
      },
    },
    source: { label: "Author’s cookbook notes" },
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
    yield: "Pour glacer 12 cupcakes ou 1 gâteau à étages",
    totalTime: "Environ 15 min",
    allergens: ["Lait"],
    steps: {
      "beat-butter": {
        title: "Fouetter le beurre",
        instructions: ["Fouettez le beurre ramolli jusqu’à ce qu’il soit lisse et pâle."],
      },
      "add-sugar": {
        title: "Incorporer le sucre glace",
        instructions: [
          "Incorporez le sucre glace tamisé en plusieurs fois, en fouettant.",
          "Raclez les parois du bol entre les ajouts.",
        ],
      },
      adjust: {
        title: "Ajuster la consistance",
        instructions: [
          "Incorporez le liquide en fouettant, environ 15 g (1 c. à soupe) à la fois, jusqu’à ce que la crème soit lisse et assez souple pour être étalée ou dressée à la poche.",
        ],
      },
    },
    notes: [
      "Dosez le liquide cuillerée par cuillerée. Arrêtez dès que la crème se travaille à la poche ou à la spatule.",
      {
        text: "Le rendement et le temps de préparation proviennent de la fiche de Cupcake Jemma.",
        source: {
          url: "https://cupcakejemma.com/products/classic-american-buttercream-recipe",
          label: "Crème au beurre américaine",
        },
      },
    ],
    source: { label: "Cupcake Jemma – Cours de crème au beurre" },
  },

  "tarte-aux-pommes": {
    cookingTime: "Environ 45 min au four, plus la cuisson de la compote",
    restTime: "Pâte à réfrigérer, compote et tarte cuite à laisser refroidir",
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
    allergens: ["Blé (gluten)", "Œuf", "Lait"],
    setup: [
      "Utilisez un moule à tarte. Préchauffez le four à 180 °C avant la cuisson à blanc.",
    ],
    steps: {
      "make-pastry": {
        title: "Préparer la pâte brisée",
        instructions: [
          "Sablez le beurre avec la farine et le sel.",
          "Incorporez le jaune.",
          "Ajoutez l’eau peu à peu jusqu’à ce que la pâte se rassemble.",
        ],
      },
      "chill-dough": {
        title: "Faire reposer la pâte",
        wait: "Au frais avant de l’étaler",
        instructions: ["Enveloppez la pâte.", "Réfrigérez-la avant de l’étaler."],
      },
      roll: {
        title: "Étaler la pâte",
        instructions: [
          "Étalez la pâte reposée en un disque mince sur le plan de travail légèrement fariné.",
        ],
      },
      line: {
        title: "Foncer le moule",
        instructions: ["Foncez le fond et les bords du moule à tarte avec la pâte."],
      },
      "weight-shell": {
        title: "Lester le fond de tarte",
        instructions: [
          "Préchauffez le four à 180 °C.",
          "Recouvrez la pâte de papier cuisson.",
          "Remplissez le fond de tarte de billes de cuisson.",
        ],
      },
      "blind-bake": {
        title: "Cuire le fond à blanc",
        heat: "180 °C",
        instructions: [
          "Enfournez le fond lesté à 180 °C pour 15 minutes.",
          "Retirez ensemble le papier et les billes.",
        ],
        timerLabels: ["Cuire le fond de tarte à blanc"],
      },
      compote: {
        title: "Cuire les pommes",
        heat: "Sur le feu",
        instructions: [
          "Réunissez les morceaux de pomme à cuire, l’eau, la cannelle et le jus de citron dans une casserole.",
          "Faites cuire jusqu’à ce que les pommes soient tendres.",
        ],
      },
      texture: {
        title: "Choisir la texture de la compote",
        heat: "Hors du feu",
        instructions: ["Retirez le bâton de cannelle si vous en avez utilisé un."],
        options: [
          {
            title: "Avec des morceaux",
            instructions: ["Écrasez les pommes en gardant quelques morceaux."],
          },
          {
            title: "Lisse",
            instructions: ["Mixez les pommes en purée lisse."],
          },
        ],
      },
      "cool-compote": {
        title: "Refroidir la compote",
        wait: "Jusqu’à refroidissement",
        instructions: [
          "Sucrez à votre goût si nécessaire.",
          "Laissez refroidir la compote avant de garnir le fond de tarte.",
        ],
      },
      assemble: {
        title: "Garnir le fond de tarte",
        instructions: ["Étalez la compote refroidie en couche régulière sur le fond de tarte."],
      },
      arrange: {
        title: "Disposer les lamelles de pomme",
        instructions: [
          "Coupez les pommes Golden en fines lamelles.",
          "Disposez les lamelles sur la compote en les faisant se chevaucher.",
        ],
      },
      glaze: {
        title: "Dorer les pommes",
        instructions: [
          "Mélangez le jaune restant avec 15 g d’eau (1 c. à soupe).",
          "Badigeonnez légèrement les lamelles de pomme de dorure.",
        ],
      },
      bake: {
        title: "Cuire la tarte",
        timing: "Environ 30 min",
        heat: "180 °C",
        instructions: [
          "Enfournez à 180 °C pour environ 30 minutes, jusqu’à ce que la pâte soit dorée et les pommes tendres.",
        ],
      },
      cool: {
        title: "Refroidir avant de démouler",
        wait: "Jusqu’à refroidissement",
        instructions: ["Laissez refroidir la tarte dans son moule.", "Démoulez la tarte refroidie."],
      },
    },
    notes: [
      "La cuisson finale suit la recette de tarte aux pommes et à la compote de Meilleur du Chef. Les notes d’origine précisent le temps de cuisson à blanc et s’arrêtent à l’étape de la dorure.",
    ],
    source: { label: "Meilleur du Chef – Temps de cuisson finale" },
  },

  "bavarois-aux-fraises": {
    totalTime: "Prepare the day before serving",
    cookingTime: "About 18 min for the sponge, plus heating the two fruit mixtures",
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
    yield: "One 18 cm bavarois (6–8 portions)",
    restTime: "2½–3 h for the mousse, then overnight, plus cooling",
    allergens: ["Wheat (gluten)", "Egg", "Milk", "Fish (if using fish gelatine)"],
    setup: [
      "Bake in an 18 cm tin. Cut a 16 cm sponge disc and assemble in a ring 18 cm across and 4.5 cm high.",
      "Preheat the fan oven to 160 °C before baking.",
    ],
    steps: {
      bloom: {
        title: "Hydrate the gelatine",
        wait: "At least 20 min in cold water",
        instructions: [
          "Keep the 8 g mousse portion separate from the 3 g coulis portion.",
          "Allow at least 20 minutes from the moment both portions are in cold water.",
        ],
        options: [
          {
            title: "Powdered gelatine",
            instructions: [
              "Mix 8 g of powder with 40 g of very cold water in one bowl.",
              "Mix 3 g of powder with 15 g of very cold water in another bowl.",
            ],
          },
          {
            title: "Leaf gelatine",
            instructions: [
              "Soak 8 g of leaves (about 4 leaves) in a bowl of very cold water.",
              "Soak 3 g of leaves (about 1½ leaves) in a second bowl of very cold water.",
              "Squeeze out each portion just before adding it to the hot fruit.",
            ],
          },
        ],
        timerLabels: ["Check the hydrated gelatine"],
      },
      "make-sponge": {
        title: "Mix the sponge batter",
        timing: "Whisk for about 10 min",
        instructions: [
          "Preheat the fan oven to 160 °C.",
          "Grease an 18 cm tin.",
          "Whisk the egg and sugar for about 10 minutes.",
          "Sift the flour with the salt, if using.",
          "Fold the flour into the whipped egg with a spatula.",
          "Pour the batter into the tin.",
        ],
      },
      sponge: {
        title: "Bake the sponge",
        timing: "About 18 min",
        heat: "160 °C fan",
        instructions: ["Bake the sponge for about 18 minutes at 160 °C fan."],
        timerLabels: ["Bake the sponge"],
      },
      "cut-sponge": {
        title: "Cool and cut the sponge disc",
        wait: "Until cool before cutting",
        instructions: ["Cool the sponge on a wire rack.", "Cut a 16 cm disc from the cooled sponge."],
      },
      "heat-mousse-fruit": {
        title: "Heat the mousse purée",
        heat: "Hob · first boil",
        instructions: [
          "Blend 350 g of strawberries with 75 g of sugar.",
          "Heat the purée in a saucepan until it just comes to the boil.",
        ],
      },
      "dissolve-mousse": {
        title: "Dissolve the mousse gelatine",
        heat: "Off the heat",
        instructions: [
          "Take the pan off the heat.",
          "Add the larger portion of hydrated gelatine to the hot purée.",
          "Stir until dissolved.",
        ],
      },
      "cool-puree": {
        title: "Cool the purée",
        timing: "About 40 min on a 25 cm plate",
        wait: "Until at room temperature",
        instructions: [
          "Pour the purée into a wide dish.",
          "Leave it to cool to room temperature before folding it into the cream.",
        ],
      },
      mousse: {
        title: "Fold the mousse",
        instructions: [
          "Whip the cold cream, gradually increasing the speed.",
          "Fold the room-temperature purée into the whipped cream with a spatula.",
        ],
      },
      "set-mousse": {
        title: "Assemble the mousse layer",
        instructions: [
          "Stretch cling film tightly across the base of an 18 cm cake ring.",
          "Set the ring on a flat surface.",
          "Line the sides with acetate if available.",
          "Centre the 16 cm sponge disc inside the ring.",
          "Pour in the mousse, leaving about 3 mm at the top for the coulis.",
        ],
        tip: "Serve any leftover mousse in a small glass with the sponge trimmings.",
      },
      "chill-mousse": {
        title: "Chill until the mousse sets",
        wait: "In the fridge · until firm",
        instructions: [
          "Refrigerate for 2½–3 hours, until the surface is firm enough to support the coulis.",
        ],
        tip: "Make and cool the coulis while the mousse sets. Wait until the surface is firm before pouring it on.",
        timerLabels: ["Check whether the mousse has set"],
      },
      "heat-coulis": {
        title: "Heat the coulis",
        heat: "Hob · bring to the boil",
        instructions: [
          "Blend the remaining 150 g of strawberries with the 20 g of sugar for the coulis.",
          "Bring the purée to the boil.",
        ],
      },
      "dissolve-coulis": {
        title: "Dissolve the coulis gelatine",
        heat: "Off the heat",
        wait: "Until at room temperature",
        instructions: [
          "Take the purée off the heat.",
          "Stir the smaller portion of hydrated gelatine into the hot purée until dissolved.",
          "Let the coulis cool to room temperature.",
        ],
      },
      coulis: {
        title: "Top the set mousse",
        instructions: [
          "Pour the room-temperature coulis gently into the centre of the firm mousse.",
          "Let it spread to the edges.",
        ],
      },
      "rest-overnight": {
        title: "Refrigerate overnight",
        wait: "Overnight in the fridge",
        instructions: [
          "Cover the bavarois with a cake dome or an overturned bowl.",
          "Refrigerate overnight before unmoulding.",
        ],
      },
      serve: {
        title: "Unmould the bavarois",
        instructions: [
          "Remove the film from underneath the ring.",
          "Lift off the ring.",
          "Peel away the acetate if used.",
        ],
      },
    },
    storage: {
      fridge: "Keep covered overnight before serving the next day.",
    },
    source: {
      credit: "Method adapted from",
      label: "C’est ma fournée ! – Strawberry bavarois",
    },
  },
};
