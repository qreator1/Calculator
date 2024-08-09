// CALCULATOR PROGRAM

document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById("display");

    function appendToDisplay(input) {
        display.value += input;
    }

    function clearDisplay() {
        display.value = "";
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

    // Event listener for all buttons
    document.querySelectorAll('#keys button').forEach(function (button) {
        button.addEventListener('click', function () {
            const value = this.innerText;

            if (value === '=') {
                calculate();
            } else if (value === 'C') {
                clearDisplay();
            } else {
                appendToDisplay(value);
            }
        });
    });
});
