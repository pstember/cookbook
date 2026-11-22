# Authoring and reviewing recipes

## Write the recipe

1. Check the source and any kitchen notes. Capture the yield, pan size, oven mode and ingredient weights. Keep grams primary and label converted or suggested weights as estimates. For a sourced liquid measure use `quantity` and a metric volume `unit`, or `volumeMl` for an explicit millilitre value.
2. Write the method as steps made of atomic instructions. Follow [Write each step](#write-each-step).
3. Use the highlights for total time, cooking, chill and rest, and servings or yield. Record a whole-recipe time when the source or a kitchen test accounts for waits, extra batches and overlapping work. Keep start-ahead notes for overnight recipes and preserve equipment variants that affect timing.
4. Tell the cook what they can do during a wait, when that work can genuinely overlap. Set `during` to the earlier step’s ID when the source explicitly supports that overlap. Preserve dependencies such as cooling a sponge before slicing or waiting for mousse to set before adding a topping.
5. Link ingredients to the stages that use them. The screen and binder layouts build the same chart from those links. Put pan sizes, oven settings and other setup details in `setup` when the source supplies them.

Verify new durations and recipe-specific doneness cues against the source or a test cook before presenting them as established. For a cooling or chilling stage with an unknown duration, give the observable endpoint or identify what still needs testing. Label sourced general techniques as such.

## Write each step

A cook reads the method mid-task, with busy hands. Each step is a short, ordered set of instructions they can follow one line at a time.

- **One step is one stage.** Give a step one action stage, one heat setting and one illustration. Start a new step when the heat changes. Taking the pan off the heat counts as a change. A step that needs two illustrations is two steps.
- **One instruction is one atomic action.** Write each `instructions` entry as a single action that starts with its verb, such as mix, whisk, heat, simmer, cut, chop, peel, grate, crush, pour, or take off the heat. Split a line that holds two actions. “Put the cornflour, sugar and water in a saucepan” and “Whisk them together” are separate entries.
- **Use plain grammar and exact words.** Keep sentences short and in the imperative. Use the accurate cooking verb. Say fold, temper or blind bake where that is what the cook does.
- **Give the cue to stop.** Attach the readiness cue to the action it ends, such as “Stir until the mix is thick and bubbling”. Keep a safety temperature in its own instruction.
- **Preserve the source time.** Set `duration` to a pair of minutes, such as `[4, 6]` for a range or `[5, 5]` for a fixed five minutes. Fractions of a minute are supported. Keep qualifiers and equipment variants in localized `timing`. Use the observable endpoint when the duration is unknown.
- **Mark heat and waits.** Use localized `heat` and `wait` strings when a stage has a heat setting or a wait.
- **Name the activity.** Set `activity` to `prep`, `cooking`, `wait` or `chill`. Mark a sourced minimum with `durationMinimum: true`, a per-batch duration with `durationPerBatch: true`, and an optional stage with `optional: true`.
- **Keep colour meaningful.** Give every step the `tone` of the ingredient group it belongs to. Use a separate tone for a final stage that belongs to no single component.
- **Write a choice as options.** When the cook can pick between methods, such as an oven grill or a blowtorch, give the step an `options` array. Give each option its own `title` and `instructions`, plus `heat` and `wait` where applicable.
- **Illustrate the action.** Give each step one 640 × 480 WebP and short English and French captions. Follow the [design system](design-system.md#step-illustrations).

The [recipe template spec](product/specs/recipe-template.md) shows how the page and the print sheet present these. Each recipe page also ends with tips, nutrition per 100 g, allergens, storage times for the counter, fridge and freezer, and the source. Derive allergens from the ingredient list. Record supported storage guidance in `storage.counter`, `storage.fridge` and `storage.freezer`. Omit an unsupported entry and the page displays “Not tested” in the selected language.

## Connect the chart, timeline and timers

- Put recipe-level planning facts in `times`. Use `highlight` with `total`, `cook` or `rest` for a sourced whole-recipe time. Preserve any equipment and batch qualifiers in its translated value.
- Set each timer’s `afterInstruction` to the one-based number of the instruction that starts it. Write the duration, starting event and next action in the method so the print version is usable. For a range, put the countdown at the first check and describe what to look for. For a fixed handoff, name the action the cook takes when time is up. Offer separate timers for equipment variants only when their timings differ.
- Set each step’s `uses` to the IDs of the ingredients involved. For a mixed component, include the ingredients already combined as well as any additions. Groups provide the ingredient rows and tones. Independent components can share a chart column until a step brings them together.
- In the matching `public/translations/` entry, translate the setup, timing, instructions, heat and wait pills, choices, kitchen notes, allergens, storage and source credit. Keep translated instructions, options and `timerLabels` in source order. Keep IDs, weights, duration values and timer positions in the source recipe.
- Preserve recipe, ingredient and step IDs when they still describe the same item or action. The page uses IDs for saved progress, step links and artwork. Use each step ID for its illustration filename and caption entry.

## Examples

| Recipe | Pattern |
| --- | --- |
| [Chocolate Brownies](../public/recipes/desserts/brownies-au-chocolat.js) | Separate egg and chocolate mixtures come together before baking. The method gives a sourced general doneness cue and a cooling endpoint. |
| [Strawberry–Raspberry Muffins](../public/recipes/desserts/strawberry-raspberry-muffins.js) | One timer prompts a heat change and the next prompts a doneness check. Each sits after its own starting instruction. |
| [Two-Day Birthday Cake](../public/recipes/desserts/two-day-birthday-cake.js) | An overnight rest and three Day 2 waits appear in the schedule. Slicing the sponge can overlap the filling chill. |

The compact ingredient layout was informed by [Michael Chu’s Cooking For Engineers recipe card](https://www.cookingforengineers.com/recipe/108/Banana-Nut-Bread/trn).

## Review before publication

1. Read the method in both languages from setup to serving. Check that the chart places each ingredient in the right stage and that the timeline preserves long and open-ended waits. Walk through each timed handoff and confirm the cook can tell when to start, what to do when time is up, and when the next stage can begin.
2. Check `npm run check` and preview the affected recipes at phone and desktop widths and in print. Try step links, timer starts and cancels, checklists, and serving changes where available. Check that chart weights match the checklist in print.
3. Record the timings, cues or equipment variants that still need a kitchen test in the review.
