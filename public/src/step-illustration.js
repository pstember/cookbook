import { stepIllustrations } from "../step-illustrations/index.js";
import { locale } from "./localization.js";

export function stepImagePath(recipeId, stepId, index, count) {
  const suffix = count > 1 ? `-${index + 1}` : "";
  return `assets/illustrations/steps/${recipeId}/${stepId}${suffix}.webp`;
}

export function renderStepIllustration(recipeId, stepId) {
  const frames = stepIllustrations[recipeId]?.[stepId];
  if (!frames?.length) return null;

  const illustrations = document.createElement("div");
  illustrations.className = "step-illustrations";
  frames.forEach((frame, index) => {
    const figure = document.createElement("figure");
    figure.className = "step-illustration";
    const image = document.createElement("img");
    image.src = stepImagePath(recipeId, stepId, index, frames.length);
    image.alt = "";
    image.width = 540;
    image.height = 360;
    image.decoding = "async";
    const caption = document.createElement("figcaption");
    caption.textContent = frame[locale];
    figure.append(image, caption);
    illustrations.append(figure);
  });

  return illustrations;
}
