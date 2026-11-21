export default {
  heat: {
    before: ["milk", "cream"],
    focus: "saucepan",
    motion: "heat",
    en: "Heat the dairy and vanilla just until it comes to a boil. Soak the gelatine separately in cold water.",
    fr: "Portez le lait, la crème et la vanille juste à ébullition. Faites tremper la gélatine à part dans de l’eau froide.",
  },
  dissolve: {
    before: ["gelatine"],
    focus: "saucepan",
    tool: "spoon",
    motion: "stir",
    en: "Off the heat, squeeze out the gelatine and stir it into the hot cream until it disappears.",
    fr: "Hors du feu, essorez la gélatine et remuez-la dans la crème chaude jusqu’à dissolution.",
  },
  set: {
    before: ["saucepan"],
    focus: "ramekin",
    after: "fridge",
    motion: "pour",
    en: "Pour into ramekins, let them cool, then chill for about four hours until set.",
    fr: "Versez dans les ramequins, laissez refroidir puis réfrigérez environ quatre heures, jusqu’à ce que la crème soit prise.",
  },
};
