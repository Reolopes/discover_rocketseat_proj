const button = document.querySelector(".button")
const page = document.querySelector("html")
const image = document.querySelector(".avatar")

button.addEventListener("click", () => {
    if (!button.classList.contains("switch-light-mode-on")) {
      button.classList.replace("switch-light-mode-off","switch-light-mode-on" )
      page.classList.add("light")

      const img = image.firstElementChild

      img.setAttribute("src","assets/avatar-light.png")

    } else {
      button.classList.replace("switch-light-mode-on", "switch-light-mode-off")
      page.classList.remove("light")
      const img = image.firstElementChild

      img.setAttribute("src","assets/avatar.png")
    }
})
