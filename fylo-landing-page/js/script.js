const openBtn = document.getElementById("menu-btn"),
	mobileMenu = document.getElementById("mobile-menu")

const toggleNav = () => {
	openBtn.classList.toggle("open")
	mobileMenu.classList.toggle("hidden")
}

openBtn.addEventListener("click", toggleNav)

Array.from(mobileMenu.children).forEach(item =>
	item.addEventListener("click", toggleNav)
)
