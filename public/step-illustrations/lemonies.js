export default {
  prepare: {
    before: ["parchment"],
    focus: "square-tin",
    motion: "layer",
    en: "Line the greased square tin, leaving two parchment tabs to lift the bake out later.",
    fr: "Chemisez le moule carré graissé en laissant dépasser deux languettes de papier pour démouler le gâteau.",
  },
  mix: {
    before: ["egg", "lemon"],
    focus: "bowl",
    tool: "whisk",
    motion: "stir",
    en: "Beat in the eggs one at a time, then mix in the lemon and sifted dry ingredients until the batter is smooth.",
    fr: "Incorporez les œufs un à un, puis mélangez le citron et les ingrédients secs tamisés jusqu’à obtenir une pâte lisse.",
  },
  bake: {
    before: ["tin"],
    focus: "oven",
    after: "sponge",
    motion: "heat",
    en: "At 165°C fan, start checking at 15 minutes for a lightly golden surface.",
    fr: "À 165 °C en chaleur tournante, vérifiez dès 15 minutes que la surface est légèrement dorée.",
  },
  glaze: {
    before: ["bowl"],
    focus: "sponge",
    tool: "spatula",
    after: "lemon-squares",
    motion: "spread",
    en: "Spread the lemon glaze, let it set, then cut the slab into nine squares.",
    fr: "Étalez le glaçage au citron, laissez-le figer puis découpez le gâteau en neuf carrés.",
  },
};
