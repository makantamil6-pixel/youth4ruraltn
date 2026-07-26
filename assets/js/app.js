document.addEventListener("DOMContentLoaded", () => {

    const agree = document.getElementById("agree");
    const button = document.getElementById("continueBtn");

    button.disabled = true;

    agree.addEventListener("change", () => {
        button.disabled = !agree.checked;
    });

    button.addEventListener("click", () => {

        if (agree.checked) {
            window.location.href = "en/index.html";
        }

    });

});