import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './assets/scss/all.scss';

import Swiper from 'swiper';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
Swiper.use([Pagination, Autoplay, EffectFade]);
import 'bootstrap/dist/js/bootstrap.min.js';

document.addEventListener("DOMContentLoaded", function () {

    /*const loginBtn = document.getElementById("loginBtn");
    const avatarLink = document.getElementById("avatarLink");

    // 初始化頁面
    function updateNavbar() {
        if (localStorage.getItem("isLoggedIn") === "true") {
            loginBtn.classList.add("d-none");
            avatarLink.classList.remove("d-none");
        } else {
            loginBtn.classList.remove("d-none");
            avatarLink.classList.add("d-none");
        }
    }

    // 頁面載入時檢查狀態
    updateNavbar();

    // 點擊登入或註冊成功
    document.getElementById("loginSubmit").addEventListener("click", function () {
        localStorage.setItem("isLoggedIn", "true");
        updateNavbar();
    });

    document.getElementById("signupSubmit").addEventListener("click", function () {
        localStorage.setItem("isLoggedIn", "true");
        updateNavbar();
    });*/

    // offcanvas
    document.addEventListener("click", function(e) {
        const btn = e.target.closest(".loginBtn"); // 捕捉登入按鈕
        if (!btn) return;

        // 找到所有已開啟的 offcanvas
        const offcanvasEls = document.querySelectorAll('.offcanvas.show');

        if (offcanvasEls.length > 0) {
            offcanvasEls.forEach(offcanvasEl => {
                // 透過資料屬性模擬點擊關閉按鈕
                const closeBtn = offcanvasEl.querySelector('[data-bs-dismiss="offcanvas"]');
                if (closeBtn) closeBtn.click();
            });

        }
    });

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

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })

    // password
    document.querySelectorAll('.togglePassword').forEach(btn => {
        const input = btn.closest('div').querySelector('.password');
        const icon = btn.querySelector('span');

        btn.addEventListener('click', () => {
            if (input.type === "password") {
                input.type = "text";
                icon.textContent = "visibility";
            } else {
                input.type = "password";
                icon.textContent = "visibility_off";
            }
        });
    });

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