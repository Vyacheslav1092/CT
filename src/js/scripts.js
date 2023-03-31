import Inputmask from "inputmask";
document.addEventListener('DOMContentLoaded', function () {
    // burger-button
    document.querySelector('.burger-button').addEventListener('click', function () {
        document.querySelector('.burger-button').classList.toggle('burger-button--active');
        document.querySelector('.header-nav').classList.toggle('header-nav--active');
    });

    // dropdown menus
    const dropdownMenuTriggers = document.querySelectorAll('.dropdown-menu-trigger');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    dropdownMenuTriggers.forEach((trigger, index) => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            let currentDropdown = dropdownMenus[index];
            currentDropdown.classList.toggle('dropdown--active');
            trigger.classList.toggle('opened');
        })
    })

    // scroll
    let downS = true;
    let sticky = 15;
    let headerButtons = document.querySelector('.header-buttons-inner');

    const media = window.matchMedia('(max-width: 1089px)');
    const mediaOne = window.matchMedia('(min-width: 1090px)');


    if (media) {
        function breaks(e) {
            if (e.matches) {
                downS = false;
            }
        }
        breaks(media);
    }

    if (mediaOne) {
        function breaks(e) {
            if (e.matches) {
                function down() {
                    if (window.pageYOffset >= sticky) {
                        document.querySelector('header').classList.add('scrolled');
                        headerButtons.classList.add('header-buttons-inner-scroll');
                    } else if (!downS) {
                        return false
                    } else {
                        document.querySelector('header').classList.remove('scrolled');
                        headerButtons.classList.remove('header-buttons-inner-scroll');
                    }
                }
                window.onscroll = function () { down() };
            }
        }
        breaks(mediaOne);
    }

    function form() {
        let inputName = document.querySelectorAll('.input-name');
        let inputTel = document.querySelectorAll('.input-phone');
        let inputMask = new Inputmask('+7 (999) 999-99-99');

        for (let name of inputName) {
            name.addEventListener('input', () => {
                name.value = name.value.replace(/[a-zA-Z0-9]/gi, '');
            });
        }

        for (let tel of inputTel) {
            inputMask.mask(tel);
        }
    }
    form();

    function modal() {
        let closeBtn = document.querySelector('.modal-wrap__button');
        let startBtn = document.querySelector('.main-left-form__btn');
        let form = document.querySelector('.modal-wrap-form');
        let promoBtn = document.querySelector('.modal-wrap-form__promo');
        let inputPromo = document.querySelector('.modal-wrap-form__promokode');
        let modalForm = document.querySelector('.modal')

        startBtn.addEventListener('click', function () {
            document.querySelector('.modal').classList.add('modal--active');

            if (modalForm.classList.contains('modal--active')) {
                document.addEventListener('click', function (e) {
                    if (e.target.classList.contains('modal')) {
                        modalForm.classList.remove('modal--active');
                        inputPromo.classList.remove('modal--active');
                        form.reset();
                    };
                });
            };
        })

        closeBtn.addEventListener('click', function () {
            document.querySelector('.modal').classList.remove('modal--active');
            inputPromo.classList.remove('modal--active');
            form.reset();
        })

        promoBtn.addEventListener('click', function () {
            inputPromo.classList.toggle('modal--active')
        })
    };
    modal();

    // zoom image
    let zoomContent = document.querySelector('.zoom');
    document.querySelector('.control-two__image').addEventListener('click', function () {
        zoomContent.classList.add('zoom--active');

        if (zoomContent.classList.contains('zoom--active')) {
            document.addEventListener('click', function (e) {
                if (e.target.classList.contains('zoom')) {
                    zoomContent.classList.remove('zoom--active');
                };
            });
        };
    });

    document.querySelector('.zoom-content__close').addEventListener('click', function () {
        zoomContent.classList.remove('zoom--active');
    });
});
