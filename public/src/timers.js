import { locale, ui } from "./localization.js";

export function addTimer(container, stepTitle, { label, minutes }, clockIcon) {
  const button = document.createElement("button");
  const text = document.createElement("span");
  const status = document.createElement("span");
  button.type = "button";
  button.className = "button timer-button";
  status.className = "visually-hidden";
  status.setAttribute("role", "status");
  button.append(clockIcon, text);
  container.append(button, status);

  let deadline = 0;
  let interval;
  const task = label.toLocaleLowerCase(locale);
  const duration = minutes >= 60 && minutes % 60 === 0 ? ui(`${minutes / 60} hr`, `${minutes / 60} h`) : `${minutes} min`;

  function reset(labelText) {
    window.clearInterval(interval);
    deadline = 0;
    text.textContent = labelText;
    button.setAttribute("aria-label", ui(`Start ${duration} timer for ${task}`, `Démarrer un minuteur de ${duration} pour ${task}`));
  }

  function update() {
    const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    if (seconds === 0) {
      reset(`${ui("Time’s up", "Temps écoulé")} · ${label}`);
      status.textContent = ui(`${stepTitle}. Timer finished for ${task}.`, `${stepTitle}. Le minuteur a sonné pour ${task}.`);
      return;
    }
    const display = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
    text.textContent = `${label} · ${display} · ${ui("Cancel", "Annuler")}`;
  }

  const idleLabel = `${label} · ${duration}`;
  reset(idleLabel);
  button.addEventListener("click", () => {
    if (deadline) {
      reset(idleLabel);
      status.textContent = ui(`Timer cancelled for ${task}.`, `Minuteur annulé pour ${task}.`);
      return;
    }
    deadline = Date.now() + minutes * 60_000;
    button.setAttribute("aria-label", ui(`Cancel timer for ${task}`, `Annuler le minuteur pour ${task}`));
    status.textContent = ui(`${duration} timer started for ${task}.`, `Minuteur de ${duration} lancé pour ${task}.`);
    update();
    interval = window.setInterval(update, 250);
  });
}
