let root_element = document.querySelector(":root");
let theme_check = document.getElementById("theme-check");
let label_theme = document.getElementById("theme-label");

label_theme.addEventListener("click", () => {
	if (theme_check.checked == false) {
				root_element.style.setProperty('--bg', '#c9cfdb');
				root_element.style.setProperty('--fg', '#282828');
				label_theme.children[0].src = "img/light-mode-icon.svg"
			}else{
				root_element.style.setProperty('--bg', '#282828');
				root_element.style.setProperty('--fg', '#c9cfdb');
				label_theme.children[0].src = "img/dark-mode-icon.svg"
			}
})
