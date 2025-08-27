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

    // ---------- consultantTeam ----------
    const consultantTeam = new Swiper('.consultant-team', {
        spaceBetween: 24,
        slidesPerView: "auto",
    })

    // ---------- consultantTeam ----------
    const storyCover = new Swiper('.story-cover', {
        spaceBetween: 24,
        slidesPerView: "auto",
    })

});