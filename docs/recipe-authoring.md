# Authoring and reviewing recipes

## Write the recipe

1. Check the source and any kitchen notes. Capture the yield, pan size, oven mode and ingredient weights. Keep grams primary and label converted or suggested weights as estimates.
2. Write the method as steps made of atomic instructions. Follow [Write each step](#write-each-step).
3. Use the top facts for planning. Add **Hands-on** and **Ready in** when you have measured or sourced estimates. Include waits and extra batches in elapsed time and account for work that can overlap. Show **Start ahead** for an overnight or make-ahead step and count any additional waits on serving day. State device and pan variants when they affect timing.
4. Tell the cook what they can do during a wait, when that work can genuinely overlap. Preserve dependencies such as cooling a sponge before slicing or waiting for mousse to set before adding a topping.
5. Use an **At a glance** overview when ingredients take separate paths, there is a useful order across multiple components, or the recipe spans a long wait. Keep simple methods compact. Put full quantities and instructions in the recipe and use the overview for the sequence, pan, timing or wait that the reader needs to plan around.

Verify new durations and recipe-specific doneness cues against the source or a test cook before presenting them as established. For a cooling or chilling stage with an unknown duration, give the observable endpoint or identify what still needs testing. Label sourced general techniques as such.

## Write each step

A cook reads the method mid-task, with busy hands. Each step is a short, ordered set of instructions they can follow one line at a time.

- **One step is one stage.** Give a step one action stage, one heat setting and one illustration. Start a new step when the heat changes. Taking the pan off the heat counts as a change. A step that needs two illustrations is two steps.
- **One instruction is one atomic action.** Write each `instructions` entry as a single action that starts with its verb, such as mix, whisk, heat, simmer, cut, chop, peel, grate, crush, pour, or take off the heat. Split a line that holds two actions. “Put the cornflour, sugar and water in a saucepan” and “Whisk them together” are separate entries.
- **Use plain grammar and exact words.** Keep sentences short and in the imperative. Use the accurate cooking verb. Say fold, temper or blind bake where that is what the cook does.
- **Give the cue to stop.** Attach the readiness cue to the action it ends, such as “Stir until the mix is thick and bubbling”. Keep a safety temperature in its own instruction.
- **Give durations as ranges.** Write 4–6 min in place of a single estimate. Give each step a duration. Label a range that has not been sourced or timed as an estimate in the review.
- **Mark heat and waits.** List each step’s heat setting and each wait, so the page can show them apart from the instructions.
- **Name the type of activity.** Mark each stage as prep, cooking, wait or chill, so the timeline can show long rests such as proofing.
- **Keep colour meaningful.** Give every step the `tone` of the ingredient group it belongs to. Use a separate tone for a final stage that belongs to no single component.
- **Write a choice as options.** When the cook can pick between methods, such as an oven grill or a blowtorch, write one step with labelled options. Give each option its own instructions, heat and wait. Do not blend the options into one list.
- **Use one illustration format.** Draw every step illustration in the same aspect ratio.

The [recipe template spec](product/specs/recipe-template.md) shows how the page and the print sheet present these. Each recipe page also ends with tips, nutrition per 100 g, allergens, storage times for the counter, fridge and freezer, and the source. Derive allergens from the ingredient list. Take storage times from the source or a test. Write “not tested” for a storage time you cannot support.

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
