let display = document.getElementById("display");

// Display वर value add करणे
function appendValue(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// पूर्ण display clear करणे
function clearDisplay() {
    display.value = "0";
}

// शेवटचा character delete करणे
function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

// Calculation करणे
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {
        appendValue(key);
    } 
    else if (key === "Enter") {
        calculateResult();
    } 
    else if (key === "Escape") {
        clearDisplay();
    } 
    else if (key === "Backspace") {
        deleteLast();
    }
});