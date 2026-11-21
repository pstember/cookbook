export default {
  id: "pulled-pork",
  title: "Barbecue Pulled Pork",
  category: "Main dishes",
  description: "Slow-cooked pork with a smoky paprika rub, cider vinegar and a little honey.",
  times: [
    { label: "Cook", value: "About 7 hr", icon: "oven" },
    { label: "Rest", value: "40 min", icon: "clock" },
  ],
  groups: [
    {
      title: "Pork",
      tone: "blue",
      ingredients: [
        { id: "pork", name: "pork shoulder" },
        { id: "vinegar", name: "apple cider vinegar", note: "for spraying and wrapping" },
        { id: "honey", name: "honey", note: "a little, for wrapping" },
      ],
    },
    {
      title: "Dry rub",
      tone: "pink",
      ingredients: [
        { id: "paprika", name: "paprika", grams: 30 },
        { id: "sugar", name: "dark brown sugar", grams: 35 },
        { id: "salt", name: "kosher salt", grams: 20 },
        { id: "mustard", name: "ground mustard", quantity: 4, unit: "tsp" },
        { id: "pepper", name: "freshly ground black pepper", grams: 4 },
        { id: "chipotle", name: "chipotle flakes", grams: 2 },
        { id: "oregano", name: "dried oregano", grams: 3 },
        { id: "garlic", name: "granulated garlic powder", grams: 5 },
        { id: "onion", name: "granulated onion powder", grams: 5 },
      ],
    },
  ],
  steps: [
    {
      id: "heat", title: "Prepare the barbecue and rub",
      timing: "135°C / 275°F",
      instructions: [
        "Set the barbecue up for indirect cooking. Aim to hold the cooking chamber at 135°C (275°F). As the chamber passes 93°C (200°F) during warm-up, start easing the vents closed to avoid overshooting.",
        "Mix the dry rub and coat the outside of the pork evenly.",
      ],
    },
    {
      id: "spritz", title: "Cook and spritz",
      timing: "First spray after 1–2 hr",
      instructions: [
        "Put the pork on the barbecue and leave it undisturbed for 1–2 hours. Spritz it with apple cider vinegar, then repeat every 45–60 minutes.",
        "Continue until the centre is about 71°C (160°F). Begin checking around the four-hour mark.",
      ],
    },
    {
      id: "wrap", title: "Wrap and cook until tender",
      timing: "96°C / 205°F internal",
      instructions: [
        "Wrap the pork tightly in foil with a final splash of vinegar and a little honey. Return it to the barbecue.",
        "When the centre is about 96°C (205°F), check that a probe slides into the meat with very little resistance. Give it longer if the meat still feels firm. The total cook was estimated at about seven hours.",
      ],
    },
    {
      id: "pull", title: "Vent, rest and pull",
      timing: "10 min vent · 30 min rest",
      instructions: [
        "Take the pork off the barbecue and open the foil to let steam escape for 10 minutes. Cover it again and rest for 30 minutes, then pull the meat into shreds.",
      ],
      timers: [{ label: "Vent the foil", minutes: 10 }, { label: "Rest the pork", minutes: 30 }],
    },
  ],
  notes: ["Cook time varies with the size of the joint and how steadily the barbecue holds its heat."],
};
