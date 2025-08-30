import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './assets/scss/all.scss';

import Swiper from 'swiper';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
Swiper.use([Pagination, Autoplay, EffectFade]);
import 'bootstrap/dist/js/bootstrap.min.js';

document.addEventListener("DOMContentLoaded", function () {

    // -------------------- Navbar Login / Avatar --------------------
    const loginBtn = document.getElementById("loginBtn");
    const avatarLink = document.getElementById("avatarLink");

    const updateNavbar = () => {
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        loginBtn?.classList.toggle("d-none", loggedIn);
        avatarLink?.classList.toggle("d-none", !loggedIn);
    };

    updateNavbar();

    ["loginSubmit", "signupSubmit"].forEach(id => {
        document.getElementById(id)?.addEventListener("click", () => {
            localStorage.setItem("isLoggedIn", "true");
            updateNavbar();
        });
    });

    // -------------------- Offcanvas Close on LoginBtn Click --------------------
    document.addEventListener("click", e => {
        const btn = e.target.closest(".loginBtn");
        if (!btn) return;

        document.querySelectorAll('.offcanvas.show').forEach(offcanvasEl => {
            const closeBtn = offcanvasEl.querySelector('[data-bs-dismiss="offcanvas"]');
            closeBtn?.click();
        });
    });

    // -------------------- Member Form Reset --------------------
    const resetBtn = document.querySelector(".member #resetBtn");
    const form = document.querySelector(".member #data");

    resetBtn?.addEventListener("click", () => {
        form?.reset();
        form?.querySelectorAll("input").forEach(input => {
            if (["radio", "checkbox", "file"].includes(input.type)) {
                input.checked = false;
            } else {
                input.value = "";
            }
        });
    });

    // -------------------- Bootstrap Validation --------------------
    const forms = document.querySelectorAll('.needs-validation');

    forms.forEach(f => f.addEventListener('submit', e => {
        
        if (!f.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        f.classList.add('was-validated');

    }));

    // 需要驗證的區塊
    const validateSections = ['.contact', '.member', '.passwordModal'];

    validateSections.forEach(section => {
        const forms = document.querySelectorAll(`${section} .needs-validation`);
        const buttons = document.querySelectorAll(`${section} .btn-validate`);

        forms.forEach(form => {
            // ===== submit 驗證 =====
            form.addEventListener('submit', e => {
                if (!validateForm(form)) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                form.classList.add('was-validated');
            });

            // ===== checkbox 即時監聽 =====
            form.querySelectorAll('.checkbox-group').forEach(group => {
                const checkboxes = group.querySelectorAll('input[type="checkbox"]');
                const feedback = group.nextElementSibling;

                checkboxes.forEach(cb => {
                    cb.addEventListener('change', () => {
                        if ([...checkboxes].some(c => c.checked)) {
                            feedback.style.display = 'none';
                            checkboxes.forEach(c => c.removeAttribute('required'));
                        } else {
                            feedback.style.display = 'block';
                            checkboxes.forEach(c => c.setAttribute('required', 'true'));
                        }
                    });
                });
            });
        });

        buttons.forEach(btn => {
            // ===== 按鈕手動驗證 =====
            btn.addEventListener('click', () => {
                let allValid = true;
                forms.forEach(form => {
                    if (!validateForm(form)) {
                        allValid = false;
                    }
                });
                if (allValid) {
                    forms.forEach(f => f.submit());
                }
            });
        });
    });

    // ===== 共用驗證函式 =====
    function validateForm(form) {
        let isValid = true;

        // 標準 HTML5 驗證
        if (!form.checkValidity()) {
            isValid = false;
        }

        // checkbox-group 驗證 (至少選一個)
        form.querySelectorAll('.checkbox-group').forEach(group => {
            const checkboxes = group.querySelectorAll('input[type="checkbox"]');
            const feedback = group.nextElementSibling;
            if (![...checkboxes].some(cb => cb.checked)) {
                feedback.style.display = 'block';
                checkboxes.forEach(c => c.setAttribute('required', 'true'));
                isValid = false;
            } else {
                feedback.style.display = 'none';
                checkboxes.forEach(c => c.removeAttribute('required'));
            }
        });

        form.classList.add('was-validated');
        return isValid;
    }

    // -------------------- Password Toggle --------------------
    document.querySelectorAll('.togglePassword').forEach(btn => {
        const input = btn.closest('div')?.querySelector('.password');
        const icon = btn.querySelector('span');

        btn.addEventListener('click', () => {
            if (!input || !icon) return;
            const show = input.type === "password";
            input.type = show ? "text" : "password";
            icon.textContent = show ? "visibility" : "visibility_off";
        });
    });

    // -------------------- Swiper --------------------
    const initSwiper = (selector, options) => new Swiper(selector, options);

    initSwiper('.consultant-team', {
        spaceBetween: 24,
        slidesPerView: 'auto',
    });

    initSwiper('.story-cover', {
        spaceBetween: 16,
        loop: true,
        autoplay: { delay: 1500 },
        slidesPerView: 1.02,
        breakpoints: {
            576: { slidesPerView: "auto", spaceBetween: 24 },
        }
    });

    initSwiper('.serve', {
        spaceBetween: 16,
        slidesPerView: 1.14,
        breakpoints: {
            576: { slidesPerView: 1.5, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 16 },
            992: { slidesPerView: 2.8, spaceBetween: 24 },
            1200: { slidesPerView: 3.5, spaceBetween: 24 },
            1400: { slidesPerView: 4, spaceBetween: 24 },
        }
    });

});