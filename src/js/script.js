function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  html.classList.contains("light")
    ? img.setAttribute("src", "./src/img/avatar_light_mode.png")
    : img.setAttribute("src", "./src/img/avatar_dark_mode.png");
}
