//mobile menu
function mobileMenu() {
    let btn = document.querySelector('.header__menubtn');
    let body = document.querySelector('body');
    let nav = document.querySelector('.header__nav');
    let links = document.querySelectorAll('.header__menu a');

    btn.addEventListener('click', () => {
        body.classList.toggle('menu__open');
        nav.classList.toggle('active');
    });

	for(link of links) {
		if(link) {
			link.addEventListener('click', () => {
				body.classList.remove('menu__open');
				nav.classList.remove('active');
			})
		}
	};
};
mobileMenu();

//theme switch
function themeSwitch() {
    const btn = document.querySelector('.header__sitetheme');
    const body = document.querySelector('body');

    body.classList.add(localStorage.getItem('theme') || 'light_theme');

    btn.addEventListener('click', () => {
        if(localStorage.getItem('theme') === 'light_theme') {
            body.classList.remove('light_theme');
            body.classList.add('dark_theme');
            localStorage.setItem('theme', 'dark_theme');
        } else {
            body.classList.remove('dark_theme');
            body.classList.add('light_theme');
            localStorage.setItem('theme', 'light_theme');
        };
    });
};
themeSwitch();

//slider
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 33,
    pagination: {
      el: '.slider__nav_btns',
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 768
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 33,
        }
      },
});
