# Agent operating manual for Cookbook

Start with [README.md](README.md). The cookbook is a static site with no runtime dependencies.

- Check `.brain/decisions/` before changing established behavior. Preserve accepted decisions and follow the decision log’s supersession guidance if one changes.
- Keep recipe content in `public/recipes/` and shared presentation in `public/src/` and `public/assets/`.
- Give every ingredient a weight in grams. Label converted weights and suggested starting amounts as estimates. Keep source measures as secondary references and run the gram-weight invariant in `npm run check`.
- Pair each numbered step with a scene and English and French captions. Follow the shared visual conventions in [the design system](docs/design-system.md).
- Check recipe safety claims against named sources. Keep nutrition expressed per 100 g of finished food and derive it from ingredient data and cooked yield.
- Run `npm run check` for changes to recipe data or JavaScript. For UI changes, check affected interactions and layout when a browser is available. See [pre-push review](docs/agents/pre-push-review.md).
- Use a topic branch and conventional commits. Keep pull requests short and link a tracked issue when there is one.
- Get explicit human consent before merging into a protected branch. Keep the Claude merge guard enabled.
