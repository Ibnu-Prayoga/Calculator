// Menu
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", function(){
    navbar.classList.toggle("hidden");
})

// Display
const display = document.getElementById("display");

// Remove
function remove() {
    display.value = display.value.slice(0,-1);
}

// Remove All
function removeAll() {
    holdTimer = setTimeout( ()=>{
        display.value = "";
    },1 );
};

// Append value to display
function appendValue(value) {
    display.value += value;
};

function percent(num) {
    return num / 100;
};

// CalculateResult
function calculateResult() {
    try{
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
            
    };
};

// Drag
$(document).ready(function () {
    $("#dragBox").draggable();
});


