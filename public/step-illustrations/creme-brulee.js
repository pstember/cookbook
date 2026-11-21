export default {
  mix: {
    before: ["milk", "egg"],
    focus: "bowl",
    tool: "whisk",
    after: "ramekin",
    motion: "stir",
    en: "Whisk the eggs gently into the cream mixture, then pour the custard into ovenproof ramekins.",
    fr: "Incorporez doucement les œufs au fouet, puis versez la crème dans des ramequins allant au four.",
  },
  bake: {
    before: ["ramekin"],
    focus: "oven",
    after: "ramekin",
    motion: "heat",
    en: "Bake with steam at 100°C. Look for set edges and a centre that still wobbles slightly.",
    fr: "Faites cuire à la vapeur à 100 °C. Les bords doivent être pris et le centre encore légèrement tremblotant.",
  },
  chill: {
    before: ["timer"],
    focus: "fridge",
    after: "ramekin",
    motion: "chill",
    en: "Let the ramekins cool, then refrigerate for a few hours until the custard is fully set.",
    fr: "Laissez refroidir les ramequins, puis réfrigérez-les quelques heures jusqu’à ce que la crème soit bien prise.",
  },
};
