export default {
  "general-tso-chicken": {
    title: "Poulet du général Tso",
    description: "Des hauts de cuisse dorés à la poêle, enrobés d’une sauce aigre-douce au gingembre, à l’ail et au piment.",
    times: [
      { label: "Préparation", value: "15 min" },
      { label: "Cuisson", value: "15 min" },
    ],
    groupTitles: ["Poulet", "Sauce"],
    ingredients: {
      chicken: { name: "hauts de cuisse de poulet désossés", unit: "lb", note: "environ 900 g, parés" },
      coating: { name: "fécule de maïs", unit: "tasse", note: "amidon de maïs" },
      "frying-oil": { name: "huile d’olive au goût très doux", unit: "tasse", note: "plus si nécessaire" },
      ginger: { name: "gingembre frais", unit: "c. à soupe", note: "finement haché, prélevé sur un morceau d’environ 5 cm" },
      garlic: { name: "gousses d’ail", note: "râpées ou finement hachées, environ 1 c. à soupe" },
      chilli: { name: "flocons de piment", unit: "c. à café", note: "à ajuster au goût" },
      sesame: { name: "graines de sésame", unit: "c. à café", note: "garniture facultative" },
      water: { name: "eau froide", unit: "tasse" },
      soy: { name: "sauce soja réduite en sel", unit: "c. à soupe" },
      vinegar: { name: "vinaigre de riz", unit: "c. à soupe", note: "plus au goût" },
      hoisin: { name: "sauce hoisin", unit: "c. à soupe" },
      sugar: { name: "sucre en poudre", unit: "c. à soupe" },
      thickener: { name: "fécule de maïs", unit: "c. à soupe", note: "amidon de maïs" },
    },
    steps: {
      prep: {
        title: "Enrober le poulet et préparer la sauce",
        instructions: [
          "Coupez les hauts de cuisse en morceaux d’environ 2,5 cm. Enrobez-les légèrement de fécule de maïs et secouez-les pour retirer l’excédent.",
          "Dans un bol, fouettez l’eau, la sauce soja, le vinaigre, la sauce hoisin, le sucre et la fécule prévue pour la sauce. Le mélange doit être lisse.",
        ],
      },
      fry: {
        title: "Dorer le poulet en plusieurs fois",
        instructions: [
          "Chauffez un peu d’huile dans une grande poêle antiadhésive. Faites revenir le poulet en deux ou trois fois en retournant les morceaux pour les dorer des deux côtés. Ajoutez de l’huile au besoin.",
          "Vérifiez que les morceaux les plus épais atteignent 74 °C (165 °F) à cœur, puis transférez chaque fournée dans un bol propre. Gardez environ une cuillère à soupe d’huile dans la poêle.",
        ],
      },
      sauce: {
        title: "Enrober le poulet de sauce",
        timing: "30 s pour les aromates · 1 min pour la sauce",
        instructions: [
          "Faites revenir l’ail, le gingembre et le piment environ 30 secondes dans l’huile restante. Mélangez de nouveau la sauce et versez-la dans la poêle.",
          "Remuez jusqu’aux premiers frémissements, puis laissez mijoter environ une minute. Rectifiez l’assaisonnement avec de la sauce soja ou du vinaigre de riz selon votre goût. Remettez le poulet dans la poêle et mélangez pour l’enrober. Parsemez de sésame si vous le souhaitez.",
        ],
      },
    },
    notes: ["Servez aussitôt pour conserver le croustillant. Du riz ou du brocoli vapeur accompagne bien ce plat."],
    safety: {
      title: "Vérifier la cuisson du poulet",
      notes: [{ text: "À l’aide d’un thermomètre de cuisine, vérifiez qu’un gros morceau de chaque fournée atteint 74 °C (165 °F) à cœur." }],
      sourceLabels: ["FoodSafety.gov · Températures de cuisson"],
    },
    source: {
      credit: "Adapté de",
      label: "la recette du poulet du général Tso de Natalya Drozhzhin sur Natasha’s Kitchen",
    },
  },
  "pulled-pork": {
    title: "Porc effiloché au barbecue",
    description: "De l’épaule de porc cuite lentement avec un mélange d’épices au paprika fumé, du vinaigre de cidre et un peu de miel.",
    times: [
      { label: "Cuisson", value: "Environ 7 h" },
      { label: "Repos", value: "40 min" },
    ],
    groupTitles: ["Porc", "Mélange d’épices"],
    ingredients: {
      pork: { name: "épaule de porc" },
      vinegar: { name: "vinaigre de cidre", note: "pour vaporiser et pour la papillote" },
      honey: { name: "miel", note: "un peu, pour la papillote" },
      paprika: { name: "paprika" },
      sugar: { name: "cassonade foncée" },
      salt: { name: "sel casher" },
      mustard: { name: "moutarde en poudre", unit: "c. à café" },
      pepper: { name: "poivre noir fraîchement moulu" },
      chipotle: { name: "flocons de chipotle" },
      oregano: { name: "origan séché" },
      garlic: { name: "ail granulé" },
      onion: { name: "oignon granulé" },
    },
    steps: {
      heat: {
        title: "Préparer le barbecue et les épices",
        timing: "135 °C / 275 °F",
        instructions: [
          "Préparez le barbecue pour une cuisson indirecte et maintenez l’enceinte autour de 135 °C (275 °F). Pendant la chauffe, dès que la température dépasse 93 °C (200 °F), commencez à refermer progressivement les évents pour éviter de dépasser la température voulue.",
          "Mélangez les épices et enrobez uniformément la surface du porc.",
        ],
      },
      spritz: {
        title: "Cuire et vaporiser",
        timing: "Première vaporisation après 1 à 2 h",
        instructions: [
          "Déposez le porc sur le barbecue et laissez-le cuire sans y toucher pendant 1 à 2 heures. Vaporisez-le de vinaigre de cidre, puis recommencez toutes les 45 à 60 minutes.",
          "Poursuivez la cuisson jusqu’à ce que le porc atteigne environ 71 °C (160 °F) à cœur. Commencez à vérifier après environ quatre heures.",
        ],
      },
      wrap: {
        title: "Envelopper et poursuivre la cuisson",
        timing: "96 °C / 205 °F à cœur",
        instructions: [
          "Enveloppez bien le porc dans du papier aluminium avec un dernier trait de vinaigre et un peu de miel. Remettez-le sur le barbecue.",
          "Lorsque la température à cœur approche 96 °C (205 °F), vérifiez qu’une sonde s’enfonce dans la viande presque sans résistance. Prolongez la cuisson si la viande est encore ferme. Comptez environ sept heures de cuisson au total.",
        ],
      },
      pull: {
        title: "Ouvrir la papillote, laisser reposer et effilocher",
        timing: "10 min à découvert · 30 min de repos",
        instructions: [
          "Retirez le porc du barbecue et ouvrez la papillote pendant 10 minutes pour laisser la vapeur s’échapper. Couvrez de nouveau et laissez reposer 30 minutes, puis effilochez la viande.",
        ],
        timerLabels: ["Laisser la vapeur s’échapper", "Laisser reposer le porc"],
      },
    },
    notes: ["La durée de cuisson varie selon la taille de la pièce et la régularité de la température du barbecue."],
  },
  "chicken-nuggets": {
    title: "Nuggets de poulet à la friteuse à air",
    description: "Des nuggets de poulet à la carotte et à l’oignon, avec des pommes de terre persillées et une compote de pommes avec des morceaux.",
    groupTitles: ["Nuggets de poulet", "Pommes de terre persillées", "Compote de pommes"],
    ingredients: {
      chicken: { name: "hauts de cuisse de poulet désossés, sans peau" },
      egg: { name: "gros œuf", note: "environ 60 g sans la coquille" },
      milk: { name: "lait ou crème", note: "environ 25 ml" },
      breadcrumbs: { name: "chapelure" },
      flour: { name: "farine de blé ordinaire" },
      carrot: { name: "carotte", note: "râpée très finement" },
      onion: { name: "oignon", note: "râpé très finement" },
      "nugget-salt": { name: "sel", unit: "c. à café", note: "environ 7 g" },
      paprika: { name: "paprika doux", unit: "c. à café", note: "environ 1 g" },
      thyme: { name: "thym séché", unit: "c. à café", note: "environ 0,3 g" },
      "nugget-oil": { name: "huile neutre", note: "tournesol ou colza" },
      potatoes: { name: "pommes de terre", note: "épluchées" },
      butter: { name: "beurre" },
      "potato-oil": { name: "huile d’olive ou de colza" },
      "potato-salt": { name: "sel", unit: "c. à café", note: "environ 4 g" },
      parsley: { name: "persil frais", unit: "c. à soupe", note: "finement haché, environ 8 à 10 g" },
      apples: { name: "pommes de taille moyenne", note: "environ 750 g avant épluchage" },
      water: { name: "eau", unit: "ml" },
      cinnamon: { name: "cannelle", quantity: "Une toute petite pincée", note: "facultative" },
    },
    steps: {
      compote: {
        title: "Faire mijoter les pommes",
        timing: "12 à 15 min",
        instructions: [
          "Épluchez et évidez les pommes, puis coupez-les en morceaux de 1 à 2 cm. Mettez-les dans une casserole avec l’eau et, si vous le souhaitez, la cannelle.",
          "Couvrez et faites cuire à feu moyen de 12 à 15 minutes. Écrasez les pommes tendres à la fourchette en laissant quelques morceaux, puis laissez refroidir la compote.",
        ],
        timerLabels: ["Faire mijoter la compote"],
      },
      potatoes: {
        title: "Précuire puis rôtir les pommes de terre",
        timing: "10 à 12 min à l’eau · 15 à 20 min au four",
        instructions: [
          "Coupez les pommes de terre en cubes de 1,5 cm. Plongez-les dans l’eau froide salée et portez à petite ébullition. Faites cuire de 10 à 12 minutes, égouttez-les et laissez-les sécher à la vapeur pendant 2 minutes.",
          "Préchauffez le four à 200 °C (180 °C en chaleur tournante). Mélangez les pommes de terre avec le beurre et l’huile et enfournez-les de 15 à 20 minutes en les retournant à mi-cuisson. Mélangez-les délicatement avec le persil à la sortie du four.",
        ],
        timerLabels: ["Précuire les pommes de terre", "Rôtir les pommes de terre"],
      },
      shape: {
        title: "Mixer, façonner et paner",
        instructions: [
          "Mixez le poulet, l’œuf, le lait, le sel, le paprika et le thym en 5 à 7 impulsions courtes au mixeur ou au robot, jusqu’à obtenir une pâte épaisse.",
          "Pressez la carotte et l’oignon râpés pour en retirer l’eau, puis mélangez-les au poulet. Avec les mains légèrement humides, façonnez de petits nuggets. Passez-les dans une fine couche de farine, puis dans la chapelure.",
        ],
      },
      fry: {
        title: "Cuire les nuggets à la friteuse à air",
        timing: "180 °C · 10 à 12 min",
        instructions: [
          "Préchauffez la friteuse à air à 180 °C pendant 3 à 5 minutes. Badigeonnez légèrement les nuggets d’huile et disposez-les en une seule couche. Procédez en plusieurs fournées au besoin.",
          "Faites cuire de 10 à 12 minutes en les retournant à mi-cuisson. Vérifiez que les nuggets les plus épais atteignent 74 °C (165 °F) à cœur. Prolongez la cuisson au besoin. Servez avec les pommes de terre et la compote.",
        ],
        timerLabels: ["Vérifier la cuisson des nuggets"],
      },
    },
    notes: [
      "Assaisonnez les portions adultes de poivre noir ou de paprika fumé après cuisson.",
      "Pour une croûte plus tendre, panez les nuggets avec de la chapelure seule.",
      "Remplacez la carotte par le même poids de courgette ou de céleri-rave et pressez bien le légume râpé. De la semoule de couscous au beurre ou de petites pâtes en coquille peuvent remplacer les pommes de terre.",
      "Pour cuire les nuggets surgelés crus, commencez à vérifier la cuisson environ 3 à 4 minutes plus tard, à la même température. Poursuivez jusqu’à ce que chaque fournée atteigne la même température à cœur.",
    ],
    safety: {
      title: "Vérifier la cuisson des nuggets",
      notes: [{ text: "Plantez un thermomètre de cuisine dans la partie la plus épaisse d’un gros nugget pour vérifier qu’il atteint 74 °C (165 °F), y compris si vous le cuisez surgelé." }],
      sourceLabels: ["FoodSafety.gov · Températures de cuisson"],
    },
  },
  "chicken-butter-bean-stew": {
    title: "Mijoté de poulet et de haricots blancs à l’espagnole",
    description: "Un mijoté au paprika fumé, avec du poulet tendre, de gros haricots blancs entiers et une sauce onctueuse aux haricots cannellini.",
    servings: "4 portions adultes + 2 portions pour jeunes enfants",
    groupTitles: ["Sauce aux haricots et à la tomate", "Poulet et légumes"],
    ingredients: {
      cannellini: { name: "haricots cannellini", note: "une boîte de 400 g, poids égoutté" },
      passata: { name: "coulis de tomates", note: "la moitié d’une brique de 500 g" },
      stock: { name: "bouillon de volaille réduit en sel", unit: "ml", note: "répartir en 75 ml et 125 ml" },
      tomatoes: { name: "tomates concassées", note: "une boîte" },
      "butter-beans": { name: "gros haricots blancs", note: "deux boîtes de 400 g, poids égoutté" },
      chicken: { name: "hauts de cuisse de poulet désossés, sans peau", note: "coupés en morceaux d’une bouchée" },
      peppers: { name: "poivrons rouges", note: "environ 2 poivrons moyens, en dés" },
      carrot: { name: "carotte", note: "environ 1 grosse carotte, en petits dés" },
      onion: { name: "oignon jaune", note: "environ 1 oignon moyen, finement haché" },
      garlic: { name: "ail", note: "environ 3 gousses, hachées" },
      paprika: { name: "paprika doux fumé", note: "environ 1½ c. à café" },
      oil: { name: "huile d’avocat", note: "environ 1 c. à soupe" },
      seasoning: { name: "sel de mer et poivre noir", quantity: "Au goût" },
    },
    steps: {
      blend: {
        title: "Mixer la sauce",
        instructions: ["Mixez les haricots cannellini égouttés avec le coulis de tomates et 75 ml de bouillon jusqu’à obtenir une sauce lisse. Réservez."],
      },
      brown: {
        title: "Dorer le poulet",
        timing: "4 à 5 min",
        instructions: ["Chauffez l’huile à feu moyen-vif dans une sauteuse profonde de 3,5 à 4 litres. Faites dorer le poulet pendant 4 à 5 minutes, puis transférez-le dans une assiette."],
      },
      vegetables: {
        title: "Faire revenir les légumes",
        timing: "6 à 8 min · 1 min pour l’ail et le paprika",
        instructions: ["Baissez à feu moyen. Faites revenir l’oignon, la carotte et les poivrons de 6 à 8 minutes, jusqu’à ce qu’ils soient tendres. Ajoutez l’ail et le paprika et poursuivez la cuisson 1 minute."],
      },
      simmer: {
        title: "Faire mijoter le plat",
        timing: "20 min à couvert · 10 min à découvert",
        instructions: [
          "Remettez le poulet et son jus dans la sauteuse. Ajoutez la sauce mixée, les tomates concassées et les 125 ml de bouillon restants. Couvrez et laissez mijoter à feu doux pendant 20 minutes.",
          "Incorporez les gros haricots blancs égouttés et laissez mijoter 10 minutes supplémentaires à découvert pour épaissir le tout. Vérifiez que le poulet atteint 74 °C (165 °F) à cœur. Assaisonnez au goût.",
        ],
        timerLabels: ["Faire mijoter à couvert", "Laisser réduire à découvert"],
      },
    },
    notes: [
      "Les notes d’origine estiment le poids du plat cuit à environ 2,4 kg. Elles suggèrent des portions d’environ 450 g pour les adultes et de 300 g pour les jeunes enfants. Écrasez légèrement les gros haricots blancs avant de les servir à un jeune enfant.",
      "Pour un repas plus copieux, accompagnez une portion adulte de 150 g de quinoa cuit et de 50 g de yaourt grec sans matière grasse.",
      "Réfrigérez la demi-brique de coulis restante pour la frittata aux tomates et aux épinards.",
    ],
    safety: {
      title: "Vérifier la cuisson du poulet",
      notes: [{ text: "Avant de servir, vérifiez à l’aide d’un thermomètre de cuisine qu’un gros morceau de poulet atteint 74 °C (165 °F) à cœur." }],
      sourceLabels: ["FoodSafety.gov · Températures de cuisson"],
    },
  },
  "tomato-spinach-frittata": {
    title: "Frittata aux tomates et aux épinards à l’espagnole",
    description: "Une frittata aux tomates et aux épinards pour utiliser le coulis restant du mijoté de poulet et de haricots blancs.",
    servings: "2 portions adultes + 1 portion pour jeune enfant",
    groupTitles: ["Frittata"],
    ingredients: {
      passata: { name: "coulis de tomates", note: "la moitié d’une brique de 500 g" },
      spinach: { name: "jeunes pousses d’épinards" },
      eggs: { name: "gros œufs" },
      "extra-eggs": { name: "gros œufs supplémentaires", note: "ou 100 g de blancs d’œufs liquides" },
      cheese: { name: "cheddar ou feta", note: "râpé ou émiettée" },
      oil: { name: "huile d’avocat", note: "environ ½ c. à soupe" },
      oregano: { name: "origan séché", unit: "c. à café" },
      seasoning: { name: "sel de mer et poivre noir", quantity: "Au goût" },
    },
    steps: {
      wilt: {
        title: "Faire tomber les épinards et chauffer le coulis",
        timing: "Gril à 200 °C · 4 min à la poêle",
        instructions: [
          "Préchauffez le gril du four à puissance moyenne à forte, autour de 200 °C. Chauffez l’huile à feu moyen dans une poêle allant au four et faites tomber les épinards pendant 2 minutes.",
          "Ajoutez le coulis et l’origan, puis laissez cuire encore 2 minutes, jusqu’aux premiers bouillons.",
        ],
      },
      eggs: {
        title: "Faire prendre les œufs à la poêle",
        timing: "4 à 5 min",
        instructions: [
          "Fouettez les cinq œufs et les œufs ou blancs supplémentaires avec le sel et le poivre. Versez-les dans le mélange de tomates et d’épinards frémissant, puis remuez délicatement à la spatule.",
          "Laissez cuire la frittata de 4 à 5 minutes sans y toucher, jusqu’à ce que les bords soient pris.",
        ],
      },
      grill: {
        title: "Passer sous le gril et découper",
        timing: "4 à 5 min",
        instructions: [
          "Répartissez le fromage sur la frittata et placez la poêle sous le gril pendant 4 à 5 minutes. La frittata doit gonfler et prendre. Prolongez la cuisson si le centre n’a pas atteint 71 °C (160 °F).",
          "Coupez-la en parts. Pour les petites mains, découpez une portion en lanières faciles à saisir.",
        ],
        timerLabels: ["Vérifier la cuisson de la frittata"],
      },
    },
    safety: {
      title: "Vérifier la cuisson à cœur",
      notes: [{ text: "Avant de découper la frittata, vérifiez qu’elle atteint 71 °C (160 °F) à cœur à l’aide d’un thermomètre de cuisine." }],
      sourceLabels: ["FoodSafety.gov · Températures de cuisson"],
    },
  },
  "apple-sauce": {
    title: "Compote de pommes à la cannelle",
    description: "Une compote de pommes toute simple, à écraser pour garder quelques morceaux ou à mixer pour une purée lisse.",
    times: [{ label: "Cuisson à feu doux", value: "15 à 20 min" }],
    groupTitles: ["Compote de pommes", "Pour la finition, au choix"],
    ingredients: {
      apples: { name: "pommes Bramley", note: "évidées et coupées, ou 6 pommes à croquer" },
      water: { name: "eau", unit: "ml", note: "100 ml pour une compote avec des morceaux ou 300 ml pour une purée lisse" },
      cinnamon: { name: "bâton de cannelle", note: "environ 7,5 cm, ou ½ c. à café de cannelle moulue" },
      sugar: { name: "sucre en poudre", quantity: "Jusqu’à 150", unit: "g", note: "à doser au goût" },
      lemon: { name: "jus de citron", unit: "c. à soupe" },
    },
    steps: {
      cook: {
        title: "Faire mijoter les pommes",
        timing: "15 min",
        instructions: ["Mettez les pommes coupées, l’eau et la cannelle dans une casserole. Portez à ébullition, puis baissez le feu et laissez mijoter 15 minutes, jusqu’à ce que les pommes soient tendres."],
        timerLabels: ["Faire mijoter les pommes"],
      },
      texture: {
        title: "Écraser ou mixer",
        instructions: ["Retirez la casserole du feu et ôtez le bâton de cannelle si vous en avez utilisé un. Écrasez les pommes pour garder quelques morceaux ou mixez-les pour obtenir une purée lisse."],
      },
      season: {
        title: "Sucrer au goût",
        timing: "5 min si vous ajoutez du sucre",
        instructions: [
          "Goûtez et, au besoin, ajoutez le sucre une cuillère à soupe à la fois. Si vous le souhaitez, ajoutez le jus de citron pour apporter une note acidulée. Si vous avez ajouté du sucre, remettez la casserole à feu doux pendant environ 5 minutes pour le dissoudre.",
        ],
      },
    },
    notes: [
      "Servez avec un rôti de porc, versez sur une glace ou utilisez la compote en pâtisserie.",
      "Laissez refroidir rapidement, couvrez et réfrigérez. Consommez la compote dans les 48 heures ou congelez-la dans des bacs à glaçons. Transférez les cubes dans un sac de congélation et utilisez-les dans les trois mois pour une qualité optimale. Décongelez les portions au réfrigérateur pendant la nuit.",
    ],
    safety: {
      title: "Conserver la compote",
      notes: [{ text: "Réfrigérez la compote dans les deux heures suivant la cuisson. Consommez les restes réfrigérés dans les 48 heures ou congelez-les en petites portions." }],
      sourceLabels: ["Food Standards Agency · Conseils de conservation des restes"],
    },
  },
  "riz-au-lait": {
    title: "Riz au lait à la vanille",
    description: "Un riz au lait parfumé à la vanille, enrichi de beurre et allégé par un blanc d’œuf monté en neige.",
    times: [{ label: "Cuisson du riz", value: "22 min" }],
    groupTitles: ["Riz au lait"],
    ingredients: {
      milk: { name: "lait", unit: "litre" },
      rice: { name: "riz à grains courts", note: "le riz à risotto convient" },
      sugar: { name: "sucre", note: "plus 4 c. à soupe" },
      egg: { name: "œuf", note: "jaune et blanc séparés" },
      vanilla: { name: "gousse de vanille", note: "ou 1 c. à soupe d’extrait de vanille" },
      salt: { name: "sel", quantity: "Une pincée" },
      butter: { name: "beurre" },
    },
    steps: {
      simmer: {
        title: "Cuire le riz dans le lait vanillé",
        timing: "22 min",
        instructions: [
          "Chauffez le lait avec la vanille et le sel dans une casserole. Ajoutez le riz et laissez mijoter doucement environ 22 minutes, en remuant de temps en temps, jusqu’à ce que les grains soient tendres.",
          "Si vous avez utilisé une gousse de vanille, retirez-la une fois le riz cuit.",
        ],
        timerLabels: ["Faire cuire le riz"],
      },
      yolk: {
        title: "Incorporer le jaune et le beurre",
        instructions: [
          "Fouettez le jaune d’œuf avec le sucre, en délayant peu à peu le mélange avec des cuillerées de lait chaud prélevé dans la casserole. Incorporez ce mélange tiédi au riz cuit, puis ajoutez le beurre.",
        ],
      },
      finish: {
        title: "Incorporer le blanc monté en neige",
        instructions: [
          "Dans un bol propre, fouettez le blanc jusqu’à ce qu’il forme des pics. Incorporez-le délicatement au riz au lait, puis remuez à feu doux jusqu’à ce que toute la préparation atteigne 72 °C (162 °F). Gardez le feu doux pour éviter que l’œuf ne coagule en morceaux.",
        ],
      },
    },
    safety: {
      title: "Cuire et conserver le riz au lait",
      notes: [
        { text: "Après avoir incorporé le blanc monté en neige, utilisez un thermomètre de cuisine pour vérifier que toute la préparation atteint 72 °C (162 °F)." },
        { text: "Faites refroidir rapidement les restes, idéalement dans l’heure. Réfrigérez-les et consommez-les dans la journée." },
      ],
      sourceLabels: [
        "FoodSafety.gov · Températures de cuisson",
        "Food Standards Agency · Conseils de conservation du riz",
      ],
    },
  },
};
