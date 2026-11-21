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
- Give `.text-input` controls an associated label. Use `.visually-hidden` for a label when the control and nearby context already make the purpose clear.
- Use `.check` with native labelled checkboxes for ingredient and cooking progress. Keep print styles focused on recipe content.
- Use the local illustration set under `public/assets/illustrations/`. A recipe image appears in its card when available. Cards without images use a decorative category illustration and accent.

Catalogue-specific layout lives in `public/assets/catalogue.css`. Keep colour and control behaviour shared so additions to the collection feel consistent.
