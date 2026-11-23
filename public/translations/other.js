export default {
  "lemon-meringue-pie": {
    totalTime: "Environ 3 h 30 à 5 h 20 en travaillant étape par étape",
    title: "Tarte au citron meringuée",
    description: "Une pâte brisée au beurre garnie d’une crème au citron cuite au four et de volutes de meringue suisse dorée.",
    image: {
      alt: "Illustration d’une tarte au citron meringuée sur une assiette bleue, avec une part avancée pour montrer la garniture.",
    },
    times: [
      { label: "Préparation", value: "40 min" },
      { label: "Cuisson", value: "51–67 min" },
      { label: "Repos et réfrigération", value: "2 h à 3 h 30" },
    ],
    batchTins: ["un moule de 16 cm", "un moule de 23 cm", "deux moules de 20 cm", "deux moules de 23 cm"],
    groupTitles: ["Pâte brisée", "Crème au citron", "Meringue suisse"],
    ingredients: {
      flour: { name: "de farine de blé" },
      "pastry-butter": { name: "de beurre doux", note: "froid, coupé en dés" },
      "pastry-sugar": { name: "de sucre en poudre" },
      "pastry-yolk": { name: "de jaune d’œuf", eggName: "gros jaune", eggPlural: "gros jaunes" },
      "pastry-water": { name: "d’eau froide" },
      "filling-eggs": { name: "d’œufs entiers battus", eggName: "œuf", eggPlural: "œufs" },
      "filling-yolk": { name: "de jaune d’œuf", eggName: "gros jaune", eggPlural: "gros jaunes" },
      "filling-sugar": { name: "de sucre en poudre" },
      "filling-juice": { name: "de jus de citron frais", note: "filtré, environ 4 citrons" },
      "filling-zest": { name: "de zeste de citron finement râpé", unit: "citrons", note: "partie jaune seulement" },
      "filling-butter": { name: "de beurre salé", note: "fondu puis laissé tiédir" },
      "filling-cornflour": { name: "de fécule de maïs", note: "amidon de maïs" },
      white: { name: "de blancs d’œufs", eggName: "blanc", eggPlural: "blancs" },
      "meringue-sugar": { name: "de sucre en poudre" },
    },
    ingredientTip: "Réservez les blancs des jaunes utilisés pour la pâte et la crème, puis complétez jusqu’au poids indiqué pour la meringue. Pesez les œufs sans leur coquille. Si vous utilisez des blancs en brique, choisissez-en qui peuvent être montés en neige.",
    setup: [
      "Utilisez {tins}, à fond amovible et d’environ 2,5 cm de profondeur.",
      "Préchauffez le four à 200 °C en chaleur statique (180 °C en chaleur tournante / 400 °F) avec une plaque à l’intérieur.",
    ],
    allergens: ["Blé", "Œuf", "Lait"],
    storage: {
      counter: "Réfrigérez dans les 2 heures suivant la cuisson de la crème.",
      fridge: "Conservez au réfrigérateur. Servez dans les 24 heures pour une texture optimale.",
    },
    steps: {
      "rub-pastry": {
        title: "Sabler le beurre",
        instructions: [
          "Sablez le beurre froid avec la farine et le sucre jusqu’à obtenir la texture d’une chapelure.",
          "Ajoutez le jaune d’œuf et l’eau froide.",
          "Rassemblez délicatement la pâte.",
        ],
      },
      pastry: {
        title: "Foncer le moule",
        tip: "Réparez les fissures avec un peu de pâte restante.",
        instructions: [
          "Étalez la pâte entre deux feuilles de papier cuisson sur environ 3 mm d’épaisseur.",
          "Foncez {tins} avec la pâte, en utilisant des moules à fond amovible d’environ 2,5 cm de profondeur.",
          "Arasez les bords.",
          "Piquez le fond à la fourchette.",
        ],
      },
      "chill-pastry": {
        title: "Réfrigérer le fond de tarte",
        wait: "30 min au réfrigérateur",
        instructions: [
          "Réfrigérez le fond de tarte pendant 30 minutes avant la cuisson à blanc.",
          "Préchauffez le four à 200 °C en chaleur statique (180 °C en chaleur tournante / 400 °F) avec une plaque à l’intérieur pendant le repos de la pâte.",
        ],
        timerLabels: ["Réfrigérer la pâte"],
      },
      "blind-bake": {
        title: "Cuire le fond à blanc",
        heat: "200 °C statique / 180 °C chaleur tournante (400 °F)",
        instructions: [
          "Tapissez la pâte froide de papier cuisson.",
          "Remplissez de billes de cuisson jusqu’au bord.",
          "Posez le moule sur la plaque chaude.",
          "Enfournez pour 15 minutes avant de retirer les billes.",
          "Retirez ensemble le papier et les billes.",
          "Poursuivez la cuisson à découvert 5 à 8 minutes, jusqu’à ce que le fond soit sec et doré.",
        ],
        timerLabels: ["Cuire avec les billes", "Terminer la cuisson sans les billes"],
      },
      "prep-lemons": {
        title: "Zester les citrons",
        instructions: ["Lavez les citrons.", "Séchez-les.", "Râpez finement la partie jaune de l’écorce uniquement."],
      },
      "juice-lemons": {
        title: "Filtrer le jus de citron",
        instructions: ["Pressez les citrons zestés.", "Filtrez le jus pour retirer les pépins.", "Pesez le jus nécessaire à la crème."],
      },
      "melt-butter": {
        title: "Faire fondre le beurre salé",
        instructions: ["Faites fondre le beurre salé de la crème."],
      },
      "mix-filling": {
        title: "Fouetter les œufs",
        timing: "Fouetter 30 à 45 s",
        wait: "Laisser tiédir le beurre fondu",
        instructions: [
          "Laissez tiédir le beurre fondu hors du feu.",
          "Mélangez le sucre et la fécule de maïs dans un saladier.",
          "Ajoutez les œufs entiers et le jaune supplémentaire.",
          "Fouettez doucement pendant 30 à 45 secondes jusqu’à obtenir un mélange lisse.",
        ],
      },
      "finish-filling": {
        title: "Terminer la crème au citron",
        tip: "Un geste léger évite la formation de bulles d’air.",
        instructions: [
          "Incorporez progressivement le jus de citron au fouet.",
          "Incorporez le zeste.",
          "Versez le beurre tiède en filet en fouettant doucement, juste assez pour obtenir une crème liquide homogène.",
        ],
      },
      "fill-shell": {
        title: "Garnir le fond encore chaud",
        instructions: [
          "Baissez le four à 150 °C en chaleur tournante.",
          "Posez le fond de tarte cuit encore chaud sur une plaque.",
          "Versez la crème dans le fond de tarte en vous arrêtant juste sous le bord.",
        ],
      },
      "bake-filling": {
        title: "Cuire la crème au citron",
        timing: "Première vérification à 25 min, prévoir 25 à 35 min au total",
        heat: "150 °C chaleur tournante",
        instructions: ["Enfournez à mi-hauteur à 150 °C en chaleur tournante pour 25 minutes avant la première vérification."],
        timerLabels: ["Vérifier la cuisson de la crème"],
      },
      "check-filling": {
        title: "Vérifier le centre",
        timing: "Si nécessaire, 3 à 5 min entre les vérifications",
        heat: "150 °C chaleur tournante",
        tip: "Vérifiez chaque tarte séparément. Protégez les bords de pâte avec du papier aluminium s’ils commencent à brunir.",
        instructions: [
          "Secouez doucement la plaque pour vérifier que les bords sont pris et que le centre tremble légèrement comme une gelée.",
          "Vérifiez au thermomètre de cuisine que le centre atteint au moins 75 °C (167 °F).",
          "Prolongez la cuisson de 3 à 5 minutes si le centre est encore liquide ou en dessous de 75 °C.",
          "Vérifiez de nouveau la texture et la température avant de sortir la tarte.",
        ],
        timerLabels: ["Vérifier à nouveau après la cuisson supplémentaire"],
      },
      "cool-filling": {
        title: "Laisser refroidir la tarte",
        wait: "Sur une grille jusqu’à température ambiante",
        instructions: [
          "Laissez la tarte dans son moule sur une grille pendant 30 à 60 minutes, jusqu’à ce que la crème soit prise et à température ambiante.",
          "Commencez la meringue lorsque la tarte est prête à garnir.",
        ],
        timerLabels: ["Vérifier que la tarte a refroidi"],
      },
      meringue: {
        title: "Chauffer les blancs et le sucre",
        heat: "Bain-marie à peine frémissant",
        tip: "Remuez avant de vérifier la température. Évitez de toucher le bol avec la sonde.",
        instructions: [
          "Mélangez les blancs et le sucre dans un bol propre résistant à la chaleur.",
          "Placez le bol au-dessus d’une eau à peine frémissante, sans que le fond touche l’eau.",
          "Fouettez sans arrêt jusqu’à dissolution du sucre, environ 5 à 7 minutes.",
          "Vérifiez que tout le mélange atteint au moins 72 °C (162 °F) avant de le retirer du bain-marie.",
        ],
      },
      "whip-meringue": {
        title: "Monter la meringue",
        heat: "Hors du feu",
        instructions: [
          "Retirez le bol du bain-marie.",
          "Fouettez au batteur électrique 5 à 8 minutes, jusqu’à ce que la meringue soit brillante et forme des pics fermes.",
        ],
        timerLabels: ["Vérifier la tenue de la meringue"],
      },
      swirl: {
        title: "Former les pics de meringue",
        instructions: [
          "Déposez la meringue fraîchement montée sur la crème à température ambiante.",
          "Étalez-la jusqu’au bord de la pâte.",
          "Soulevez la cuillère par endroits pour former des pics.",
        ],
      },
      brown: {
        title: "Dorer la meringue",
        tip: "Le gril et le chalumeau dorent seulement la surface. Vérifiez la température des blancs pendant le chauffage au bain-marie.",
        options: [
          {
            title: "Gril du four",
            heat: "Gril chaud préchauffé",
            wait: "Surveiller en continu, généralement 1 à 2 min",
            instructions: [
              "Placez la tarte à environ 15 cm sous la résistance chaude.",
              "Surveillez-la sans interruption.",
              "Tournez le moule si nécessaire.",
              "Sortez la tarte dès que les pointes sont dorées, généralement au bout de 1 à 2 minutes.",
            ],
          },
          {
            title: "Chalumeau de cuisine",
            heat: "Chalumeau de cuisine",
            wait: "Jusqu’à ce que les pointes soient dorées",
            instructions: [
              "Placez la tarte sur une surface résistante à la chaleur.",
              "Tenez le chalumeau à environ 15 cm des pics.",
              "Balayez les pics avec la flamme sans l’immobiliser, jusqu’à ce que les pointes soient dorées.",
            ],
          },
        ],
        instructions: ["Dorez les pointes selon l’une des méthodes suivantes."],
      },
      chill: {
        title: "Réfrigérer la tarte garnie",
        wait: "1 à 2 h au réfrigérateur",
        instructions: [
          "Réfrigérez la tarte garnie dans les 2 heures suivant la cuisson de la crème.",
          "Laissez-la au réfrigérateur 1 à 2 heures avant de servir.",
        ],
        timerLabels: ["Vérifier que la tarte est froide"],
      },
      serve: {
        title: "Découper la tarte froide",
        tip: "Essuyez la lame entre les parts pour obtenir des couches bien nettes.",
        instructions: ["Démoulez la tarte froide.", "Découpez-la verticalement avec un couteau bien aiguisé."],
      },
    },
    nutrition: {
      yieldAssumptions: "Le poids final estimé de 1 150 g suppose une perte d’environ 90 g, due à la pâte retirée des bords et à l’humidité perdue pendant la cuisson, le chauffage et le refroidissement. Pesez la tarte froide pour connaître son poids réel.",
      dataAssumptions: "Le calcul suppose que la perte de poids correspond principalement à de l’eau et que les nutriments des ingrédients sont conservés. Les valeurs du blanc d’œuf cru servent à estimer celles du blanc pasteurisé. Les valeurs de l’écorce de citron crue servent à estimer celles du zeste, après déduction des fibres des glucides totaux. Pour le jus de citron frais, les fibres NSP de la base CoFID remplacent la valeur AOAC indisponible. Le volume de jus de citron est converti en poids à partir des données de l’USDA. Le poids du zeste correspond à une estimation pour trois citrons moyens. Les traces signalées dans CoFID et les nutriments de l’eau du robinet sont comptés comme nuls.",
    },
    source: {
      credit: "Pâte brisée adaptée de",
      label: "la tarte au citron meringuée d’Angela Nilsen, publiée dans Good Food",
    },
  },
  "panna-cotta": {
    restTime: "Trempage selon le paquet, refroidissement puis environ 4 h au frais",
    title: "Panna cotta à la vanille",
    description: "Une panna cotta au lait et à la crème, prise avec de la gélatine en feuille.",
    times: [{ label: "Réfrigération", value: "4 h" }],
    groupTitles: ["Panna cotta"],
    ingredients: {
      cream: { name: "de crème liquide entière" },
      milk: { name: "de lait" },
      gelatine: { name: "de gélatine en feuille", unit: "feuille", note: "environ 2 g pour une feuille de qualité or. Vérifiez les indications du paquet pour votre type de gélatine" },
      vanilla: { name: "d’extrait de vanille", note: "quantité indicative. La recette d’origine ne précise pas de quantité" },
    },
    setup: ["Prévoyez une petite casserole et des ramequins individuels."],
    allergens: [
      "Lait",
      "Poisson si la gélatine est à base de poisson (vérifiez l’étiquette)",
    ],
    steps: {
      soak: {
        title: "Faire tremper la gélatine",
        wait: "Selon la durée indiquée sur le paquet",
        instructions: ["Faites tremper la feuille de gélatine dans de l’eau froide pendant la durée indiquée sur le paquet."],
        tip: "Faites chauffer la crème pendant que la gélatine ramollit.",
      },
      heat: {
        title: "Chauffer la crème",
        heat: "Jusqu’au début de l’ébullition",
        instructions: [
          "Versez la crème, le lait et la vanille dans une petite casserole.",
          "Portez le mélange tout juste à ébullition.",
        ],
      },
      dissolve: {
        title: "Dissoudre la gélatine",
        heat: "Hors du feu",
        instructions: [
          "Retirez la casserole du feu.",
          "Essorez la gélatine ramollie.",
          "Incorporez la gélatine à la crème chaude en remuant jusqu’à dissolution complète.",
        ],
      },
      cool: {
        title: "Laisser refroidir la crème en ramequins",
        wait: "Jusqu’à refroidissement",
        instructions: [
          "Versez la crème dans des ramequins.",
          "Laissez refroidir les ramequins avant de les réfrigérer.",
        ],
      },
      set: {
        title: "Laisser prendre au réfrigérateur",
        timing: "Environ 4 h",
        wait: "Jusqu’à la prise",
        instructions: ["Réfrigérez les ramequins refroidis pendant environ 4 heures, jusqu’à ce que la panna cotta soit prise."],
        timerLabels: ["Vérifier la prise"],
      },
    },
    notes: ["Le pouvoir gélifiant des feuilles varie selon la marque. Vérifiez sur le paquet la quantité conseillée pour 245 g de liquide."],
  },
  "creme-brulee": {
    restTime: "Laisser refroidir, puis réfrigérer quelques heures",
    title: "Crème brûlée",
    description: "Une petite quantité de crème aux œufs cuite doucement à la vapeur.",
    times: [{ label: "Four vapeur", value: "Environ 1 h 45 au four vapeur" }, { label: "Réfrigération", value: "Quelques heures" }],
    groupTitles: ["Crème aux œufs", "Croûte de sucre facultative"],
    ingredients: {
      cream: { name: "de crème liquide entière" },
      milk: { name: "de lait" },
      yolk: { name: "jaune d’œuf" },
      white: { name: "de blanc d’œuf" },
      sugar: { name: "de sucre" },
      vanilla: { name: "d’extrait de vanille", note: "quantité indicative. La recette d’origine ne précise pas de quantité" },
      "topping-sugar": { name: "de sucre", note: "pour caraméliser, facultatif. La recette d’origine ne précise pas de quantité" },
    },
    setup: ["Utilisez de petits ramequins allant au four. Réglez le four vapeur à 100 °C et à 100 % d’humidité."],
    allergens: ["Lait", "Œuf"],
    steps: {
      mix: {
        title: "Préparer la crème",
        instructions: [
          "Mélangez le lait, la crème et la vanille.",
          "Incorporez le sucre en remuant.",
          "Incorporez délicatement le jaune et la quantité de blanc indiquée au fouet.",
          "Versez la crème dans de petits ramequins allant au four.",
        ],
      },
      bake: {
        title: "Cuire les crèmes",
        timing: "Environ 1 h 45 au four vapeur",
        instructions: ["Choisissez la méthode adaptée à votre four."],
        options: [
          {
            title: "Four vapeur",
            heat: "100 °C · 100 % d’humidité",
            wait: "Environ 1 h 45",
            instructions: [
              "Réglez le four vapeur à 100 °C et à 100 % d’humidité.",
              "Faites cuire les ramequins environ 1 heure 45, jusqu’à ce que les bords soient pris et le centre encore légèrement tremblotant.",
            ],
            timers: [{ label: "Vérifier les crèmes au four vapeur", minutes: 105, afterInstruction: 2 }],
          },
          {
            title: "Four traditionnel",
            heat: "Vapeur d’un plat d’eau",
            instructions: [
              "Placez un plat peu profond rempli d’eau sur une grille inférieure, comme le suggèrent les notes de cuisine.",
              "Faites cuire les crèmes jusqu’à ce que les bords soient pris et le centre encore légèrement tremblotant. Les notes de cuisine ne donnent ni température ni durée vérifiées pour ce mode de cuisson.",
            ],
          },
        ],
      },
      cool: {
        title: "Laisser refroidir les crèmes cuites",
        wait: "Jusqu’à refroidissement",
        instructions: [
          "Sortez les ramequins du four.",
          "Laissez refroidir les ramequins avant de les réfrigérer.",
        ],
      },
      chill: {
        title: "Réfrigérer les crèmes",
        wait: "Quelques heures, jusqu’à la prise",
        instructions: ["Réfrigérez les ramequins refroidis pendant quelques heures, jusqu’à ce que les crèmes soient bien prises."],
      },
      caramelise: {
        title: "Caraméliser le dessus (facultatif)",
        heat: "Chalumeau de cuisine",
        instructions: [
          "Saupoudrez la crème froide d’une fine couche de sucre juste avant de servir.",
          "Caramélisez le sucre au chalumeau de cuisine pour former une croûte craquante.",
        ],
      },
    },
  },
  lemonies: {
    totalTime: "25–30 min for prep and baking, plus cooling and setting the glaze",
    restTime: "Cool the cake, then let the glaze set",
    title: "Lemonies",
    description: "Soft lemon squares with a tangy lemon glaze.",
    times: [{ label: "Prep", value: "10 min" }, { label: "Bake", value: "15–20 min" }],
    groupTitles: ["Lemon batter", "Glaze"],
    ingredients: {
      eggs: { name: "eggs", note: "weighed without shells" },
      flour: { name: "flour" },
      "baking-powder": { name: "baking powder", quantity: "1 level tsp" },
      sugar: { name: "sugar" },
      "lemon-juice": { name: "lemon juice" },
      vanilla: { name: "liquid vanilla", quantity: "1 tsp" },
      butter: { name: "melted butter" },
      zest: { name: "unwaxed lemon zest", quantity: "zest of 1 lemon" },
      "icing-sugar": { name: "icing sugar" },
      "icing-juice": { name: "lemon juice" },
    },
    setup: ["Use an 18 cm square tin. Preheat the fan oven to 165°C."],
    allergens: [
      "Wheat (gluten)",
      "Egg",
      "Milk",
    ],
    steps: {
      prepare: {
        title: "Prepare the tin",
        instructions: [
          "Preheat the fan oven to 165°C.",
          "Grease an 18 cm square tin.",
          "Line the tin with baking parchment, leaving two tabs overhanging on opposite sides.",
        ],
      },
      mix: {
        title: "Mix the lemon batter",
        instructions: [
          "Whisk the melted butter with the sugar.",
          "Beat in the eggs one at a time.",
          "Add the lemon juice.",
          "Sift the flour and baking powder into the mixture.",
          "Add the zest and vanilla.",
          "Mix until the batter is smooth.",
          "Pour the batter into the prepared tin.",
        ],
      },
      bake: {
        title: "Bake the lemonies",
        heat: "165°C fan",
        instructions: [
          "Bake for 15–20 minutes, until the surface is lightly golden.",
          "Check the colour from 15 minutes for a soft texture.",
        ],
        timerLabels: ["Check the bake"],
      },
      cool: {
        title: "Cool the slab",
        wait: "Until cool",
        instructions: ["Leave the baked slab to cool in the tin before glazing."],
      },
      glaze: {
        title: "Glaze the cooled slab",
        instructions: [
          "Mix the icing sugar and lemon juice to make the glaze.",
          "Lift the cooled slab from the tin by the parchment tabs.",
          "Spread the glaze over the top with a spatula.",
        ],
        tip: "Decorate with a little lemon zest if you like.",
      },
      slice: {
        title: "Let the glaze set before slicing",
        wait: "Until the glaze sets",
        instructions: [
          "Let the glaze set.",
          "Cut the glazed slab into nine squares.",
        ],
      },
    },
    source: { credit: "Recipe adapted from" },
  },
  "berry-tiramisu": {
    totalTime: "Environ 4 h 10 pour 4 h de réfrigération",
    restTime: "10 min d’infusion, puis 2 à 4 h au frais",
    title: "Tiramisu aux fruits rouges",
    description: "Des couches de biscuits imbibés de sirop aux fruits rouges, de fruits frais et de crème fouettée au mascarpone.",
    times: [{ label: "Réfrigération", value: "2–4 h" }],
    groupTitles: ["Fruits rouges et sirop", "Crème au mascarpone", "Montage"],
    ingredients: {
      water: { name: "d’eau" },
      "syrup-sugar": { name: "de sucre en poudre" },
      strawberries: { name: "de fraises fraîches", note: "coupées en quartiers" },
      raspberries: { name: "de framboises fraîches" },
      blueberries: { name: "de myrtilles fraîches" },
      cassis: { name: "de crème de cassis", unit: "c. à soupe", note: "facultatif. Le poids varie selon la marque" },
      cream: { name: "de crème liquide entière" },
      "cream-sugar": { name: "de sucre en poudre" },
      vanilla: { name: "d’extrait de vanille", unit: "c. à café" },
      mascarpone: { name: "de mascarpone", note: "à température ambiante" },
      biscuits: { name: "de biscuits à la cuillère", unit: "paquet", note: "ou boudoirs (savoiardi). Le poids des paquets varie. Prévoyez environ 28 biscuits" },
      "icing-sugar": { name: "de sucre glace", note: "quantité indicative pour saupoudrer. La recette d’origine ne précise pas de quantité" },
      almonds: { name: "d’amandes effilées grillées", note: "quantité indicative pour la garniture. La recette d’origine ne précise pas de quantité" },
      "extra-berries": { name: "de fruits rouges supplémentaires", note: "quantité indicative pour la garniture. La recette d’origine ne précise pas de quantité" },
    },
    setup: ["Prévoyez un plat carré de 20 cm et environ 14 biscuits à la cuillère par couche."],
    allergens: [
      "Lait",
      "Blé (gluten) et œuf dans les biscuits à la cuillère (vérifiez l’étiquette)",
      "Amandes",
    ],
    storage: { fridge: "Couvrez les restes et conservez-les au réfrigérateur pendant un jour au maximum." },
    steps: {
      "heat-syrup": {
        title: "Dissoudre le sucre du sirop",
        instructions: [
          "Réunissez l’eau et le sucre du sirop dans une casserole.",
          "Faites chauffer jusqu’à dissolution du sucre.",
        ],
      },
      syrup: {
        title: "Faire infuser les fruits",
        heat: "Hors du feu",
        wait: "10 min",
        instructions: [
          "Retirez la casserole du feu.",
          "Ajoutez les fraises, les framboises et les myrtilles.",
          "Laissez infuser les fruits pendant 10 minutes.",
          "Égouttez les fruits au-dessus d’un bol pour récupérer le sirop.",
          "Incorporez la crème de cassis au sirop si vous en utilisez.",
        ],
        timerLabels: ["Égoutter les fruits"],
      },
      whip: {
        title: "Fouetter la crème au mascarpone",
        instructions: [
          "Fouettez la crème, le sucre et la vanille jusqu’à la formation de pics souples.",
          "Ajoutez le mascarpone.",
          "Fouettez juste assez pour que la crème forme des pics fermes.",
        ],
      },
      dip: {
        title: "Tapisser le plat de biscuits imbibés",
        instructions: [
          "Trempez brièvement la première moitié des biscuits dans le sirop, un par un.",
          "Disposez-les en une seule couche dans un plat carré de 20 cm.",
        ],
        tip: "La recette d’origine compte environ 14 biscuits par couche. Un trempage bref les garde entiers.",
      },
      layer: {
        title: "Monter les couches de fruits et de crème",
        instructions: [
          "Répartissez la moitié des fruits égouttés sur les biscuits.",
          "Recouvrez les fruits avec la moitié de la crème au mascarpone.",
          "Trempez brièvement le reste des biscuits dans le sirop.",
          "Disposez les biscuits imbibés sur la crème.",
          "Recouvrez les biscuits avec le reste des fruits.",
          "Étalez le reste de crème sur les fruits.",
        ],
      },
      chill: {
        title: "Réfrigérer le tiramisu",
        wait: "2–4 h",
        instructions: [
          "Couvrez le plat.",
          "Réfrigérez 2 à 4 heures avant de garnir.",
        ],
        timerLabels: ["Vérifier le tiramisu réfrigéré"],
      },
      garnish: {
        title: "Décorer juste avant de servir",
        instructions: [
          "Saupoudrez le tiramisu froid de sucre glace.",
          "Parsemez le dessus d’amandes grillées et de fruits rouges supplémentaires.",
        ],
      },
    },
    source: { credit: "Recette adaptée de", label: "Bigger Bolder Baking, par Gemma Stafford" },
  },
  waffles: {
    title: "Gaufres à la vanille",
    description: "Des gaufres dorées au sucre vanillé, préparées avec une pâte qui repose au frais.",
    times: [{ label: "Repos", value: "1 h" }, { label: "Cuisson", value: "3–5 min par gaufre" }],
    groupTitles: ["Pâte à gaufres"],
    ingredients: {
      flour: { name: "de farine de blé", note: "T45 à T55 si possible" },
      "baking-powder": { name: "de levure chimique" },
      "vanilla-sugar": { name: "de sucre vanillé" },
      salt: { name: "de sel" },
      eggs: { name: "d’œufs", note: "pesés sans coquille" },
      milk: { name: "de lait entier" },
      butter: { name: "de beurre fondu", note: "tiède" },
    },
    setup: [
      "Prévoyez un gaufrier. Vérifiez dans sa notice la quantité de pâte par gaufre.",
    ],
    allergens: ["Blé (gluten)", "Œufs", "Lait"],
    steps: {
      dry: {
        title: "Mélanger les ingrédients secs",
        instructions: [
          "Mélangez au fouet la farine, la levure chimique, le sucre vanillé et le sel.",
        ],
      },
      batter: {
        title: "Préparer la pâte",
        instructions: [],
        options: [
          {
            title: "Aux œufs entiers",
            instructions: [
              "Battez légèrement les œufs.",
              "Incorporez les œufs au fouet aux ingrédients secs.",
              "Incorporez progressivement le lait au fouet jusqu’à obtenir une pâte lisse.",
              "Incorporez le beurre fondu tiède.",
            ],
          },
          {
            title: "Aux blancs en neige pour des gaufres plus légères",
            instructions: [
              "Séparez les blancs des jaunes.",
              "Incorporez les jaunes au fouet aux ingrédients secs.",
              "Incorporez progressivement le lait au fouet jusqu’à obtenir une pâte lisse.",
              "Incorporez le beurre fondu tiède.",
              "Montez les blancs réservés en neige ferme.",
              "Incorporez délicatement les blancs à la pâte.",
            ],
          },
        ],
      },
      rest: {
        title: "Laisser reposer la pâte",
        instructions: [
          "Couvrez le bol.",
          "Réfrigérez pendant 1 heure, jusqu’à ce que la pâte ait légèrement épaissi.",
        ],
        wait: "1 h au réfrigérateur",
        timerLabels: ["Vérifier la pâte reposée"],
      },
      cook: {
        title: "Cuire les gaufres par fournées",
        instructions: [
          "Faites chauffer le gaufrier à puissance moyenne à forte.",
          "Versez dans le gaufrier la quantité de pâte indiquée dans la notice.",
          "Faites cuire 3 à 5 minutes, jusqu’à ce que la gaufre soit dorée.",
          "Retirez la gaufre cuite.",
          "Recommencez avec le reste de la pâte.",
        ],
        timing: "3 à 5 min par gaufre",
        heat: "Gaufrier à puissance moyenne à forte",
        timerLabels: ["Vérifier la gaufre"],
      },
    },
    notes: [
      "Pour des gaufres moins sucrées, réduisez le sucre vanillé à 30 g. Pour des gaufres salées, supprimez-le et ajoutez du fromage, des herbes ou des épices.",
      "Essayez d’ajouter de l’extrait de vanille, de la cannelle ou du zeste d’agrume. Les notes d’origine suggèrent aussi de remplacer la moitié du beurre par de l’huile neutre ou de la crème légère pour varier la texture.",
    ],
  },
  crepes: {
    title: "Crêpes",
    qualifier: "Recette préférée de la famille",
    description: "Des crêpes fines et moelleuses, préparées avec une pâte reposée et cuites dans une crêpière sans matière grasse ajoutée.",
    image: { alt: "Des crêpes dorées pliées en quatre sur une assiette, à côté de quartiers de citron." },
    restTime: "Au moins 20 min, idéalement 24 h",
    groupTitles: ["Pâte à crêpes"],
    ingredients: {
      flour: { name: "de farine de blé" },
      eggs: { name: "d’œufs", note: "pesés sans coquille" },
      milk: { name: "de lait", note: "quantité de départ, à ajuster selon la consistance" },
      butter: { name: "de beurre fondu", note: "tiède" },
    },
    setup: ["Utilisez une crêpière antiadhésive ou bien culottée, sans la graisser."],
    allergens: ["Blé (gluten)", "Œufs", "Lait"],
    steps: {
      sift: {
        title: "Tamiser la farine",
        instructions: ["Tamisez les 400 g de farine dans un grand saladier."],
      },
      "whisk-eggs": {
        title: "Incorporer les œufs au fouet",
        instructions: [
          "Creusez un puits au centre de la farine.",
          "Cassez les six œufs dans le puits.",
          "Fouettez en partant du centre pour incorporer la farine peu à peu.",
        ],
      },
      "add-milk": {
        title: "Délayer la pâte avec le lait",
        instructions: [
          "Incorporez progressivement 500 ml de lait au fouet jusqu’à obtenir une pâte lisse.",
          "Ajoutez un peu de lait à la fois en fouettant, jusqu’à ce que la pâte coule en un filet fin et continu et laisse une fine pellicule au dos d’une cuillère.",
        ],
      },
      "add-butter": {
        title: "Incorporer le beurre fondu",
        instructions: ["Incorporez le beurre fondu tiède au fouet jusqu’à ce que la pâte soit homogène."],
      },
      rest: {
        title: "Laisser reposer la pâte",
        instructions: [
          "Couvrez le saladier.",
          "Réfrigérez la pâte au moins 20 minutes, de préférence toute une nuit et idéalement 24 heures, avant de vérifier de nouveau sa consistance.",
        ],
        wait: "Au moins 20 min au réfrigérateur",
        timerLabels: ["Vérifier la pâte après le repos"],
      },
      spread: {
        title: "Répartir la pâte dans la crêpière",
        heat: "Feu moyen",
        instructions: [
          "Chauffez la crêpière à feu moyen sans la graisser.",
          "Versez une petite louche de pâte au centre.",
          "Inclinez aussitôt la crêpière pour étaler la pâte en une couche fine et régulière.",
        ],
      },
      cook: {
        title: "Cuire et retourner chaque crêpe",
        heat: "Feu moyen",
        instructions: [
          "Cuisez la première face jusqu’à ce que la surface soit prise et que les bords se décollent facilement.",
          "Retournez la crêpe à l’aide d’une spatule fine.",
          "Cuisez la seconde face jusqu’à ce qu’elle soit légèrement dorée par endroits.",
          "Déposez la crêpe sur une assiette.",
          "Recommencez avec le reste de la pâte.",
        ],
      },
    },
    notes: [
      "Remuez doucement la pâte reposée avant la cuisson. Si elle a épaissi ou si elle ne couvre pas la crêpière d’un mouvement rapide, incorporez un trait de lait au fouet et réessayez.",
      "Empilez les crêpes cuites sur une assiette sous un torchon propre pour les garder moelleuses pendant la cuisson des suivantes.",
      "Pour une crêpe sucrée, garnissez-la de confiture ou de Nutella. Pour une version salée, ajoutez du jambon et du fromage râpé sur une crêpe cuite dans la poêle et repliez-la quand le fromage a fondu.",
    ],
  },
  "strawberry-yoghurt-lollies": {
    totalTime: "Au moins 6 h, plus le mixage et le démoulage",
    restTime: "Au moins 6 h au congélateur, puis 10 à 15 min pour assouplir si souhaité",
    title: "Bâtonnets glacés à la fraise et au yaourt",
    description: "Des glaces crémeuses à la fraise, à la banane et au yaourt grec.",
    yield: "Environ 5 bâtonnets",
    times: [{ label: "Congélation", value: "Au moins 6 h" }],
    groupTitles: ["Préparation pour bâtonnets glacés"],
    ingredients: {
      yoghurt: { name: "de yaourt grec entier" },
      strawberries: { name: "de fraises", note: "fraîches ou décongelées" },
      banana: { name: "de banane mûre", note: "environ une petite banane pelée" },
      glucose: { name: "de sirop de glucose" },
      "lemon-juice": { name: "de jus de citron", note: "facultatif" },
    },
    setup: [
      "Prévoyez un blender, des moules à glaces et des bâtonnets.",
    ],
    allergens: ["Lait"],
    steps: {
      blend: {
        title: "Mixer les fruits et le yaourt",
        instructions: [
          "Mettez le yaourt, les fraises, la banane, le sirop de glucose et le jus de citron facultatif dans le blender.",
          "Mixez jusqu’à obtenir une préparation lisse.",
        ],
      },
      fill: {
        title: "Remplir les moules",
        instructions: [
          "Versez la préparation dans les moules à glaces.",
          "Insérez les bâtonnets.",
        ],
      },
      freeze: {
        title: "Congeler les bâtonnets",
        instructions: [
          "Placez les moules remplis au congélateur pendant au moins 6 heures ou toute une nuit, jusqu’à ce que les glaces soient prises.",
        ],
        wait: "Au moins 6 h ou toute une nuit",
        timerLabels: ["Vérifier la prise des glaces"],
      },
      release: {
        title: "Démouler les bâtonnets",
        instructions: [
          "Passez brièvement l’extérieur de chaque moule sous l’eau tiède.",
          "Démoulez chaque glace en tirant doucement sur son bâtonnet.",
        ],
      },
      soften: {
        title: "Laisser s’attendrir, si souhaité",
        instructions: [
          "Laissez les glaces s’attendrir 10 à 15 minutes si vous préférez une texture plus tendre.",
        ],
        wait: "10 à 15 min, facultatif",
        timerLabels: ["Vérifier la texture"],
      },
    },
    notes: [
      "Pour varier, remplacez le sirop de glucose par 15 g de sirop d’érable ou deux dattes réhydratées. Ces variantes peuvent modifier la fermeté des glaces.",
      "Essayez de remplacer les fraises et le yaourt par de la mangue et du lait de coco. Pour obtenir des couches de couleurs différentes, congelez deux préparations aux fruits dans le même moule. Vous pouvez aussi ajouter de la vanille, de la cannelle, des fruits finement coupés ou des céréales concassées.",
    ],
    nutrition: {
      yieldAssumptions: "On suppose que la préparation congelée conserve le poids des ingrédients et que les pertes par évaporation ou lors du transvasement sont négligeables.",
      dataAssumptions: "Le calcul inclut le jus de citron facultatif. Les produits de référence sont un yaourt grec à 5 % de matière grasse et le sirop de glucose indiqué. Les traces signalées dans CoFID sont comptées comme nulles.",
    },
  },
};
