export default {
  id: "chicken-nuggets",
  title: "Air-Fryer Chicken Nuggets",
  category: "Main dishes",
  description: "Carrot and onion chicken nuggets with parsley potatoes and a chunky apple compote.",
  servings: 3,
  groups: [
    {
      title: "Chicken nuggets",
      tone: "yellow",
      ingredients: [
        { id: "chicken", name: "boneless, skinless chicken thigh", grams: 650 },
        { id: "egg", name: "large egg", quantity: 1, note: "about 60 g without the shell" },
        { id: "milk", name: "milk or cream", grams: 25, note: "about 25 ml" },
        { id: "breadcrumbs", name: "breadcrumbs", grams: 65 },
        { id: "flour", name: "plain flour", grams: 35 },
        { id: "carrot", name: "carrot", grams: 65, note: "very finely grated" },
        { id: "onion", name: "onion", grams: 40, note: "very finely grated" },
        { id: "nugget-salt", name: "salt", quantity: "1¼", unit: "tsp", note: "about 7 g" },
        { id: "paprika", name: "sweet paprika", quantity: "½", unit: "tsp", note: "about 1 g" },
        { id: "thyme", name: "dried thyme", quantity: "¼", unit: "tsp", note: "about 0.3 g" },
        { id: "nugget-oil", name: "neutral oil", grams: 15, note: "sunflower or rapeseed" },
      ],
    },
    {
      title: "Parsley potatoes",
      tone: "blue",
      ingredients: [
        { id: "potatoes", name: "potatoes", grams: 900, note: "peeled" },
        { id: "butter", name: "butter", grams: 20 },
        { id: "potato-oil", name: "olive or rapeseed oil", grams: 15 },
        { id: "potato-salt", name: "salt", quantity: "¾", unit: "tsp", note: "about 4 g" },
        { id: "parsley", name: "fresh parsley", quantity: 2, unit: "tbsp", note: "finely chopped, about 8–10 g" },
      ],
    },
    {
      title: "Apple compote",
      tone: "pink",
      art: "saucepan",
      ingredients: [
        { id: "apples", name: "medium apples", quantity: 5, note: "about 750 g before peeling" },
        { id: "water", name: "water", quantity: 70, unit: "ml" },
        { id: "cinnamon", name: "cinnamon", quantity: "A tiny pinch", note: "optional" },
      ],
    },
  ],
  steps: [
    {
      id: "compote", title: "Simmer the apples", art: "saucepan",
      timing: "12–15 min",
      instructions: [
        "Peel and core the apples, then cut them into 1–2 cm pieces. Put them in a saucepan with the water and optional cinnamon.",
        "Cover and cook over medium heat for 12–15 minutes. Crush the softened apples with a fork, keeping some texture, and leave the compote to cool.",
      ],
      timers: [{ label: "Simmer the compote", minutes: 12 }],
    },
    {
      id: "potatoes", title: "Boil and roast the potatoes", art: "oven",
      timing: "10–12 min on the hob · 15–20 min in the oven",
      instructions: [
        "Cut the potatoes into 1.5 cm cubes. Start them in cold salted water and bring to a gentle boil. Cook for 10–12 minutes, drain and leave to steam-dry for 2 minutes.",
        "Heat the oven to 200°C (180°C fan). Toss the potatoes with the butter and oil and roast for 15–20 minutes, turning halfway. Toss gently with the parsley after roasting.",
      ],
      timers: [{ label: "Boil the potatoes", minutes: 10 }, { label: "Roast the potatoes", minutes: 15 }],
    },
    {
      id: "shape", title: "Blend, shape and coat",
      instructions: [
        "Pulse the chicken, egg, milk, salt, paprika and thyme in a blender or food processor for 5–7 short bursts, until you have a thick paste.",
        "Squeeze the grated carrot and onion dry and mix them into the chicken. Shape small nuggets with damp hands, then roll each in a light coating of flour followed by breadcrumbs.",
      ],
    },
    {
      id: "fry", title: "Air-fry the nuggets", art: "oven",
      timing: "180°C · 10–12 min",
      instructions: [
        "Preheat the air fryer to 180°C for 3–5 minutes. Brush the nuggets lightly with oil and arrange in a single layer. Work in batches if needed.",
        "Cook for 10–12 minutes, turning halfway. Check that the thickest nuggets reach 74°C (165°F) at the centre. Cook longer if needed. Serve with the potatoes and compote.",
      ],
      timers: [{ label: "Check the nuggets", minutes: 10 }],
    },
  ],
  notes: [
    "Season adult portions with black pepper or smoked paprika after cooking.",
    "For a softer crust, coat the nuggets in breadcrumbs alone.",
    "Swap the carrot for the same weight of courgette or celeriac and squeeze it equally dry. Buttered couscous or small pasta shells can replace the potatoes.",
    "To cook nuggets frozen from raw, start checking about 3–4 minutes later at the same setting and continue until each batch reaches the same internal temperature.",
  ],
  safety: {
    title: "Check the nuggets",
    notes: [{ text: "Use a food thermometer in the thickest part of a large nugget to confirm it reaches 74°C (165°F), including when cooking from frozen." }],
    sources: [{ label: "FoodSafety.gov cooking temperatures", url: "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures" }],
  },
};
