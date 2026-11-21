import { stepIllustrations } from "../step-illustrations/index.js";
import { locale } from "./localization.js";

const svgNamespace = "http://www.w3.org/2000/svg";
const sprites = "assets/illustrations/step-objects.svg";

function svgElement(tag, attributes) {
  const node = document.createElementNS(svgNamespace, tag);
  for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, value);
  return node;
}

function place(art, name, x, y, size, isMotion = false) {
  const attributes = {
    href: `${sprites}#${name}`,
    x: x - size / 2, y: y - size / 2,
    width: size, height: size,
  };
  if (isMotion) attributes.class = "step-illustration-motion";
  art.append(svgElement("use", attributes));
}

function surface(art, x, y, width) {
  art.append(svgElement("ellipse", { cx: x, cy: y, rx: width, ry: 5, class: "step-illustration-shadow" }));
}

export function renderStepIllustration(recipeId, stepId) {
  const scene = stepIllustrations[recipeId]?.[stepId];
  if (!scene) return null;

  const figure = document.createElement("figure");
  figure.className = "step-illustration";
  const art = svgElement("svg", { viewBox: "0 0 360 132", "aria-hidden": "true" });
  const before = scene.before ?? [];
  const focusX = before.length && !scene.after ? 209 : scene.after && !before.length ? 133 : 181;

  if (before.length === 1) {
    surface(art, 68, 108, 28);
    place(art, before[0], 68, 81, 73);
  } else if (before.length === 2) {
    surface(art, 62, 108, 44);
    place(art, before[1], 81, 68, 64);
    place(art, before[0], 47, 85, 74);
  }
  if (before.length) place(art, "arrow", 123, 81, 32, true);
  if (scene.after) {
    place(art, "arrow", 252, 81, 32, true);
    surface(art, 305, 108, 33);
    place(art, scene.after, 305, 81, 86);
  }

  surface(art, focusX, 111, 53);
  place(art, scene.focus, focusX, 74, 117);
  if (scene.tool) place(art, scene.tool, focusX + 43, 63, 69);
  if (scene.motion) place(art, `motion-${scene.motion}`, focusX - 18, 28, 44, true);

  const caption = document.createElement("figcaption");
  caption.textContent = scene[locale];
  figure.append(art, caption);
  return figure;
}
