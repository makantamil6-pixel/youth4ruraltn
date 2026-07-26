document.addEventListener("DOMContentLoaded", function () {

    const agree = document.getElementById("agree");
    const continueBtn = document.getElementById("continueBtn");

    continueBtn.disabled = true;

    agree.addEventListener("change", function () {
        continueBtn.disabled = !agree.checked;
    });

    continueBtn.addEventListener("click", function () {

        if (!agree.checked) return;

        // Redirect to the English homepage
        window.location.href = "en/index.html";

    });

});