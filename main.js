import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './assets/scss/all.scss';

import Swiper from 'swiper';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
Swiper.use([Pagination, Autoplay, EffectFade]);
import 'bootstrap/dist/js/bootstrap.min.js';

document.addEventListener("DOMContentLoaded", function () {

    // ---------- member 表單 reset ----------
    const resetBtn = document.querySelector(".member #resetBtn");
    const form = document.querySelector(".member #data");

    if (resetBtn && form) {
        resetBtn.addEventListener("click", function () {
            form.reset();

            // 額外清空所有欄位
            form.querySelectorAll("input").forEach(input => {
                if (input.type !== "radio" && input.type !== "checkbox" && input.type !== "file") {
                    input.value = "";
                }
                if (input.type === "radio" || input.type === "checkbox") {
                    input.checked = false;
                }
            });
        });
    }

    // ---------- consultant-team ----------
    new Swiper('.consultant-team', {
        spaceBetween: 24,
        slidesPerView: 'auto',
    })

    // ---------- story-cover ----------
    new Swiper('.story-cover', {
        spaceBetween: 16,
        loop: true,
        autoplay: {
            delay: 1500,
        },
        slidesPerView: 1.02,
        breakpoints: {
            576: {
                slidesPerView: "auto",
                spaceBetween: 24,
            },
        }
    })

    // ---------- serve ----------
    new Swiper('.serve', {
        spaceBetween: 16,
        slidesPerView: 1.14,
        breakpoints: {
            576: {
                slidesPerView: 1.5,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 2.8,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 24,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 24,
            }
        }
    })

});