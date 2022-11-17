const checkPassword = () => {
    const passInputMain = document.querySelector("#password");
    const passInputSecond = document.querySelector("#conform-password");
    if (passInputMain !== passInputSecond) {
        console.log("both passwords dont match");
        // console.log(passInputMain.value);
        // console.log(passInputSecond.value);
    } else {
        console.log("both passwords match");
        // console.log(passInputMain.value);
        // console.log(passInputSecond.value);
    }
}
// checkPassword();