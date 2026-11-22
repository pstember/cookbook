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

## Recipe template

The [recipe template spec](product/specs/recipe-template.md) describes the screen page and binder sheet. Both use the selected language, ingredient amounts and recipe artwork. Screen colours follow the ingredient components. Each category has its own print colour.

## Chart, timeline and timers

The chart groups ingredient rows by component and shows the actions each ingredient passes through. Separate components can share a column. A mixing or assembly step spans the ingredients it combines. Action links jump to the numbered method. The timeline colours stages by activity and sizes them by their recorded durations. When an earlier stage has an open duration, the next stage names the preceding step as its starting point.

Keep heat and wait pills with their step or option. Place each timer beside its starting instruction. Include the duration, readiness cue and next action in the method for cooks using the print sheet. The [recipe authoring guide](recipe-authoring.md) describes the fields.

## Step illustrations

Use 640 × 480 WebP files for recipe heroes, thumbnails and method illustrations. Match the collection’s warm gouache and coloured-pencil style. Frame the equipment, hand position and ingredient texture that illustrate the action. Check the finished crop at phone and print sizes.

Use one distinct image per numbered step. Save it as `public/assets/illustrations/steps/<recipe-id>/<step-id>.webp`. In `public/step-illustrations/<recipe-id>.js`, give the step ID a single-entry array containing its short `en` and `fr` captions. Register the recipe in that directory’s `index.js`. Captions describe the visible cue. The method supplies quantities, temperatures and times.
