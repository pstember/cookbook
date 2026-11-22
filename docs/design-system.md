# Cookbook design system

The catalogue and recipe pages share `public/assets/cookbook.css`. Recipe data lives in `public/recipes/`. Add new recipes there and let the catalogue and detail page render them.

## Foundations

| Role | CSS tokens | Use |
| --- | --- | --- |
| Page and surface | `--canvas`, `--paper`, `--rule` | Cream page, cards and dividers |
| Text | `--ink`, `--muted`, `--green` | Headings and body, secondary text and category labels |
| Accent | `--yellow`, `--blue`, `--pink`, `--sage`, `--oat` | Card bands, headings, steps and illustration backgrounds |
| Controls | `--action-bg`, `--action-text`, `--action-hover`, `--control-border`, `--control-hover` | Primary actions and selected filters |
| Geometry | `--radius-panel`, `--radius-hero`, `--radius-pill`, `--shadow-panel` | Edges and elevation |
| Typography | `--display`, `--body` | Fraunces for headings and DM Sans for body and controls |
| Interaction | `--focus-stroke`, `--tap-min` | Visible keyboard focus and touch target height |

Use `.wrap` as the shared page container. Hero copy uses display typography with a short introduction. Main section headings use the shared `h2` style. Use `.tone-yellow`, `.tone-blue`, `.tone-pink`, `.tone-green` and `.tone-oat` to set local accent and tint values.

## Components

- Use `.panel` for a cream surface with shared edges and elevation. Ingredient and method cards use the same surface styles.
- Use `.button` on native links or buttons. Add `.jump-button` for a primary action. Use `aria-pressed` on category filter buttons to expose their selected state.
- Use `.language-switch` for the English and French links. Mark the current language with `aria-current="page"` and use each language’s own name.
- Give `.text-input` controls an associated label. Use `.visually-hidden` for a label when the control and nearby context already make the purpose clear.
- Use `.check` with native labelled checkboxes for ingredient and cooking progress. Keep print styles focused on recipe content.
- Use the local illustration set under `public/assets/illustrations/`. Set `thumbnail` in the recipe data to use a dedicated local card illustration. Cards can also use the recipe’s hero image or a decorative category illustration.

Catalogue-specific layout lives in `public/assets/catalogue.css`. Keep colour and control behaviour shared so additions to the collection feel consistent.

## Recipe overview and timers

Use the At a glance panel above the ingredients for recipes with components that come together, work that can overlap, or waits that affect the serving time. Show stages in order. Use side-by-side branches for components prepared separately, with the next stage explaining when they come together. Branches stack when space is limited. Link to the detailed method where the cook can act on the summary.

Place a countdown immediately after its starting instruction. The instructions include the duration and follow-up action so the sequence also works in print. The authoring conventions are in the [recipe guide](recipe-authoring.md).

## Step illustrations

Each step card pairs close-up artwork with the full written instructions. Wide screens put them side by side within a single step. Narrow screens show the artwork first. Use the actual equipment, ingredient texture, hand position and cooking stage from the recipe. Match the collection’s warm gouache and coloured-pencil style. Draw one frame for a single action and use separate frames when a step has distinct stages to learn.

Add a caption array for every step ID in `public/step-illustrations/` and register the recipe in that directory’s `index.js`. Give each frame matching short `en` and `fr` captions that describe the illustrated cue. The written recipe remains the source for quantities, temperatures and times.

Save each distinct WebP in `public/assets/illustrations/steps/<recipe-id>/`. Name a single frame `<step-id>.webp`. For multiple frames, name them `<step-id>-1.webp`, `<step-id>-2.webp` and so on in caption order. Check the finished crop against the recipe. Keep important tools and actions inside the frame, and keep text in the captions. The browser includes the artwork and captions in print.
