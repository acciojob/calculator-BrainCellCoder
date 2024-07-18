document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const buttons = document.querySelectorAll("button");

    let inputValue = "";

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonId = button.id;

            if (buttonId === "clr") {
                inputValue = "";
                input.value = inputValue;
            } else if (buttonId === "ans") {
                try {
                    inputValue = eval(inputValue);
                    if (inputValue === Infinity) {
                        inputValue = "Infinity";
                    } else if (isNaN(inputValue)) {
                        inputValue = "NaN";
                    }
                } catch {
                    inputValue = "Error";
                }
                input.value = inputValue;
            } else {
                inputValue += button.textContent;
                input.value = inputValue;
            }
        });
    });
});
