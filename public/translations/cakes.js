export default {
  "two-day-birthday-cake": {
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
    steps: {
      "make-sponge": {
        title: "Jour 1 · Préparer la génoise",
        timing: "165 °C · fouetter 8 à 10 min",
        instructions: [
          "Préchauffez le four à 165 °C. Trempez les bandes de cuisson dans l’eau et enroulez-les autour du moule préparé.",
          "Fouettez les œufs et le sucre jusqu’à ce que le mélange retombe du fouet en formant un ruban, soit environ 8 à 10 minutes. Tamisez la farine au-dessus du mélange en trois fois, en l’incorporant délicatement à chaque ajout. Incorporez le beurre fondu ou l’huile en dernier.",
        ],
      },
      bake: {
        title: "Jour 1 · Cuire et laisser reposer la génoise",
        timing: "20 cm · 25 à 30 min / 23 cm · 35 à 40 min",
        instructions: [
          "Versez la pâte dans le moule. Comptez environ 25 à 30 minutes de cuisson pour un moule de 20 cm et 35 à 40 minutes pour un moule de 23 cm.",
          "Laissez la génoise 10 minutes dans le moule, puis posez-la sur une grille. Une fois complètement refroidie, emballez-la soigneusement et laissez-la reposer une nuit à température ambiante. Placez-la au réfrigérateur s’il fait très chaud dans la cuisine.",
        ],
        tip: "Le repos d’une nuit aide la mie à se tenir à la découpe.",
        timerLabels: ["Vérifier la génoise de 20 cm", "Vérifier la génoise de 23 cm"],
      },
      filling: {
        title: "Jour 2 · Préparer la garniture aux fruits",
        timing: "Mijoter 3 à 4 min · réfrigérer 1 à 2 h",
        instructions: [
          "Faites tremper les feuilles de gélatine 5 minutes dans de l’eau glacée. Faites mijoter les dés de fraise avec le sucre et le jus de citron pendant 3 à 4 minutes.",
          "Retirez la casserole du feu. Essorez la gélatine et remuez-la dans les fruits chauds jusqu’à dissolution. Incorporez délicatement les framboises entières.",
          "Réfrigérez 1 à 2 heures, jusqu’à ce que la garniture puisse être étalée sans couler.",
        ],
        tip: "Découpez la génoise refroidie pendant que la garniture est au frais.",
        timerLabels: ["Vérifier la garniture aux fruits"],
      },
      "slice-and-whip": {
        title: "Jour 2 · Couper la génoise et fouetter la crème",
        instructions: [
          "Déballez la génoise et coupez-la horizontalement en deux disques de même épaisseur avec un couteau-scie.",
          "Fouettez le mascarpone et la crème bien froids avec le sucre glace et la vanille, jusqu’à ce que la préparation forme des pics fermes.",
        ],
        tip: "Placez le saladier et le fouet au congélateur 10 minutes avant de monter la crème.",
      },
      assemble: {
        title: "Jour 2 · Garnir et appliquer la première couche de crème",
        timing: "Réfrigérer 30 à 60 min",
        instructions: [
          "Pochez un cordon épais de crème au bord du disque inférieur. Étalez la garniture froide à l’intérieur du cordon et posez le second disque par-dessus.",
          "Étalez une fine couche de crème sur le dessus et les côtés pour fixer les miettes. Réfrigérez 30 à 60 minutes avant la finition.",
        ],
        timerLabels: ["Vérifier la première couche de crème"],
      },
      finish: {
        title: "Jour 2 · Terminer et mettre au frais",
        timing: "Réfrigérer au moins 2 h",
        instructions: [
          "Recouvrez le dessus et les côtés avec le reste de la crème au mascarpone. Réfrigérez au moins 2 heures ou jusqu’au moment de servir.",
        ],
        tip: "Trempez la lame du couteau dans l’eau chaude et essuyez-la entre chaque part.",
        timerLabels: ["Repos final minimum"],
      },
    },
  },
  "swiss-roll-with-jam": {
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
    steps: {
      fruit: {
        title: "Cuire la garniture aux fruits rouges",
        timing: "15 min de préparation active",
        instructions: [
          "Réunissez les fruits rouges, le sucre et 5 g d’eau dans une petite casserole. Faites cuire à feu moyen 5 à 7 minutes, jusqu’à ce que les fruits ramollissent et rendent leur jus.",
          "Délayez la fécule dans les 5 g d’eau restants. Versez sur les fruits et remuez jusqu’à épaississement. Ajoutez le jus de citron, transvasez dans un plat peu profond et réfrigérez jusqu’à refroidissement complet.",
        ],
        tip: "Ajustez le sucre à votre goût si les fruits sont très mûrs.",
      },
      sponge: {
        title: "Préparer et rouler la génoise",
        timing: "180 °C / 350 °F · cuire 10 à 12 min",
        instructions: [
          "Préchauffez le four à 180 °C (350 °F). Chemisez une plaque de 25 × 18 cm de papier cuisson.",
          "Fouettez les œufs et le sucre dans un récipient résistant à la chaleur, au-dessus d’une casserole d’eau frémissante, jusqu’à ce que le mélange soit tiède. Retirez le récipient de la chaleur et fouettez à grande vitesse 5 à 6 minutes, jusqu’à ce que le mélange triple de volume et forme un ruban.",
          "Incorporez la farine en deux fois, puis ajoutez délicatement le beurre fondu et la vanille. Étalez la pâte uniformément sur la plaque. Faites cuire 10 à 12 minutes, jusqu’à ce que la génoise soit dorée et souple au toucher.",
          "Retournez la génoise chaude sur un torchon propre saupoudré de sucre glace. Décollez le papier cuisson, roulez doucement la génoise avec le torchon et laissez refroidir complètement, environ 30 minutes.",
        ],
        timerLabels: ["Vérifier la cuisson de la génoise"],
      },
      buttercream: {
        title: "Monter la crème au beurre",
        timing: "Environ 20 min",
        instructions: [
          "Placez un récipient propre résistant à la chaleur au-dessus d’une casserole d’eau frémissante. Fouettez-y les blancs d’œufs et le sucre jusqu’à dissolution du sucre et jusqu’à ce que le mélange atteigne uniformément 72 °C (162 °F), mesurés avec un thermomètre de cuisine.",
          "Retirez de la chaleur. Fouettez à grande vitesse 5 à 7 minutes, jusqu’à ce que la meringue forme des pics fermes et que le bol soit froid au toucher. Incorporez le beurre ramolli morceau par morceau en fouettant, puis ajoutez la vanille et fouettez jusqu’à obtenir une crème lisse.",
        ],
      },
      assemble: {
        title: "Garnir le roulé et le mettre au frais",
        timing: "Montage 15 min · réfrigérer 20 à 30 min",
        instructions: [
          "Déroulez la génoise froide. Étalez une couche de crème au beurre de 2 à 3 mm en laissant une bordure de 1 cm, puis répartissez délicatement la garniture froide par-dessus.",
          "Roulez la génoise en serrant bien, emballez-la et réfrigérez-la 20 à 30 minutes pour qu’elle se tienne.",
        ],
        timerLabels: ["Réfrigérer le gâteau roulé"],
      },
      finish: {
        title: "Terminer et servir",
        timing: "Jusqu’à 10 min",
        instructions: [
          "Si vous le souhaitez, recouvrez le roulé du reste de crème au beurre ou saupoudrez-le de sucre glace. Découpez-le avec un couteau bien aiguisé, en essuyant la lame entre chaque part. Servez aussitôt ou réservez au réfrigérateur jusqu’au service.",
        ],
      },
    },
    source: { label: "Technique de la crème au beurre à la meringue suisse de King Arthur Baking" },
  },
  "nutella-cake": {
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
    steps: {
      ganache: {
        title: "Commencer par la ganache",
        timing: "Réfrigérer au moins 30 min",
        instructions: [
          "Chauffez la crème jusqu’aux premiers frémissements. Versez-la sur le Nutella et remuez jusqu’à obtenir une ganache lisse et brillante.",
          "Réfrigérez la ganache au moins 30 minutes avant de la fouetter.",
        ],
        timerLabels: ["Réfrigérer la ganache"],
      },
      sponge: {
        title: "Préparer et cuire la génoise",
        timing: "170 °C / 340 °F · cuire 15 à 18 min",
        instructions: [
          "Préchauffez le four à 170 °C (340 °F). Graissez un moule de 10 cm et chemisez-le de papier cuisson.",
          "Fouettez l’œuf et le sucre fin au-dessus d’une casserole d’eau frémissante pendant environ 2 minutes, jusqu’à ce que le mélange soit tiède. Retirez le bol de la chaleur et fouettez 5 à 7 minutes, jusqu’à ce que le mélange blanchisse, épaississe et triple à peu près de volume. La pâte doit former un ruban quand vous soulevez le fouet.",
          "Incorporez la farine en deux fois, puis ajoutez le beurre fondu et la vanille. Versez dans le moule et faites cuire 15 à 18 minutes. Laissez refroidir complètement.",
        ],
        timerLabels: ["Vérifier la cuisson de la génoise"],
      },
      "syrup-and-frosting": {
        title: "Préparer le sirop, la ganache montée et le glaçage",
        instructions: [
          "Mélangez le sucre blanc à l’eau chaude jusqu’à dissolution. Laissez refroidir le sirop.",
          "Fouettez vigoureusement la ganache froide pendant environ 30 secondes, jusqu’à ce qu’elle s’éclaircisse et devienne mousseuse. Dans un autre bol, fouettez le mascarpone froid et le Nutella pendant environ 1 minute, jusqu’à ce que le glaçage soit assez épais pour être étalé.",
        ],
      },
      layer: {
        title: "Monter et glacer le gâteau",
        instructions: [
          "Coupez la génoise refroidie horizontalement en trois disques de même épaisseur. Imbibez chaque disque de sirop au pinceau et répartissez la ganache montée entre les disques.",
          "Étalez le glaçage au mascarpone sur le dessus et les côtés. Ajoutez un peu de sel marin ou de noisettes concassées si vous le souhaitez.",
        ],
      },
    },
    notes: ["Conservez le gâteau terminé au réfrigérateur. Sortez-le 15 minutes avant de servir pour que la garniture s’assouplisse."],
  },
  "strawberry-raspberry-muffins": {
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
    steps: {
      filling: {
        title: "Cuire la garniture aux fruits rouges",
        timing: "10 à 12 min, hors refroidissement",
        instructions: [
          "Mettez les dés de fraise, les framboises entières, le sucre, le jus de citron et le sirop de glucose dans une petite casserole. Faites cuire à feu moyen 10 à 12 minutes, en remuant régulièrement et en écrasant légèrement une partie des fraises. La garniture doit être épaisse et brillante, avec quelques morceaux de fruits encore visibles.",
          "Si la garniture est encore liquide, délayez environ 1,2 à 2,3 g de fécule de maïs dans environ 5 g d’eau froide. Versez-la dans la casserole et poursuivez la cuisson une minute en remuant. Laissez refroidir complètement. Si elle est déjà refroidie, réfrigérez-la pendant que vous préparez la pâte.",
        ],
        timerLabels: ["Vérifier la garniture"],
      },
      batter: {
        title: "Préparer la pâte",
        timing: "Four à 210 °C / 190 °C chaleur tournante",
        instructions: [
          "Préchauffez le four à 210 °C en chaleur statique (190 °C en chaleur tournante). Garnissez un moule à six muffins de grandes caissettes en papier.",
          "Mélangez la farine, la levure chimique et le sucre. Dans un autre bol, fouettez l’œuf avec le beurre salé fondu, le lait, le yaourt grec et la vanille si vous en utilisez.",
          "Versez le mélange liquide sur les ingrédients secs et incorporez-le délicatement jusqu’à ce que la pâte soit presque homogène. Ajoutez les dés de fraise et les framboises.",
        ],
        tip: "Arrêtez de mélanger quand la pâte est encore un peu irrégulière. La mie restera tendre et les fruits coloreront moins la pâte.",
      },
      fill: {
        title: "Répartir la pâte et les fruits",
        instructions: [
          "Déposez environ 40 à 45 g de pâte dans chaque caissette. Ajoutez environ 20 g de garniture froide au centre. Si vous le souhaitez, déposez quelques petits morceaux de fraise et une framboise sur la garniture.",
          "Recouvrez de 35 à 40 g de pâte pour enfermer complètement la garniture. Servez-vous de ces poids comme repères et remplissez les caissettes à environ 90 %.",
        ],
      },
      topping: {
        title: "Garnir le dessus",
        instructions: [
          "Déposez deux petits morceaux de fruits rouges sur chaque muffin et saupoudrez chacun d’environ 1 g de sucre.",
        ],
      },
      bake: {
        title: "Cuire à deux températures",
        timing: "5 min à four chaud · 14 à 16 min à température réduite",
        instructions: [
          "Enfournez les muffins à 210 °C en chaleur statique (190 °C en chaleur tournante) et lancez le minuteur de 5 minutes.",
          "Au bout de 5 minutes, baissez à 180 °C en chaleur statique (160 °C en chaleur tournante) sans ouvrir le four. Lancez aussitôt le second minuteur. Poursuivez la cuisson 14 à 16 minutes à cette température.",
          "Les muffins sont cuits lorsque le dessus est doré et reprend légèrement sa forme sous le doigt. Une pique enfoncée dans la mie à côté du cœur de fruits doit ressortir sans pâte crue.",
        ],
        timerLabels: ["Baisser la température du four", "Vérifier les muffins"],
      },
    },
    notes: [
      "Le beurre salé assaisonne la pâte. La fécule de maïs permet d’épaissir la garniture au besoin.",
      "Les quantités sont prévues pour six gros muffins. La quantité de pâte ou de garniture restante dépend de la taille des caissettes.",
      "Laissez refroidir complètement avant de conserver dans une boîte hermétique à température ambiante. Les muffins sont meilleurs dans les 2 à 3 jours. Pour en assouplir un juste avant de le manger, passez-le environ 10 à 15 secondes au micro-ondes.",
    ],
  },
  "easy-chocolate-chip-cookies": {
    title: "Cookies faciles aux pépites de chocolat",
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
    steps: {
      mix: {
        title: "Préparer la pâte",
        instructions: [
          "Battez le beurre ramolli avec le sucre pendant 2 à 3 minutes. Ajoutez l’œuf battu et la vanille, puis mélangez jusqu’à ce que la préparation soit homogène.",
          "Mélangez au fouet la farine, le bicarbonate et le sel, puis ajoutez les pépites de chocolat. Incorporez le mélange sec au beurre en trois fois, à vitesse lente, juste assez pour que la pâte se rassemble.",
        ],
      },
      chill: {
        title: "Réfrigérer la pâte",
        timing: "1 à 24 h",
        instructions: [
          "Déposez la pâte sur un plan de travail légèrement fariné. Rassemblez-la délicatement, façonnez une boule et emballez-la. Réfrigérez au moins 1 heure et jusqu’à 24 heures.",
        ],
        tip: "Le repos au frais limite l’étalement de la pâte. Une nuit au réfrigérateur donne des cookies plus épais et plus savoureux.",
        timerLabels: ["Réfrigérer la pâte"],
      },
      shape: {
        title: "Façonner les cookies",
        instructions: [
          "Divisez la pâte froide en portions de la taille d’une balle de golf. Disposez-les en les espaçant sur des plaques recouvertes de papier cuisson et aplatissez légèrement le dessus avec une fourchette farinée. Si vous le souhaitez, enfoncez quelques pépites supplémentaires sur le dessus.",
          "Remettez les plaques au réfrigérateur pendant que le four chauffe à 175–180 °C.",
        ],
      },
      bake: {
        title: "Cuire et laisser refroidir",
        timing: "175–180 °C · environ 15 à 20 min",
        instructions: [
          "Faites cuire environ 15 minutes, puis vérifiez la cuisson. Les cookies plus gros ou plus froids peuvent demander jusqu’à 20 minutes. Laissez refroidir avant de servir.",
        ],
        tip: "Laissez les cookies refroidir sur la plaque pour un extérieur plus croustillant. Pour un résultat plus moelleux, transférez-les sur une grille dès qu’ils sont assez fermes pour être déplacés.",
        timerLabels: ["Vérifier la cuisson des cookies"],
      },
    },
    notes: [
      "Conservez 3 à 5 jours à température ambiante dans une boîte hermétique, avec du papier cuisson entre les couches.",
      "Congelez dans une boîte ou un sachet adapté jusqu’à 3 mois.",
    ],
    source: {
      label: "Cookies faciles aux pépites de chocolat par Rosemary Molloy",
      credit: "Adapté de la recette publiée par An Italian in My Kitchen.",
    },
  },
  "brownies-au-chocolat": {
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
    steps: {
      fouetter: {
        title: "Whisk the egg and sugar",
        timing: "Oven at 200°C · whisk for 10 min",
        instructions: [
          "Preheat the oven to 200°C and butter a 10 cm tin.",
          "Whisk the egg and sugar for about 10 minutes, until creamy and tripled in volume.",
        ],
        timerLabels: ["Check the whisked mixture"],
      },
      fondre: {
        title: "Melt the chocolate",
        instructions: [
          "Melt the chocolate and butter in a bowl set over simmering water. As soon as both have melted, take the bowl off the heat and stir.",
        ],
        tip: "Heat the chocolate and butter just enough to melt them.",
      },
      melanger: {
        title: "Mix and bake",
        timing: "200°C · 20–25 min",
        instructions: [
          "Sift the flour and cocoa powder over the whisked egg and fold in with a spatula. Add the chopped peanuts and the chocolate and butter mixture.",
          "Pour the batter into the buttered tin and bake for 20–25 minutes.",
          "Check at 20 minutes. A skewer inserted in the centre can come out with a few moist crumbs. Keep baking if you see wet batter on the skewer.",
          "Let the brownie cool completely in the tin before slicing.",
        ],
        timerLabels: ["Check the brownie"],
      },
    },
    notes: [{
      text: "The skewer test and complete cooling are general brownie-making guidance.",
      source: { label: "King Arthur Baking guidance", url: "https://www.kingarthurbaking.com/recipes/quick-and-easy-brownies-recipe" },
    }],
    source: { label: "Recipe video" },
  },
};
