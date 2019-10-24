// Options appear on hover
export const optionsBtn = document.querySelector("[data-function='options']");
export const hiddenButtons = [...document.querySelectorAll(".options-option")];

export function optionsHover() {
  hiddenButtons.forEach(button => button.classList.toggle("hidden"));
}

optionsBtn.addEventListener("mouseenter", optionsHover);
optionsBtn.addEventListener("click", optionsHover);
