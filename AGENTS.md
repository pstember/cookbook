# Agent operating manual for Cookbook

Start with [README.md](README.md). The cookbook is a static site with no runtime dependencies.

- Check `.brain/decisions/` before changing established behavior. Preserve accepted decisions and follow the decision log’s supersession guidance if one changes.
- Keep recipe content in `public/recipes/` and shared presentation in `public/src/` and `public/assets/`.
- Check recipe safety claims against named sources. Keep nutrition expressed per 100 g of finished food and derive it from ingredient data and cooked yield.
- Run `npm run check` for changes to recipe data or JavaScript. For UI changes, check affected interactions and layout when a browser is available. See [pre-push review](docs/agents/pre-push-review.md).
- Use a topic branch and conventional commits. Keep pull requests short and link a tracked issue when there is one.
- Get explicit human consent before merging into a protected branch. Keep the Claude merge guard enabled.
