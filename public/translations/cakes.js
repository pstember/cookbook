export default {
  "two-day-birthday-cake": {
    totalTime: "Sur deux jours",
    cookingTime: "Moule de 20 cm : 28 à 34 min · 23 cm : 38 à 44 min, fruits compris",
    restTime: "Laisser refroidir le biscuit et le faire reposer une nuit, puis prévoir au moins 3 h 30 au frais le deuxième jour",
    title: "Gâteau d’anniversaire sur deux jours",
    description: "Deux disques de génoise garnis de fraises et de framboises, puis recouverts de crème fouettée au mascarpone.",
    times: [
      { label: "À commencer", value: "La veille du service" },
      { label: "Diamètre du moule", value: "20 ou 23 cm" },
      { label: "Jour 2 au frais", value: "Au moins 3 h 30, hors préparation" },
    ],
    plan: [
      {
        title: "Jour 1 · Cuire la génoise",
        detail: "Laissez refroidir complètement la génoise avant de l’emballer pour la nuit.",
      },
      {
        title: "Jour 2 · Commencer par la garniture aux fruits",
        detail: "Réfrigérez la garniture 1 à 2 h, jusqu’à ce qu’elle puisse être étalée sans couler. Pendant ce temps, découpez la génoise refroidie.",
      },
      {
        title: "Jour 2 · Garnir, recouvrir et réfrigérer",
        detail: "Réfrigérez la première couche de crème 30 à 60 min. Ajoutez la dernière couche, puis réfrigérez au moins 2 h avant de servir.",
      },
    ],
    ingredientTip: "Lorsque deux quantités sont indiquées, la première correspond à un gâteau de 20 cm et la seconde à un gâteau de 23 cm.",
    groupTitles: ["Génoise", "Garniture aux fruits", "Crème au mascarpone"],
    ingredients: {
      eggs: { name: "gros œufs", note: "pesés sans coquille" },
      "sponge-sugar": { name: "sucre en poudre" },
      flour: { name: "farine à gâteau ou farine T45" },
      fat: { name: "beurre fondu ou huile" },
      strawberries: { name: "fraises", note: "coupées en dés" },
      raspberries: { name: "framboises", note: "laissées entières" },
      gelatine: { name: "gélatine (200 Bloom)", note: "environ 2 ou 2½ feuilles selon la marque" },
      "filling-sugar": { name: "sucre" },
      "lemon-juice": { name: "jus de citron", note: "quantités suggérées, la recette d’origine n’en précise pas" },
      mascarpone: { name: "mascarpone", note: "bien froid" },
      cream: { name: "crème liquide (au moins 30 % de matière grasse)", note: "bien froide" },
      "icing-sugar": { name: "sucre glace" },
      vanilla: { name: "extrait de vanille", note: "quantités suggérées, la recette d’origine n’en précise pas" },
    },
    setup: [
      "Utilisez le premier poids pour un moule de 20 cm et le second pour un moule de 23 cm. Entourez le moule de bandes de cuisson humides et préchauffez le four à 165 °C.",
    ],
    allergens: [
      "Œufs",
      "Blé (gluten)",
      "Lait",
    ],
    source: {
      label: "Le carnet de recettes de l’auteur",
    },
    steps: {
      "make-sponge": {
        title: "Jour 1 · Fouetter les œufs",
        timing: "8 à 10 min au fouet",
        instructions: [
          "Préchauffez le four à 165 °C.",
          "Trempez les bandes de cuisson dans l’eau.",
          "Enroulez les bandes autour du moule préparé.",
          "Fouettez les œufs avec le sucre pendant 8 à 10 minutes, jusqu’à ce que le mélange retombe du fouet en ruban.",
        ],
      },
      "fold-sponge": {
        title: "Incorporer la farine",
        instructions: [
          "Tamisez un tiers de la farine au-dessus des œufs.",
          "Incorporez-la délicatement à la spatule.",
          "Répétez l’opération avec chacun des deux tiers restants.",
          "Incorporez le beurre fondu ou l’huile.",
        ],
      },
      bake: {
        title: "Cuire la génoise",
        heat: "Four à 165 °C",
        timing: "20 cm : 25 à 30 min · 23 cm : 35 à 40 min",
        timerLabels: [
          "Vérifier la génoise de 20 cm",
          "Vérifier la génoise de 23 cm",
        ],
        instructions: [
          "Versez la pâte dans le moule préparé.",
          "Faites cuire à 165 °C environ 25 à 30 minutes pour un moule de 20 cm, ou 35 à 40 minutes pour un moule de 23 cm.",
        ],
      },
      "rest-sponge": {
        title: "Laisser reposer la génoise une nuit",
        wait: "10 min dans le moule, puis refroidissement complet et repos d’une nuit",
        tip: "Le repos d’une nuit aide la mie à se tenir à la découpe.",
        instructions: [
          "Laissez la génoise dans son moule pendant 10 minutes à la sortie du four.",
          "Démoulez la génoise sur une grille.",
          "Laissez-la refroidir complètement.",
          "Emballez soigneusement la génoise refroidie.",
          "Laissez-la reposer une nuit à température ambiante, ou au réfrigérateur s’il fait très chaud dans la cuisine.",
        ],
      },
      bloom: {
        title: "Jour 2 · Ramollir la gélatine",
        wait: "5 min dans l’eau glacée",
        instructions: [
          "Faites tremper les feuilles de gélatine dans de l’eau glacée pendant 5 minutes.",
        ],
      },
      "simmer-fruit": {
        title: "Cuire les fraises",
        heat: "Frémissement",
        instructions: [
          "Faites mijoter les dés de fraise avec le sucre et le jus de citron pendant 3 à 4 minutes.",
        ],
      },
      filling: {
        title: "Dissoudre la gélatine",
        heat: "Hors du feu",
        instructions: [
          "Retirez la casserole du feu.",
          "Essorez la gélatine ramollie.",
          "Incorporez la gélatine aux fraises chaudes jusqu’à dissolution.",
        ],
      },
      "add-raspberries": {
        title: "Incorporer les framboises",
        instructions: [
          "Incorporez délicatement les framboises entières aux fraises.",
        ],
      },
      "chill-filling": {
        title: "Faire prendre la garniture",
        wait: "1 à 2 h au réfrigérateur",
        timerLabels: [
          "Vérifier la garniture aux fruits",
        ],
        tip: "Découpez la génoise refroidie pendant que la garniture est au frais.",
        instructions: [
          "Réfrigérez la garniture pendant 1 à 2 heures, jusqu’à ce qu’elle puisse être étalée sans couler.",
        ],
      },
      "slice-and-whip": {
        title: "Découper la génoise",
        instructions: [
          "Déballez la génoise refroidie.",
          "Coupez-la horizontalement en deux disques de même épaisseur avec un couteau-scie.",
        ],
      },
      "whip-icing": {
        title: "Monter la crème au mascarpone",
        tip: "Placez le saladier et le fouet au congélateur 10 minutes avant de monter la crème.",
        instructions: [
          "Fouettez le mascarpone et la crème bien froids avec le sucre glace et la vanille jusqu’à obtenir des pics fermes.",
        ],
      },
      assemble: {
        title: "Garnir le gâteau",
        instructions: [
          "Pochez un cordon épais de crème au bord du disque inférieur.",
          "Étalez la garniture aux fruits prise à l’intérieur du cordon.",
          "Posez le second disque de génoise par-dessus.",
        ],
      },
      "crumb-coat": {
        title: "Fixer les miettes",
        instructions: [
          "Étalez une fine couche de crème sur le dessus et les côtés pour fixer les miettes.",
        ],
      },
      "chill-coat": {
        title: "Faire prendre la première couche",
        wait: "30 à 60 min au réfrigérateur",
        timerLabels: [
          "Vérifier la première couche de crème",
        ],
        instructions: [
          "Réfrigérez le gâteau recouvert de sa fine couche de crème pendant 30 à 60 minutes avant la finition.",
        ],
      },
      finish: {
        title: "Recouvrir le gâteau",
        instructions: [
          "Recouvrez le dessus et les côtés avec le reste de la crème au mascarpone.",
        ],
      },
      "chill-cake": {
        title: "Réfrigérer avant le service",
        wait: "Au moins 2 h au réfrigérateur",
        timerLabels: [
          "Repos final minimum",
        ],
        tip: "Trempez la lame du couteau dans l’eau chaude et essuyez-la entre les parts.",
        instructions: [
          "Gardez le gâteau au réfrigérateur pendant au moins 2 heures et jusqu’au moment de servir.",
        ],
      },
    },
  },
  "swiss-roll-with-jam": {
    restTime: "Laisser refroidir la garniture et le biscuit, puis réfrigérer le roulé 20 à 30 min",
    title: "Gâteau roulé aux framboises et aux fraises",
    description: "Une génoise roulée, garnie d’une compotée de fruits rouges maison et d’une crème au beurre à la meringue suisse.",
    times: [
      { label: "Cuisson de la génoise", value: "10 à 12 min" },
      { label: "Repos au frais", value: "20 à 30 min" },
      { label: "Durée totale", value: "Environ 1 h 50 min" },
    ],
    groupTitles: ["Génoise", "Garniture aux fruits rouges", "Crème au beurre à la meringue suisse"],
    ingredients: {
      eggs: { name: "gros œufs", note: "à température ambiante, pesés sans coquille" },
      "sponge-sugar": { name: "sucre en poudre" },
      flour: { name: "farine de blé", note: "tamisée deux fois" },
      "sponge-butter": { name: "beurre salé", note: "fondu et refroidi" },
      "sponge-vanilla": { name: "extrait de vanille", unit: "c. à café" },
      "icing-sugar": { name: "sucre glace", note: "quantité estimée pour saupoudrer le torchon et éventuellement le roulé terminé" },
      raspberries: { name: "framboises", note: "fraîches ou surgelées" },
      strawberries: { name: "fraises", note: "fraîches ou surgelées, équeutées et coupées en morceaux" },
      "filling-sugar": { name: "sucre en poudre" },
      cornflour: { name: "fécule de maïs", unit: "c. à café" },
      "lemon-juice": { name: "jus de citron", unit: "c. à café" },
      water: { name: "eau", unit: "c. à café", note: "5 g pour cuire les fruits et 5 g pour délayer la fécule" },
      "egg-whites": { name: "blancs d’œufs", note: "environ le blanc d’un gros œuf" },
      "buttercream-sugar": { name: "sucre en poudre" },
      "buttercream-butter": { name: "beurre salé", note: "ramolli et coupé en dés" },
      "buttercream-vanilla": { name: "extrait de vanille", unit: "c. à café" },
    },
    setup: [
      "Chemisez une plaque de 25 × 18 cm de papier cuisson. Préchauffez le four à 180 °C (350 °F) pour la génoise.",
    ],
    allergens: [
      "Œufs",
      "Blé (gluten)",
      "Lait",
    ],
    storage: {
      fridge: "Gardez le roulé au frais jusqu’au service. Durée de conservation non testée.",
    },
    steps: {
      fruit: {
        title: "Cuire la garniture aux fruits rouges",
        timing: "15 min de préparation active",
        heat: "Feu moyen",
        tip: "Ajustez le sucre à votre goût si les fruits sont très mûrs.",
        instructions: [
          "Réunissez les fruits rouges, le sucre et 5 g d’eau dans une petite casserole.",
          "Faites cuire à feu moyen pendant 5 à 7 minutes, jusqu’à ce que les fruits ramollissent et rendent leur jus.",
          "Délayez la fécule dans les 5 g d’eau restants.",
          "Versez la fécule délayée dans la casserole.",
          "Remuez jusqu’à épaississement.",
          "Incorporez le jus de citron.",
        ],
      },
      "chill-fruit": {
        title: "Refroidir la garniture",
        wait: "Jusqu’à refroidissement complet",
        instructions: [
          "Transvasez la garniture dans un plat peu profond.",
          "Réfrigérez jusqu’à refroidissement complet.",
        ],
      },
      "warm-eggs": {
        title: "Tiédir les œufs de la génoise",
        heat: "Bain-marie frémissant",
        instructions: [
          "Préchauffez le four à 180 °C (350 °F).",
          "Chemisez une plaque de 25 × 18 cm de papier cuisson.",
          "Fouettez les œufs et le sucre dans un bol résistant à la chaleur au-dessus d’une eau frémissante jusqu’à ce que le mélange soit tiède au toucher.",
        ],
      },
      sponge: {
        title: "Monter puis mélanger la pâte",
        heat: "Hors du feu",
        timing: "5 à 6 min au fouet",
        instructions: [
          "Retirez le bol du bain-marie.",
          "Fouettez à grande vitesse pendant 5 à 6 minutes, jusqu’à ce que le mélange triple de volume et retombe du fouet en ruban.",
          "Incorporez délicatement la farine en deux fois.",
          "Incorporez délicatement le beurre fondu et la vanille.",
        ],
      },
      "bake-sponge": {
        title: "Cuire la génoise sur plaque",
        heat: "Four à 180 °C (350 °F)",
        timerLabels: [
          "Vérifier la cuisson de la génoise",
        ],
        instructions: [
          "Étalez uniformément la pâte sur la plaque chemisée.",
          "Faites cuire à 180 °C (350 °F) pendant 10 à 12 minutes, jusqu’à ce que la génoise soit dorée et souple au toucher.",
        ],
      },
      "roll-sponge": {
        title: "Laisser refroidir la génoise roulée",
        timing: "Environ 30 min de refroidissement",
        wait: "Jusqu’à refroidissement complet",
        instructions: [
          "Saupoudrez un torchon propre de sucre glace.",
          "Retournez la génoise chaude sur le torchon.",
          "Décollez le papier cuisson.",
          "Roulez délicatement la génoise à partir d’un petit côté avec le torchon à l’intérieur.",
          "Laissez la génoise roulée refroidir complètement, environ 30 minutes.",
        ],
      },
      "heat-meringue": {
        title: "Chauffer la meringue",
        heat: "Bain-marie frémissant",
        instructions: [
          "Posez un bol propre résistant à la chaleur au-dessus d’une casserole d’eau frémissante.",
          "Fouettez les blancs d’œufs et le sucre au bain-marie jusqu’à dissolution du sucre.",
          "Vérifiez au thermomètre de cuisine que le mélange atteint 72 °C (162 °F) partout.",
        ],
      },
      buttercream: {
        title: "Monter la crème au beurre",
        heat: "Hors du feu",
        timing: "5 à 7 min au fouet hors du feu",
        tip: "Comptez environ 20 minutes en tout pour chauffer la meringue et terminer la crème au beurre.",
        instructions: [
          "Retirez le bol du bain-marie.",
          "Fouettez à grande vitesse pendant 5 à 7 minutes, jusqu’à ce que la meringue forme des pics fermes et que le bol soit froid au toucher.",
          "Incorporez le beurre ramolli morceau par morceau en fouettant.",
          "Ajoutez la vanille.",
          "Fouettez jusqu’à obtenir une crème lisse.",
        ],
      },
      assemble: {
        title: "Garnir la génoise",
        tip: "Prévoyez 15 minutes pour garnir et rouler la génoise avant la mise au frais.",
        instructions: [
          "Déroulez la génoise froide.",
          "Étalez une couche de crème au beurre de 2 à 3 mm en laissant une bordure de 1 cm.",
          "Répartissez délicatement la garniture froide sur la crème au beurre.",
        ],
      },
      roll: {
        title: "Rouler le gâteau",
        instructions: [
          "Roulez la génoise garnie en partant d’un petit côté et en serrant bien.",
          "Emballez le roulé pour qu’il garde sa forme.",
        ],
      },
      "chill-roll": {
        title: "Réfrigérer le roulé emballé",
        wait: "20 à 30 min au réfrigérateur",
        timerLabels: [
          "Vérifier la tenue du roulé",
        ],
        instructions: [
          "Réfrigérez le roulé emballé pendant 20 à 30 minutes pour qu’il se tienne.",
        ],
      },
      finish: {
        title: "Découper et servir",
        timing: "Jusqu’à 10 min",
        tip: "Avant la découpe, recouvrez le roulé du reste de crème au beurre ou saupoudrez-le de sucre glace si vous le souhaitez.",
        instructions: [
          "Découpez le roulé avec un couteau bien aiguisé.",
          "Essuyez la lame entre chaque part.",
          "Servez aussitôt ou gardez le roulé au frais jusqu’au service.",
        ],
      },
    },
    source: { label: "Technique de la crème au beurre à la meringue suisse de King Arthur Baking" },
  },
  "nutella-cake": {
    cookingTime: "15 à 18 min au four, plus le chauffage de la crème et de l’œuf",
    restTime: "Au moins 30 min au frais pour la ganache. Laisser refroidir génoise et sirop, puis sortir le gâteau 15 min avant de servir.",
    title: "Gâteau au Nutella",
    description: "Une petite génoise à trois étages avec une ganache montée au chocolat et aux noisettes et un glaçage au mascarpone.",
    times: [
      { label: "Diamètre du moule", value: "10 cm" },
      { label: "Cuisson", value: "15 à 18 min" },
      { label: "Repos de la ganache au frais", value: "Au moins 30 min" },
    ],
    groupTitles: ["Génoise", "Sirop de sucre", "Ganache montée", "Glaçage et décoration"],
    ingredients: {
      egg: { name: "gros œuf", note: "à température ambiante, pesé sans coquille" },
      "caster-sugar": { name: "sucre en poudre fin" },
      flour: { name: "farine de blé", note: "tamisée" },
      butter: { name: "beurre doux", note: "fondu et refroidi" },
      vanilla: { name: "extrait de vanille", unit: "c. à café" },
      "white-sugar": { name: "sucre blanc", unit: "c. à soupe" },
      water: { name: "eau chaude", unit: "c. à soupe" },
      "ganache-nutella": { name: "Nutella" },
      cream: { name: "crème double" },
      mascarpone: { name: "mascarpone ou fromage frais entier", note: "bien froid" },
      "frosting-nutella": { name: "Nutella" },
      garnish: { name: "sel marin ou noisettes concassées", note: "décoration facultative, environ 0,4 g de sel marin ou 5 g de noisettes concassées" },
    },
    setup: [
      "Graissez un moule rond de 10 cm et chemisez-le de papier cuisson. Préchauffez le four à 170 °C (340 °F) pour la génoise.",
    ],
    allergens: [
      "Œuf",
      "Blé (gluten)",
      "Lait",
      "Noisettes",
      "Vérifiez la présence de soja sur l’étiquette de la pâte à tartiner",
    ],
    storage: {
      fridge: "Gardez le gâteau terminé au réfrigérateur. Durée de conservation non testée.",
    },
    source: {
      label: "Le carnet de recettes de l’auteur",
    },
    steps: {
      "warm-cream": {
        title: "Chauffer la crème",
        heat: "Chauffer jusqu’aux premiers frémissements",
        instructions: [
          "Chauffez la crème dans une petite casserole jusqu’aux premiers frémissements.",
        ],
      },
      ganache: {
        title: "Mélanger la ganache",
        heat: "Hors du feu",
        instructions: [
          "Versez la crème chaude sur le Nutella dans un bol.",
          "Remuez jusqu’à obtenir une ganache lisse et brillante.",
        ],
      },
      "chill-ganache": {
        title: "Réfrigérer la ganache",
        wait: "Au moins 30 min au réfrigérateur",
        timerLabels: [
          "Vérifier la ganache froide",
        ],
        tip: "Commencez la génoise pendant que la ganache est au frais.",
        instructions: [
          "Réfrigérez la ganache pendant au moins 30 minutes avant de la fouetter.",
        ],
      },
      "warm-egg": {
        title: "Tiédir l’œuf et le sucre",
        heat: "Bain-marie frémissant",
        timing: "Environ 2 min au bain-marie",
        instructions: [
          "Préchauffez le four à 170 °C (340 °F).",
          "Graissez un moule rond de 10 cm.",
          "Chemisez-le de papier cuisson.",
          "Fouettez l’œuf et le sucre fin dans un bol au-dessus d’une eau frémissante pendant environ 2 minutes, jusqu’à ce que le mélange soit tiède.",
        ],
      },
      sponge: {
        title: "Fouetter jusqu’au ruban",
        heat: "Hors du feu",
        instructions: [
          "Retirez le bol du bain-marie.",
          "Fouettez pendant 5 à 7 minutes, jusqu’à ce que le mélange blanchisse, épaississe et triple à peu près de volume.",
          "Soulevez le fouet pour vérifier que la pâte retombe en ruban épais.",
        ],
      },
      "fold-sponge": {
        title: "Incorporer la farine",
        instructions: [
          "Incorporez délicatement la farine tamisée en deux fois.",
          "Incorporez délicatement le beurre fondu et la vanille.",
          "Versez la pâte dans le moule chemisé.",
        ],
      },
      "bake-sponge": {
        title: "Cuire la génoise",
        heat: "Four à 170 °C (340 °F)",
        timerLabels: [
          "Vérifier la cuisson de la génoise",
        ],
        instructions: [
          "Faites cuire la génoise à 170 °C (340 °F) pendant 15 à 18 minutes, en vérifiant la cuisson dès 15 minutes.",
        ],
      },
      "cool-sponge": {
        title: "Laisser refroidir la génoise",
        wait: "Jusqu’à refroidissement complet",
        instructions: [
          "Laissez refroidir complètement la génoise avant de la découper.",
        ],
      },
      "syrup-and-frosting": {
        title: "Préparer le sirop",
        wait: "Jusqu’à refroidissement du sirop",
        instructions: [
          "Mélangez le sucre blanc à l’eau chaude jusqu’à dissolution.",
          "Laissez refroidir le sirop.",
        ],
      },
      "whip-ganache": {
        title: "Monter la ganache froide",
        timing: "Environ 30 s",
        instructions: [
          "Fouettez vigoureusement la ganache froide pendant environ 30 secondes, jusqu’à ce qu’elle s’éclaircisse et devienne mousseuse.",
        ],
      },
      "whip-frosting": {
        title: "Monter le glaçage au mascarpone",
        timing: "Environ 1 min",
        instructions: [
          "Fouettez le mascarpone ou le fromage frais bien froid avec le Nutella dans un autre bol pendant environ 1 minute, jusqu’à ce que le glaçage soit assez épais pour être étalé.",
        ],
      },
      "slice-sponge": {
        title: "Couper trois disques",
        instructions: [
          "Coupez la génoise refroidie à l’horizontale en trois disques de même épaisseur.",
        ],
      },
      layer: {
        title: "Garnir et monter le gâteau",
        instructions: [
          "Imbibez chaque disque de sirop refroidi au pinceau.",
          "Étalez la ganache montée sur les disques inférieur et central.",
          "Superposez les disques.",
        ],
      },
      "frost-cake": {
        title: "Glacer le gâteau",
        instructions: [
          "Étalez le glaçage au mascarpone sur le dessus et les côtés.",
          "Parsemez le gâteau d’un peu de sel marin ou de noisettes concassées si vous le souhaitez.",
        ],
      },
    },
    notes: ["Conservez le gâteau terminé au réfrigérateur. Sortez-le 15 minutes avant de servir pour que la garniture s’assouplisse."],
  },
  "strawberry-raspberry-muffins": {
    cookingTime: "29 à 33 min, plus 1 min si la garniture doit épaissir",
    restTime: "Jusqu’à refroidissement complet de la garniture",
    title: "Gros muffins aux fraises et aux framboises",
    description: "De gros muffins au beurre, garnis de fruits frais et d’une compotée maison, avec un dessus croustillant au sucre.",
    yield: "6 gros muffins",
    times: [
      { label: "Cuisson de la garniture", value: "10 à 12 min" },
      { label: "Cuisson au four", value: "19 à 21 min" },
    ],
    groupTitles: ["Garniture aux fraises et aux framboises", "Pâte à muffins", "Garniture du dessus"],
    ingredients: {
      "filling-strawberries": { name: "fraises", note: "équeutées et coupées en dés de 5 à 8 mm" },
      "filling-raspberries": { name: "framboises", note: "laissées entières" },
      "filling-sugar": { name: "sucre en poudre fin" },
      "lemon-juice": { name: "jus de citron" },
      glucose: { name: "sirop de glucose" },
      cornflour: { name: "fécule de maïs", unit: "c. à café", note: "facultative, si la garniture doit être épaissie" },
      "slurry-water": { name: "eau froide", note: "quantité suggérée pour délayer la fécule facultative" },
      flour: { name: "farine de blé" },
      "baking-powder": { name: "levure chimique" },
      "batter-sugar": { name: "sucre en poudre fin" },
      egg: { name: "gros œuf", note: "pesé sans coquille" },
      butter: { name: "beurre salé", note: "fondu" },
      milk: { name: "lait" },
      yoghurt: { name: "yaourt grec" },
      vanilla: { name: "extrait de vanille", unit: "c. à café", note: "facultatif" },
      "batter-strawberries": { name: "fraises", note: "coupées en dés d’environ 5 mm" },
      "batter-raspberries": { name: "framboises" },
      "extra-berries": { name: "morceaux de fraises et de framboises", quantity: "Quelques", note: "quantité estimée pour le dessus et éventuellement le cœur des muffins" },
      "topping-sugar": { name: "sucre en poudre fin ou sucre à gros grains", unit: "c. à café" },
    },
    setup: [
      "Garnissez un moule à six muffins de grandes caissettes.",
      "Préchauffez le four à 210 °C en chaleur statique ou à 190 °C en chaleur tournante.",
    ],
    allergens: ["Blé", "Œuf", "Lait"],
    storage: {
      counter: "À déguster de préférence dans les 2 à 3 jours. Laissez refroidir complètement avant de ranger dans une boîte hermétique.",
    },
    source: {
      label: "Le carnet de recettes de l’auteur",
    },
    steps: {
      filling: {
        title: "Cuire la garniture aux fruits",
        timing: "10 à 12 min, plus 1 min avec la fécule",
        heat: "Feu moyen",
        instructions: [
          "Réunissez les dés de fraises, les framboises entières, le sucre de la garniture, le jus de citron et le sirop de glucose dans une petite casserole.",
          "Faites cuire à feu moyen 10 à 12 minutes, jusqu’à obtenir une garniture épaisse et brillante.",
          "Remuez régulièrement pendant la cuisson.",
          "Écrasez légèrement quelques fraises en gardant des morceaux de fruits visibles.",
          "Si la garniture reste liquide, délayez environ 1,2 à 2,3 g de fécule de maïs dans environ 5 g d’eau froide.",
          "Incorporez la fécule délayée à la garniture trop liquide.",
          "Prolongez la cuisson d’une minute si vous avez ajouté la fécule.",
        ],
        timerLabels: ["Vérifier la garniture"],
      },
      "cool-filling": {
        title: "Laisser refroidir la garniture",
        wait: "Jusqu’à refroidissement complet",
        instructions: [
          "Retirez la garniture du feu.",
          "Laissez-la refroidir complètement.",
          "Réservez la garniture refroidie au réfrigérateur pendant la préparation de la pâte.",
        ],
      },
      batter: {
        title: "Préparer la pâte",
        tip: "Arrêtez quand la pâte est encore un peu irrégulière pour garder une mie tendre et éviter que les fruits la colorent trop.",
        instructions: [
          "Préchauffez le four à 210 °C en chaleur statique ou à 190 °C en chaleur tournante.",
          "Garnissez un moule à six muffins de grandes caissettes.",
          "Mélangez la farine, la levure chimique et le sucre de la pâte dans un saladier.",
          "Fouettez l’œuf, le beurre salé fondu, le lait, le yaourt grec et la vanille facultative dans un autre saladier.",
          "Versez le mélange liquide sur les ingrédients secs.",
          "Incorporez délicatement jusqu’à ce que la pâte soit presque homogène.",
          "Incorporez les dés de fraises et les framboises.",
        ],
      },
      fill: {
        title: "Garnir les cœurs",
        instructions: [
          "Déposez environ 40 à 45 g de pâte dans chaque caissette.",
          "Déposez environ 20 g de garniture froide au centre de chaque portion.",
          "Ajoutez de petits morceaux de fraise et une framboise sur la garniture si vous le souhaitez.",
        ],
      },
      cover: {
        title: "Recouvrir la garniture",
        instructions: ["Recouvrez entièrement chaque cœur de fruits avec environ 35 à 40 g de pâte, de façon à remplir les caissettes à environ 90 %."],
      },
      topping: {
        title: "Garnir le dessus",
        instructions: ["Déposez deux petits morceaux de fruits sur chaque muffin.", "Saupoudrez chaque muffin d’environ 1 g de sucre."],
      },
      bake: {
        title: "Commencer à four chaud",
        heat: "210 °C statique / 190 °C chaleur tournante",
        instructions: [
          "Enfournez les muffins pour 5 minutes à 210 °C en chaleur statique ou à 190 °C en chaleur tournante avant de baisser la température.",
        ],
        timerLabels: ["Baisser la température du four"],
      },
      "finish-baking": {
        title: "Terminer à four plus doux",
        heat: "180 °C statique / 160 °C chaleur tournante",
        instructions: [
          "Baissez le four à 180 °C en chaleur statique ou à 160 °C en chaleur tournante sans ouvrir la porte.",
          "Poursuivez la cuisson 14 à 16 minutes à partir du changement de température.",
          "Vérifiez au bout de 14 minutes que le dessus est doré et reprend sa forme sous le doigt.",
          "Plantez une pique dans la mie à côté du cœur de fruits.",
          "Sortez les muffins lorsque la pique ressort sans pâte crue.",
        ],
        timerLabels: ["Vérifier les muffins"],
      },
    },
    notes: [
      "Le beurre salé assaisonne la pâte. La fécule de maïs permet d’épaissir la garniture au besoin.",
      "Les quantités sont prévues pour six gros muffins. La quantité de pâte ou de garniture restante dépend de la taille des caissettes.",
      "Laissez refroidir complètement avant de conserver dans une boîte hermétique à température ambiante. Les muffins sont meilleurs dans les 2 à 3 jours. Pour en assouplir un juste avant de le manger, passez-le environ 10 à 15 secondes au micro-ondes.",
    ],
  },
  "easy-chocolate-chip-cookies": {
    totalTime: "À partir d’environ 1 h 30, plus le préchauffage et le refroidissement",
    cookingTime: "15 à 20 min par plaque",
    restTime: "1 à 24 h au frais, puis au frais pendant le préchauffage et refroidissement après cuisson",
    title: "Cookies faciles aux pépites de chocolat",
    yield: "18 cookies",
    description: "Des cookies épais aux pépites de chocolat, croustillants sur les bords et moelleux au cœur.",
    times: [
      { label: "Préparation de la pâte", value: "Environ 10 min" },
      { label: "Repos au frais", value: "1 à 24 h" },
      { label: "Cuisson", value: "15 à 20 min" },
    ],
    groupTitles: ["Pâte à cookies"],
    ingredients: {
      butter: { name: "beurre ramolli", note: "½ tasse, de préférence salé" },
      sugar: { name: "sucre", note: "1 tasse" },
      egg: { name: "œuf", note: "battu, pesé sans coquille" },
      vanilla: { name: "extrait de vanille", unit: "c. à café" },
      flour: { name: "farine de blé", note: "1¾ tasse, plus un peu pour le façonnage" },
      "baking-soda": { name: "bicarbonate de soude", unit: "c. à café" },
      salt: { name: "sel fin", quantity: "1 pincée", note: "utilisez environ 1,5 g (¼ de c. à café) si vous prenez du beurre doux" },
      "chocolate-chips": { name: "pépites de chocolat", note: "1 tasse de pépites de chocolat au lait, noir ou blanc" },
    },
    setup: ["Tapissez les plaques de papier cuisson."],
    allergens: ["Blé", "Œuf", "Lait", "Vérifiez la présence de soja et d’autres allergènes sur l’emballage des pépites."],
    storage: {
      counter: "3 à 5 jours en boîte hermétique, avec du papier cuisson entre les couches.",
      freezer: "Jusqu’à 3 mois dans une boîte ou un sachet de congélation.",
    },
    steps: {
      cream: {
        title: "Battre le beurre",
        timing: "Battre le beurre pendant 2 à 3 min",
        instructions: [
          "Battez le beurre ramolli avec le sucre pendant 2 à 3 minutes.",
          "Ajoutez l’œuf battu et la vanille.",
          "Battez jusqu’à obtenir un mélange homogène.",
        ],
      },
      mix: {
        title: "Mélanger la pâte",
        instructions: [
          "Mélangez au fouet la farine, le bicarbonate et le sel dans un autre bol.",
          "Ajoutez les pépites de chocolat aux ingrédients secs.",
          "Incorporez les ingrédients secs au beurre en trois fois, à petite vitesse, juste assez pour que la pâte se rassemble.",
        ],
      },
      chill: {
        title: "Réfrigérer la pâte",
        wait: "1 à 24 h au réfrigérateur",
        tip: "Une nuit au réfrigérateur donne des cookies plus épais et plus savoureux.",
        instructions: [
          "Déposez la pâte sur un plan de travail légèrement fariné.",
          "Rassemblez-la délicatement en boule.",
          "Emballez la boule.",
          "Réfrigérez 1 à 24 heures avant le façonnage.",
        ],
        timerLabels: ["Réfrigérer la pâte"],
      },
      shape: {
        title: "Façonner les cookies",
        wait: "Au frais jusqu’à ce que le four soit chaud",
        instructions: [
          "Divisez la pâte froide en portions de la taille d’une balle de golf.",
          "Espacez les portions sur les plaques tapissées de papier cuisson.",
          "Aplatissez légèrement le dessus avec une fourchette farinée.",
          "Enfoncez quelques pépites supplémentaires sur le dessus si vous le souhaitez.",
          "Replacez les plaques au réfrigérateur pendant le préchauffage du four à 175–180 °C.",
        ],
      },
      bake: {
        title: "Cuire les cookies",
        heat: "175–180 °C",
        instructions: [
          "Enfournez les cookies à 175–180 °C pour environ 15 à 20 minutes.",
          "Vérifiez la cuisson au bout de 15 minutes.",
          "Comptez jusqu’à 20 minutes pour des cookies plus gros ou plus froids.",
        ],
        timerLabels: ["Vérifier la cuisson des cookies"],
      },
      cool: {
        title: "Laisser refroidir les cookies",
        wait: "Jusqu’à refroidissement complet",
        options: [
          {
            title: "Bords plus croustillants",
            instructions: ["Laissez refroidir les cookies sur la plaque."],
            wait: "Sur la plaque",
          },
          {
            title: "Cookies plus moelleux",
            instructions: [
              "Transférez les cookies sur une grille dès qu’ils se tiennent assez pour être déplacés.",
              "Laissez-les refroidir sur la grille.",
            ],
            wait: "Sur une grille",
          },
        ],
        instructions: ["Sortez la plaque du four."],
      },
    },
    notes: [
      "Après une nuit au réfrigérateur, si la pâte est trop ferme pour être façonnée, laissez-la quelques minutes à température ambiante.",
    ],
    source: {
      label: "Cookies faciles aux pépites de chocolat par Rosemary Molloy",
      credit: "Adapté de la recette publiée par An Italian in My Kitchen.",
    },
  },
  "brownies-au-chocolat": {
    cookingTime: "20–25 min baking, plus melting the chocolate",
    restTime: "Until completely cool in the tin",
    title: "Chocolate Brownies",
    description: "A small dark chocolate brownie with peanuts, baked in a 10 cm tin.",
    times: [
      { label: "Tin", value: "10 cm" },
      { label: "Bake", value: "20–25 min" },
    ],
    plan: [
      { title: "Oven and tin", detail: "Preheat to 200°C and butter a 10 cm tin." },
      {
        title: "Prepare two mixtures",
        detail: "Make these separately before combining them.",
        branches: [
          { title: "Egg + sugar", detail: "Whisk for about 10 min, until tripled in volume." },
          { title: "Chocolate + butter", detail: "Melt over simmering water, then remove from the heat." },
        ],
      },
      {
        title: "Combine, bake and cool",
        detail: "Fold the flour, cocoa, peanuts and melted chocolate into the whisked egg. Check at 20 min. Cool before slicing.",
      },
    ],
    groupTitles: ["Brownie batter"],
    ingredients: {
      oeuf: { name: "egg", note: "weighed without the shell" },
      farine: { name: "flour" },
      sucre: { name: "sugar" },
      cacao: { name: "cocoa powder" },
      cacahuetes: { name: "peanuts", note: "or roasted almonds" },
      beurre: { name: "butter" },
      chocolat: { name: "dark chocolate" },
    },
    setup: ["Preheat the oven to 200°C.", "Butter a 10 cm tin."],
    allergens: ["Wheat", "Egg", "Milk", "Peanuts, or almonds if substituted", "Check the dark chocolate label for additional allergens."],
    steps: {
      fouetter: {
        title: "Whisk the egg and sugar",
        timing: "About 10 min of whisking",
        instructions: [
          "Preheat the oven to 200°C.",
          "Butter a 10 cm tin.",
          "Whisk the egg and sugar for about 10 minutes, until creamy and tripled in volume.",
        ],
        timerLabels: ["Check the whisked mixture"],
      },
      fondre: {
        title: "Melt the chocolate",
        heat: "Simmering water",
        tip: "Heat the chocolate and butter just enough to melt them.",
        instructions: ["Set a bowl over a pan of simmering water.", "Melt the chocolate and butter together in the bowl."],
      },
      melanger: {
        title: "Fold the batter",
        heat: "Off the heat",
        instructions: [
          "Lift the bowl of melted chocolate off the heat.",
          "Stir the melted chocolate and butter together.",
          "Sift the flour and cocoa over the whisked egg.",
          "Fold them in with a spatula.",
          "Fold in the chopped peanuts and the melted chocolate mixture.",
        ],
      },
      cuire: {
        title: "Bake the brownie",
        heat: "200°C",
        instructions: [
          "Scrape the batter into the buttered tin.",
          "Bake at 200°C for 20–25 minutes.",
          "Insert a skewer in the centre at 20 minutes.",
          "Continue baking if the skewer carries wet batter.",
          "Remove the tin when the skewer comes out clean or with a few moist crumbs.",
        ],
        timerLabels: ["Check the brownie"],
      },
      refroidir: {
        title: "Cool in the tin",
        wait: "Until completely cool",
        instructions: ["Leave the brownie in the tin until completely cool before slicing."],
      },
    },
    notes: [{
      text: "The skewer test and complete cooling are general brownie-making guidance.",
      source: { label: "King Arthur Baking guidance", url: "https://www.kingarthurbaking.com/recipes/quick-and-easy-brownies-recipe" },
    }],
    source: { label: "Recipe video" },
  },
};
