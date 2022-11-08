const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const landingPage = {
    menuStart: function () {
        let menuBtns = $$(".header__dropdown");
        let menuDropdown = $$(".dropdown__menu");

        let activeMenus = [];
        let onMenu = false;
        let onBtn = false;

        menuBtns.forEach((menuBtn) => {
            menuBtn.addEventListener("mouseenter", (btn) => {
                onBtn = true;
                let activeMenuID = btn.target.dataset.headerid;
                menuDropdown[activeMenuID].classList.add("dropdown--active");

                if (activeMenus.unshift(menuDropdown[activeMenuID]) > 1) {
                    activeMenus[0].dataset.headerid != activeMenus[1].dataset.headerid
                        ? activeMenus.pop().classList.remove("dropdown--active")
                        : activeMenus.pop();
                }
            });

            menuBtn.addEventListener("mouseleave", () => {
                onBtn = false;
                checkBrowsing();
            });
        });

        menuDropdown.forEach((dropDown) => {
            dropDown.addEventListener("mouseenter", () => {
                onMenu = true;
            });

            dropDown.addEventListener("mouseleave", () => {
                onMenu = false;
                checkBrowsing();
            });
        });

        function checkBrowsing() {
            setTimeout(() => {
                if (!onMenu & !onBtn) {
                    if (activeMenus.length > 0) {
                        activeMenus.pop().classList.remove("dropdown--active");
                    }
                }
            }, 100);
        }
    },
    sliderStart: function () {
        let slidersCount = 4;
        let sliders = Array.from(Array(slidersCount).keys());

        let container = $(".slider__transition-container");
        let leftBtn = $(".slider__nav--left");
        let rightBtn = $(".slider__nav--right");
        let slidersPage = $$(".slider__page");

        let nextSlideTimer = setInterval(() => {
            toNextSlide();
        }, 8000);

        leftBtn.addEventListener("click", () => {
            clearInterval(nextSlideTimer);
            toPrevSlide();
            nextSlideTimer = setInterval(() => {
                toNextSlide();
            }, 8000);
        });
        rightBtn.addEventListener("click", () => {
            clearInterval(nextSlideTimer);
            toNextSlide();
            nextSlideTimer = setInterval(() => {
                toNextSlide();
            }, 8000);
        });

        function playTransition() {
            container.innerHTML = "";
            container.innerHTML = `<div class=" slider__transition"></div>`;
        }

        function toNextSlide() {
            playTransition();
            sliders.push(sliders.shift());
            slidersPage[sliders[sliders.length - 1]].classList.remove("slider__page--active");
            slidersPage[sliders[0]].classList.add("slider__page--active");
        }

        function toPrevSlide() {
            playTransition();
            sliders.unshift(sliders.pop());
            slidersPage[sliders[0]].classList.add("slider__page--active");
            slidersPage[sliders[1]].classList.remove("slider__page--active");
        }
    },
    start: function () {
        this.menuStart();
        this.sliderStart();
    },
};

landingPage.start();
