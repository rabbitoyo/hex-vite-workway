import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// form
document.getElementById('resetBtn').addEventListener('click', function () {
    const form = document.getElementById('data');
    form.reset();

    // 額外清空所有欄位
    form.querySelectorAll('input').forEach(input => {
        if (input.type !== 'radio' && input.type !== 'checkbox' && input.type !== 'file') {
            input.value = '';
        }
        if (input.type === 'radio' || input.type === 'checkbox') {
            input.checked = false;
        }
    });
});