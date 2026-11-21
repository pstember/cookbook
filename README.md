# Cookbook

The Little Cookbook is an illustrated, static cookbook with ingredient checklists, scalable quantities and cooking timers. Its first recipe is a pregnancy-friendly lemon meringue pie with thermometer-checked Swiss meringue.

## Run locally

With Python 3 and Node.js installed, run:

```sh
npm run dev
```

Open [the cookbook](http://127.0.0.1:8000) in a browser. The page uses native JavaScript modules. You can also serve `public/` with any static HTTP server. The local preview serves the same files that GitHub Pages publishes.

Run `npm run check` to check the JavaScript and verify the nutrition calculation.

## Publish to GitHub Pages

In the repository’s **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. The included workflow publishes `public/` on pushes to `main` and can also be run from the **Actions** tab. GitHub Pages serves the HTML, CSS, JavaScript and images directly. The workflow uploads the files as they are.

## Edit or add a recipe

- Edit `public/recipes/desserts/lemon-meringue-pie.js` for ingredients, steps, safety notes and the estimated finished weight. Ingredient weights in grams drive both the checklist and the nutrition calculation.
- Add data files under category directories such as `public/recipes/breads/` and register them in `public/recipes/index.js`. A registered recipe is available at `/?recipe=<id>`. The first recipe is the default.
- Keep ingredient reference values and their sources in `public/recipes/nutrition-data.js`. Values describe 100 g of edible ingredient. The renderer sums the nutrient contribution of each ingredient and divides by the finished batch weight to display values per 100 g of finished food.
- The page template, styling and interactions live in `public/index.html`, `public/assets/` and `public/src/`.

The pie is adapted from Angela Nilsen’s Good Food recipe with original illustration and a Swiss meringue topping. The page’s nutrition notes name the reference data and explain the estimated yield. [Good Food recipe](https://www.bbcgoodfood.com/recipes/ultimate-lemon-meringue-pie)

## Documentation map

| Topic | Location |
| --- | --- |
| Repository conventions | [AGENTS.md](AGENTS.md) |
| Agent workflows | [docs/agents/](docs/agents/) |
| Accepted decisions | [.brain/decisions/](.brain/decisions/) |
