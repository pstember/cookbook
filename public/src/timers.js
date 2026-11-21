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
  const duration = minutes >= 60 && minutes % 60 === 0 ? `${minutes / 60} hr` : `${minutes} min`;

  function reset(labelText) {
    window.clearInterval(interval);
    deadline = 0;
    text.textContent = labelText;
    button.setAttribute("aria-label", `Start ${duration} timer for ${label.toLowerCase()}`);
  }

  function update() {
    const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    if (seconds === 0) {
      reset("Done · restart");
      status.textContent = `${stepTitle}: ${label} timer finished.`;
      return;
    }
    const display = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
    text.textContent = `${display} · Cancel`;
  }

  const idleLabel = `${label} · ${duration}`;
  reset(idleLabel);
  button.addEventListener("click", () => {
    if (deadline) {
      reset(idleLabel);
      status.textContent = `${label} timer cancelled.`;
      return;
    }
    deadline = Date.now() + minutes * 60_000;
    button.setAttribute("aria-label", `Cancel timer for ${label.toLowerCase()}`);
    status.textContent = `${duration} timer started for ${label.toLowerCase()}.`;
    update();
    interval = window.setInterval(update, 250);
  });
}
