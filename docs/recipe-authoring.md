# Authoring and reviewing recipes

## Write the recipe

1. Check the source and any kitchen notes. Capture the yield, pan size, oven mode and ingredient weights. Keep grams primary and label converted or suggested weights as estimates.
2. Start each numbered step with a clear action. Within a step, give each change of heat, equipment, or waiting stage its own short paragraph. Add a readiness cue where it affects the next action. Use a visible texture, a thermometer reading with a named source for safety claims, or a specific action such as lowering the oven temperature.
3. Use the top facts for planning. Add **Hands-on** and **Ready in** when you have measured or sourced estimates. Include waits and extra batches in elapsed time and account for work that can overlap. Show **Start ahead** for an overnight or make-ahead step and count any additional waits on serving day. State device and pan variants when they affect timing.
4. Tell the cook what they can do during a wait, when that work can genuinely overlap. Preserve dependencies such as cooling a sponge before slicing or waiting for mousse to set before adding a topping.
5. Use an **At a glance** overview when ingredients take separate paths, there is a useful order across multiple components, or the recipe spans a long wait. Keep simple methods compact. Put full quantities and instructions in the recipe and use the overview for the sequence, pan, timing or wait that the reader needs to plan around.

Verify new durations and recipe-specific doneness cues against the source or a test cook before presenting them as established. For a cooling or chilling stage with an unknown duration, give the observable endpoint or identify what still needs testing. Label sourced general techniques as such.

## Add timing and overview data

- Put recipe-level planning information in `times`.
- In `steps`, put a timer beside its starting paragraph by setting `afterInstruction` on the timer to that paragraph’s one-based position. Write the duration, starting event and next action in the method so the print version is usable. For a range, put the countdown at the first check and describe what to look for. For a fixed handoff, name the action the cook takes when time is up. Offer separate timers for equipment variants only when their timings differ.
- Define an optional ordered `plan` in the recipe module. Each entry has a `title`, a short `detail`, and an optional `step` linking to an existing step ID. Use `branches` for components prepared separately that come together at the next stage. The branch entries use the same fields.
- In the matching `public/translations/` entry, translate `times`, `plan` titles and details, and `timerLabels` in the same order as the source. Keep step links, timer durations and paragraph positions in the source recipe. Keep English and French instruction paragraphs in the same order.
- Preserve recipe, ingredient and step IDs when they still describe the same item or action. The page uses IDs for saved progress, step links and artwork. Pair every numbered step with recipe-specific illustrations and captions in both languages.

## Pilot examples

| Recipe | Pattern |
| --- | --- |
| [Chocolate Brownies](../public/recipes/desserts/brownies-au-chocolat.js) | Separate egg and chocolate mixtures come together before baking. The method gives a sourced general doneness cue and a cooling endpoint. |
| [Strawberry–Raspberry Muffins](../public/recipes/desserts/strawberry-raspberry-muffins.js) | One timer prompts a heat change and the next prompts a doneness check. Each sits after its own starting instruction. |
| [Two-Day Birthday Cake](../public/recipes/desserts/two-day-birthday-cake.js) | An overnight rest and three Day 2 waits appear in the schedule. Slicing the sponge can overlap the filling chill. |

The compact ingredient layout was informed by [Michael Chu’s Cooking For Engineers recipe card](https://www.cookingforengineers.com/recipe/108/Banana-Nut-Bread/trn).

## Review before publication

1. Read the method in both languages from setup to serving. Check that the overview agrees with it. Walk through each timed handoff and confirm the cook can tell when to start, what to do when time is up, and when the next stage can begin.
2. Check `npm run check` and preview the affected recipes at phone and desktop widths and in print. Try the step links, timer starts and cancels, and checklists.
3. Record the timings, cues or equipment variants that still need a kitchen test in the review. During collection rollout, handle recipes with long waits or multiple components first, then apply the same checks to simpler recipes.
