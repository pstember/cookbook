# Cookbook

The Little Cookbook is an illustrated recipe collection drawn from the author’s Notion cookbook. Browse by category and open a recipe in English or French for ingredients, illustrated steps and cooking notes. Recipes with verified batch quantities can scale, and recipes with sourced ingredient data and finished yields include nutrition estimates per 100 g.

## Run locally

With Python 3 and Node.js installed, run:

```sh
npm run dev
```

Open [the cookbook](http://127.0.0.1:8000) in a browser. The page uses native JavaScript modules. You can also serve `public/` with any static HTTP server. The local preview serves the same files that GitHub Pages publishes.

Run `npm run check` to check the JavaScript, recipe structure, catalogue registration, translations, artwork, ingredient weights and nutrition calculations.

## Publish to GitHub Pages

In the repository’s **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. The included workflow publishes `public/` on pushes to `main` and can also be run from the **Actions** tab. GitHub Pages serves the HTML, CSS, JavaScript and images directly. The workflow runs the cookbook checks before uploading the files as they are.

## Edit or add a recipe

- The screen and binder print layouts use the same recipe data in both languages. Follow the [recipe authoring guide](docs/recipe-authoring.md) for the timeline, ingredient chart and illustrated method.
- Edit `public/recipes/desserts/lemon-meringue-pie.js` for ingredients, steps, safety notes and the estimated finished weight. Ingredient weights in grams drive both the checklist and the nutrition calculation.
- Add data files under category directories such as `public/recipes/breads/` and register them in `public/recipes/index.js`. Registered recipes appear on the home page grouped by category. Each recipe has a direct link at `/recipe.html?recipe=<id>` relative to the site’s root. Add `&lang=fr` to share a French recipe link.
- Give each recipe a stable `id`, a `title`, and a `category`. Put ingredient checklists in `groups` and numbered instructions in `steps`. A recipe can also include `times`, `servings` or `yield`, `notes`, `related` recipe IDs and a public `source`. Give every ingredient a gram weight. Use `grams` for a single weight, `gramRange: [min, max]` for a range, or `gramVariants` for ordered batch options. Keep `quantity` and `unit` when the source measure adds useful context. Set `lang: "fr"` for French recipe copy.
- Add the second language in `public/translations/`. Key the copy by recipe ID, then by ingredient and step IDs. Keep group titles, timing labels and timer labels in the same order as the source. Ingredient weights, serving numbers and timer durations come from the source recipe.
- Keep ingredient reference values and their sources in `public/recipes/nutrition-data.js`. Values describe 100 g of edible ingredient. The renderer sums the nutrient contribution of each ingredient and divides by the finished batch weight to display values per 100 g of finished food.
- Use 640 × 480 WebP artwork for the hero, catalogue and method. Give each numbered step one illustration and caption it in both languages. The design system documents file locations and naming.
- The [design system](docs/design-system.md) describes the shared typography, colours, cards and controls.
- The catalogue and recipe templates live in `public/index.html` and `public/recipe.html`. Their styling and interactions live in `public/assets/` and `public/src/`.

The pie uses a shortcrust adapted from Angela Nilsen’s Good Food recipe, an oven-baked lemon filling from the supplied recipe, and Swiss meringue. The page’s nutrition notes name the reference data and explain the estimated yield. [Good Food recipe](https://www.bbcgoodfood.com/recipes/ultimate-lemon-meringue-pie)

## Ingredient weight conventions

Grams are required in both languages. Use the recipe’s stated weight where available. For a count or volume, use an ingredient-specific conversion and set `weightEstimate: true`. Treat a missing amount as a suggested starting weight or range and explain that in the ingredient note. Weigh eggs without the shell and use the edible or drained weight when the recipe calls for it. Recipe nutrition calculations require a single weight for every included ingredient. [King Arthur Baking ingredient weights](https://www.kingarthurbaking.com/learn/ingredient-weight-chart) · [USDA FoodData Central](https://fdc.nal.usda.gov/)

## Documentation map

| Topic | Location |
| --- | --- |
| Repository conventions | [AGENTS.md](AGENTS.md) |
| Recipe authoring | [docs/recipe-authoring.md](docs/recipe-authoring.md) |
| Recipe template spec | [docs/product/specs/recipe-template.md](docs/product/specs/recipe-template.md) |
| Agent workflows | [docs/agents/](docs/agents/) |
| Accepted decisions | [.brain/decisions/](.brain/decisions/) |
