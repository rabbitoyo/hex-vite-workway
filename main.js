import './assets/scss/all.scss';
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

});