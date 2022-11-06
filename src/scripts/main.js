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

    start: function () {
        this.menuStart();
    },
};

landingPage.start();
