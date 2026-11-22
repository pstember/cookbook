# Recipe template

Status: design agreed, not yet built. This spec is the base for the site revamp.

Every recipe uses the same template. It has two layouts of the same content:

- **Screen** is the recipe page on the website. Prototype: [recipe-template/screen.html](recipe-template/screen.html).
- **Print** is the sheet for a binder. The page’s **Print recipe** button produces it. Prototype: [recipe-template/print.html](recipe-template/print.html).

The prototypes are static HTML with sample content. Serve the repository root and open them in a browser, for example with `python3 -m http.server`. They load their fonts from Google Fonts. The built page must use the local fonts and stay free of runtime dependencies.

The sample content is an earlier stovetop version of the lemon meringue pie. Use it to read the layout. Take recipe facts from `public/recipes/`.

## Sections, in order

1. **Hero.** Category, title, one-line description and the recipe illustration.
2. **Highlights.** Total time, cooking time, chill and rest time, and servings.
3. **Timeline.** The stages in cooking order, sized by duration. Each block shows its name, duration and start time. Colour shows the type of activity: prep, cooking, wait or chill. A cook should see long rests, such as proofing, at a glance.
4. **Recipe chart.** A spreadsheet-style overview in the manner of Cooking For Engineers. Rows are ingredients with weights. Columns are actions, merged across the ingredients they combine. Cells where nothing happens use a secondary colour. Set-up lines, such as the tin and the oven temperature, run across the top.
5. **Ingredients.** Grouped by component. Weight in grams for every ingredient. Volume in millilitres where a jug is quicker, such as water or juice.
6. **Method.** Numbered steps. Each step has a title, a duration range, heat and wait pills, a numbered list of atomic instructions, and one illustration.
7. **Notes from the kitchen.** Tips shown as sticky notes.
8. **Nutrition** per 100 g.
9. **Allergens.**
10. **Storage.** How long the food keeps on the counter, in the fridge and in the freezer.
11. **Source.** Always last.

## Rules the template relies on

The writing rules live in the [recipe authoring guide](../../recipe-authoring.md#write-each-step). The template needs these from the recipe data:

- One stage, one heat setting and one illustration per step. A change of heat starts a new step, and off the heat counts.
- Heat pills and wait pills are separate from the instructions. Heat is orange and wait is blue.
- A step can hold a choice. It shows as a “choose one” block with labelled options. Each option has its own instructions and pills.
- Step illustrations share one aspect ratio and one size. The prototypes crop to 4:3. Existing art is a mix of square and 3:2 and needs redrawing or re-cropping.
- Durations are ranges.

## Colour

- **Screen.** Each component of a recipe has a tone, such as yellow for pastry. The tone carries through the chart, the ingredient card and the step numbers. Do not alternate tones for decoration.
- **Timeline.** Prep is yellow, cooking is orange, wait is sage and chill is blue, in both layouts.
- **Print.** One colour per category sets the rules, headings and the band across the top of the sheet. Thick lines separate components. Thin lines separate rows. Proposed colours: Desserts berry `#a12a5e`, Main dishes blue `#1d5a9e`, Sides green `#1b6b2e`, Breakfast and brunch orange `#a85400`, Baking basics brown `#6b4a2b`.

## Open points for the build

- The data model needs new fields: a step’s heat and waits, its activity type and duration range, options within a step, allergens, storage times, and volume for ingredients.
- The recipe chart replaces the At a glance plan from the format pilot. Decide whether to derive the chart from the plan data or to author it per recipe.
- The timeline runs in sequence. It does not yet show work that can overlap a wait.
- The prototypes do not cover servings scaling, timers, saved progress or French. The built page must keep them.
- Two sample steps have no illustration. The one-illustration rule will create the same gap in other recipes.
- The step times marked as estimates in the prototypes have not been tested.
