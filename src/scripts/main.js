const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

async function getJSON() {
    const res = await fetch("./ITEMS.JSON");
    const json = await res.json();
    landingPage.ITEMS = json;
}

function debounce(fn, ms) {
    let timer;

    return function () {
        const args = arguments;
        const context = this;

        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(context, args);
        }, ms);
    };
}

const landingPage = {
    ITEMS: [],
    ITEMS_LENGTH: 0,
    ITEMS_TRENDING:
        // new Set(),
        ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010"],
    ITEMS_SUGGEST:
        // new Set(),
        ["0005", "0006", "0007", "0008", "0009", "0010", "0001", "0002", "0003"],
    ITEMS_VIEWED: new Set(),
    ITEMS_CART: new Set(),

    getData: async function () {
        await getJSON();
        this.ITEMS_LENGTH = this.ITEMS.length;
        this.renderSlider("all");
    },

    renderSlider: function (...args) {
        let defaultListWidth = $(".item-slider__wrapper").clientWidth;

        let trendingList = $(".trending-list");
        let suggestsList = $(".suggests-list");

        let viewedList = $(".viewed-list");
        let viewedList_Wrapper = viewedList.parentElement;
        let viewedList_RightNav = viewedList.nextElementSibling;

        let HTML = {
            trending: "",
            suggestions: "",
            viewed: "",
        };

        this.ITEMS.map((item, index) => {
            //ADD STAR RATINGS TO ITEMS
            let starsCount = item.ratings;
            let starSet = "";
            for (; starsCount >= 1; starsCount--) {
                starSet += `<div class="items-slider__star star--full"></div>`;
            }
            if (starsCount > 0) {
                starSet += `<div class="items-slider__star star--half"></div>`;
            }

            //CREATE HTML CODES FOR ITEMS
            let item_html = `
            <li class="items-slider__item ">
                <a href="${item.link}" class="items-slider__link">
                    <div class="items-slider__pic" style="background-image: url(${item.picture});"></div>
                    <div class="items-slider__name">${item.name}</div>
                    <div class="items-slider__price">
                        <span class="price--old">${item.price_old}</span>
                        <span class="price--current">${item.price_current}</span>
                    </div>
                    <div class="items-slider__ratings">${starSet}</div>
                </a>

                <button data-item-ID = ${item.ID} class="items-slider__cart-btn">
                    <span>ADD TO CART</span>
                </button>
            </li>`;

            //CONCAT HTML CODES
            if (this.ITEMS_TRENDING.includes(item.ID)) {
                HTML.trending += item_html;
            }
            if (this.ITEMS_SUGGEST.includes(item.ID)) {
                HTML.suggestions += item_html;
            }

            if (this.ITEMS_VIEWED.has(item.ID)) {
                HTML.viewed += item_html;
            }
        });

        //INSERT HTML CODES INTO SLIDER

        if (args.includes("all")) {
            args = ["trending", "suggestions", "viewed"];
        }
        if (args.includes("trending")) {
            trendingList.innerHTML = HTML.trending;
        }
        if (args.includes("suggestions")) {
            suggestsList.innerHTML = HTML.suggestions;
        }
        if (args.includes("viewed")) {
            viewedList.innerHTML = HTML.viewed;

            //display navigation if viewed list length is overflowing
            defaultListWidth >= viewedList.clientWidth
                ? (viewedList_RightNav.style = "display: none")
                : (viewedList_RightNav.style = "display: flex");

            //hide viewed list if there is no item
            this.ITEMS_VIEWED.size <= 0
                ? (viewedList_Wrapper.style = "display: none")
                : (viewedList_Wrapper.style = "display: block");
        }
    },

    renderMenu: function () {
        let menuBtns = $$(".header__dropdown");
        let menuDropdown = $$(".dropdown__menu");
        let fixedHeader = $(".header-fixed__container");
        // let staticHeader = $(".header__container");
        let dropdownHeader = $(".dropdown__container");
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

        window.addEventListener(
            "scroll",
            debounce((e) => {
                if (activeMenus.length > 0) {
                    activeMenus.pop().classList.remove("dropdown--active");
                }

                if (window.scrollY > 200) {
                    fixedHeader.classList.add("header-fixed--active");
                    dropdownHeader.classList.add("dropdown-fixed");
                } else {
                    fixedHeader.classList.remove("header-fixed--active");
                    dropdownHeader.classList.remove("dropdown-fixed");
                }
            }, 100)
        );

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

    renderCoverSlider: function () {
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

    renderItemsSlider: function () {
        let slidersList = $$(".item-slider__wrapper");
        for (let i = 0; i < slidersList.length; i++) {
            let leftNav = slidersList[i].children[1];
            let rightNav = slidersList[i].children[3];
            let itemsSlider = slidersList[i].children[2];

            leftNav.addEventListener("click", () => {
                navFade(rightNav, leftNav);
                itemsSlider.style.transform = "translateX(0px)";
            });

            rightNav.addEventListener("click", () => {
                navFade(rightNav, leftNav);
                itemsSlider.style.transform =
                    "translateX(" + (slidersList[i].clientWidth - itemsSlider.clientWidth) + "px)";
            });

            if (slidersList[i].clientWidth >= itemsSlider.clientWidth) rightNav.style = "display: none";
        }

        function navFade(nav1, nav2) {
            nav1.classList.toggle("slider-nav--inactive");
            nav1.classList.toggle("slider-nav--active");
            nav2.classList.toggle("slider-nav--inactive");
            nav2.classList.toggle("slider-nav--active");
        }
    },

    toggleCart: function () {
        let cartContainer = $(".cart__container");
        let cartOpen = $(".header__cart");
        let cartClose = $(".cart__exit");
        let cartContinue = $(".cart-empty__btn");

        cartOpen.addEventListener("click", () => {
            this.renderCart();
            cartContainer.classList.add("cart--active");
        });

        cartClose.addEventListener("click", () => {
            cartContainer.classList.remove("cart--active");
        });

        cartContinue.addEventListener("click", () => {
            cartContainer.classList.remove("cart--active");
        });
    },

    addToCart: function () {
        let addToCart_btns = $$(".items-slider__cart-btn");
        let cartCounterDisplay = $$(".cart__counter")[0];

        //CREATE EVENT LISTENERS FOR ADD TO CART BUTTON IN EACH ITEM//
        for (let i = 0; i < addToCart_btns.length; i++) {
            addToCart_btns[i].addEventListener("click", (e) => {
                let addedItem = this.ITEMS.find((o) => o.ID === e.target.dataset.itemId);

                this.ITEMS_VIEWED.add(addedItem.ID);
                this.ITEMS_CART.add(addedItem.ID);

                //render cart count number to view
                cartCounterDisplay.innerHTML = landingPage.ITEMS_CART.size;

                this.renderSlider("viewed");
                // console.log(addedItem);
            });
        }
    },

    renderCart: function () {
        let CART = Array.from(this.ITEMS_CART);
        let cartContainer = $(".cart-items__list");

        let priceTotal = 0;
        let cart_html = "";

        CART.map((itemID, index) => {
            let curItem = this.ITEMS.find((x) => x.ID == itemID);
            const itemIndex = String(curItem.ID);

            let item_html = `<li class="cart__item">
                <div class="cart__item-pic"
                    style="background-image: url(${curItem.picture});">
                </div>

                <div class="cart__item-details">
                    <div class="cart__item-name">${curItem.name}</div>

                    <ul class="cart__item-size-box">
                        <input type="radio" name="${curItem.ID}" class="cart__item-size-option size-option--S">S</input>
                        <input type="radio" name="${curItem.ID}" class="cart__item-size-option size-option--M">M</input>
                        <input type="radio" name="${curItem.ID}" class="cart__item-size-option size-option--L">L</input>
                        <input type="radio" name="${curItem.ID}" class="cart__item-size-option size-option--XL">XL</input>
                        <input type="radio" name="${curItem.ID}" class="cart__item-size-option size-option--XXL">XXL</input>
                    </ul>

                    <div class="cart__item-quantity-box">
                        <div class="cart__item-quantity-btn quantity-btn--minus">-</div>
                        <span class="cart__item-quantity-display"></span>
                        <div class="cart__item-quantity-btn quantity-btn--plus">+</div>
                    </div>
                </div>

                <div class="cart__item-price">${curItem.price_current}</div>
                <div class="cart__item-remove" onclick=landingPage.removeCartItem("${itemIndex}")>X</div>
            </li>`;

            priceTotal += parseFloat(curItem.price_current.slice(1));
            cart_html += item_html;
        });

        let total_html = `<div class="cart__total">
                                <span>subtotal</span>
                                <span>$${priceTotal}</span>
                            </div>`;

        cartContainer.innerHTML = cart_html + total_html;
    },

    removeCartItem(ID) {
        this.ITEMS_CART.delete(ID);
        this.renderCart();
    },

    start: async function () {
        await this.getData();
        await this.renderItemsSlider();
        await this.addToCart();
        this.renderMenu();
        this.toggleCart();
        this.renderCoverSlider();
    },
};

landingPage.start();
