# Recipe template

Implemented for all recipes in English and French.

Every recipe uses the same template. It has two layouts of the same content:

- **Screen** is the recipe page on the website. Prototype: [recipe-template/screen.html](recipe-template/screen.html).
- **Print** is the sheet for a binder. The page’s **Print recipe** button produces it. Prototype: [recipe-template/print.html](recipe-template/print.html).

The prototypes are static HTML with sample content. Serve the repository root and open them in a browser, for example with `python3 -m http.server`. They load their fonts from Google Fonts. The published page uses local fonts and has no runtime dependencies.

The sample content is an earlier stovetop version of the lemon meringue pie. Use it to read the layout. Take recipe facts from `public/recipes/`.

## Sections, in order

1. **Hero.** Category, title, one-line description and the recipe illustration.
2. **Highlights.** Total time, cooking time, chill and rest time, and servings.
3. **Timeline.** The stages in cooking order, sized by duration. Each block shows the stage name and its recorded timing or readiness cue. It links to the method and gives a start time while the elapsed range is known. Colour shows the type of activity: prep, cooking, wait or chill. A cook should see long rests, such as proofing, at a glance.
4. **Recipe chart.** A spreadsheet-style overview in the manner of Cooking For Engineers. Rows are ingredients with weights. Columns are actions, merged across the ingredients they combine. Cells where nothing happens use a secondary colour. Set-up lines, such as the tin and the oven temperature, run across the top.
5. **Ingredients.** Grouped by component. Weight in grams for every ingredient. Volume in millilitres where a jug is quicker, such as water or juice.
6. **Method.** Numbered steps. Each step has a title, numbered atomic instructions and one illustration. Show the recorded duration, heat setting and waits where the source provides them.
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
- Use a single 640 × 480 WebP per step, with captions in both languages. Use the same dimensions and format for hero and catalogue recipe artwork.
- Keep sourced ranges, fixed times, minimums and per-batch qualifiers. Display unknown durations explicitly.

## Colour

- **Screen.** Each component of a recipe has a tone, such as yellow for pastry. The tone carries through the chart, the ingredient card and the step numbers. Do not alternate tones for decoration.
- **Timeline.** Prep is yellow, cooking is orange, wait is sage and chill is blue, in both layouts.
- **Print.** One colour per category sets the rules, headings and the band across the top of the sheet. Thick lines separate components. Thin lines separate rows. Category colours are Desserts berry `#a12a5e`, Main dishes blue `#1d5a9e`, Sides green `#1b6b2e`, Breakfast and brunch orange `#a85400`, Baking basics brown `#6b4a2b`.

## Implementation

The chart reads the recipe’s ingredient groups and each step’s `uses` list. Independent ingredient flows can share a column. The timeline follows method order. A step’s instructions or kitchen note can identify work that fits into a wait. Published recipes retain serving controls for verified batches, instruction-linked timers and saved checklist progress. The print sheet uses the selected language and batch.

Recipe facts come from the source or kitchen notes. Missing timed observations, storage trials and nutrition inputs are shown as unavailable. Field conventions and review steps are in the [authoring guide](../../recipe-authoring.md).
