const form = document.querySelector('form');
form.addEventListener('submit', e => {
    const passInputMain = document.querySelector("#password");
    const passInputSecond = document.querySelector("#confirm-password");
    const errorMsg = document.querySelector('.error-msg');
    const wrongPasswordStyle = "border:4px solid red;";
    const correctPasswordStyle = "border:4px solid green;"
    if (passInputMain.value !== passInputSecond.value) {
        e.preventDefault();
        passInputMain.style.cssText = wrongPasswordStyle;
        passInputSecond.style.cssText = wrongPasswordStyle;
        errorMsg.textContent = `*Passwords do not match`;
        errorMsg.style.cssText = "color:red;"
        setTimeout(() => {
            errorMsg.textContent = '';
            passInputMain.style.cssText = '';
            passInputSecond.style.cssText = '';
        }, 4_000);
    } else {
        passInputMain.style.cssText = correctPasswordStyle;
        passInputSecond.style.cssText = correctPasswordStyle;
    }
});