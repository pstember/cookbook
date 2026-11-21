// Ingredient reference data per 100 g of edible ingredient.
// The salt field is grams. CoFID and USDA sodium is converted from mg by multiplying by 0.0025.
const cofid = "https://www.gov.uk/government/publications/composition-of-foods-integrated-dataset-cofid";
const usdaFruit = "https://www.ars.usda.gov/ARSUserFiles/80400535/Data/SR/SR28/reports/sr28fg09.pdf";

export const foodData = {
  flour: {
    source: "McDougalls plain flour label",
    url: "https://www.mcdougalls.co.uk/products/plain-flour/",
    kj: 1442, kcal: 340, fat: 1.3, saturates: 0.2, carbs: 70.1, sugars: 1.4, fibre: 3.2, protein: 10.4, salt: 0,
  },
  butter: {
    source: "CoFID 17-661, unsalted butter", url: cofid,
    kj: 3059, kcal: 744, fat: 82.2, saturates: 52.09, carbs: 0.6, sugars: 0.6, fibre: 0, protein: 0.6, salt: 8 * 0.0025,
  },
  sugar: {
    source: "Silver Spoon caster sugar label",
    url: "https://www.tesco.com/shop/en-GB/products/301965329",
    kj: 1700, kcal: 400, fat: 0, saturates: 0, carbs: 100, sugars: 100, fibre: 0, protein: 0, salt: 0,
  },
  yolk: {
    source: "CoFID 12-939, raw egg yolk", url: cofid,
    kj: 1437, kcal: 347, fat: 31.3, saturates: 8.81, carbs: 0, sugars: 0, fibre: 0, protein: 16.4, salt: 52 * 0.0025,
  },
  white: {
    source: "CoFID 12-938, raw egg white", url: cofid,
    kj: 184, kcal: 43, fat: 0, saturates: 0, carbs: 0, sugars: 0, fibre: 0, protein: 10.8, salt: 185 * 0.0025,
  },
  egg: {
    source: "CoFID 12-937, raw whole egg", url: cofid,
    kj: 547, kcal: 131, fat: 9, saturates: 2.52, carbs: 0, sugars: 0, fibre: 0, protein: 12.6, salt: 154 * 0.0025,
  },
  juice: {
    source: "CoFID 14-277, fresh lemon juice", url: cofid,
    // Glucose and fructose are already in grams. Convert sucrose from monosaccharide equivalents.
    kj: 31, kcal: 7, fat: 0, saturates: 0, carbs: 0.5 + 0.9 + 0.2 * 0.95,
    sugars: 0.5 + 0.9 + 0.2 * 0.95, fibre: 0.1, protein: 0.3, salt: 1 * 0.0025,
  },
  zest: {
    source: "USDA SR28 NDB 09156, raw lemon peel", url: usdaFruit,
    kj: 197, kcal: 47, fat: 0.3, saturates: 0.039, carbs: 16 - 10.6, sugars: 4.17, fibre: 10.6, protein: 1.5, salt: 6 * 0.0025,
  },
  cornflour: {
    source: "Tesco cornflour label", url: "https://www.tesco.com/shop/en-GB/products/254881569",
    kj: 1517.6, kcal: 357.2, fat: 0.4, saturates: 0, carbs: 88, sugars: 0, fibre: 0, protein: 0.4, salt: 0.1,
  },
  water: { kj: 0, kcal: 0, fat: 0, saturates: 0, carbs: 0, sugars: 0, fibre: 0, protein: 0, salt: 0 },
};
