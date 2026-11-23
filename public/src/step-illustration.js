export function renderStepIllustration({ illustration, caption }) {
  if (!illustration) return null;

  const illustrations = document.createElement("div");
  illustrations.className = "step-illustrations";
  const figure = document.createElement("figure");
  figure.className = "step-illustration";
  const image = document.createElement("img");
  image.src = illustration;
  image.alt = "";
  image.width = 640;
  image.height = 480;
  image.decoding = "async";
  const figcaption = document.createElement("figcaption");
  figcaption.textContent = caption;
  figure.append(image, figcaption);
  illustrations.append(figure);
  return illustrations;
}
