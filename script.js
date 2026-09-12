
let display = document.getElementById("display");

// Number and operator buttons
function appendValue(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Clear display
function clearDisplay() {
    display.value = "0";
}

// Calculate result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    ) {
        appendValue(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Escape") {
        clearDisplay();
    }
});