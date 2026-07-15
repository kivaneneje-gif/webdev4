

const body = document.body;

const cube = document.getElementById("cube");

const input = document.getElementById("colorInput");

const mixBtn = document.getElementById("mixBtn");

const resetBtn = document.getElementById("resetBtn");

const colorName = document.getElementById("colorName");

const hexValue = document.getElementById("hexValue");

const rgbValue = document.getElementById("rgbValue");

const buttons = document.querySelectorAll(".color-btn");




const colorInfo = {

    red:{
        hex:"#FF0000",
        rgb:"255, 0, 0"
    },

    blue:{
        hex:"#0000FF",
        rgb:"0, 0, 255"
    },

    green:{
        hex:"#008000",
        rgb:"0, 128, 0"
    },

    yellow:{
        hex:"#FFFF00",
        rgb:"255, 255, 0"
    },

    black:{
        hex:"#000000",
        rgb:"0, 0, 0"
    },

    white:{
        hex:"#FFFFFF",
        rgb:"255, 255, 255"
    },

    purple:{
        hex:"#800080",
        rgb:"128, 0, 128"
    },

    orange:{
        hex:"#FFA500",
        rgb:"255, 165, 0"
    },

    pink:{
        hex:"#FFC0CB",
        rgb:"255, 192, 203"
    },

    gray:{
        hex:"#808080",
        rgb:"128, 128, 128"
    },

    maroon:{
        hex:"#800000",
        rgb:"128, 0, 0"
    },

    skyblue:{
        hex:"#87CEEB",
        rgb:"135, 206, 235"
    },

    darkgreen:{
        hex:"#006400",
        rgb:"0, 100, 0"
    }

};



const colorMixes = {

    "red+blue":"purple",
    "blue+red":"purple",

    "red+yellow":"orange",
    "yellow+red":"orange",

    "blue+yellow":"green",
    "yellow+blue":"green",

    "red+white":"pink",
    "white+red":"pink",

    "black+white":"gray",
    "white+black":"gray",

    "red+black":"maroon",
    "black+red":"maroon",

    "green+black":"darkgreen",
    "black+green":"darkgreen",

    "blue+white":"skyblue",
    "white+blue":"skyblue"

};



function updateDisplay(color){

    body.style.background = color;

    cube.style.backgroundColor = color;

    cube.style.boxShadow = "0 0 50px " + color;

    colorName.textContent =
        color.toUpperCase();

    hexValue.textContent =
        colorInfo[color].hex;

    rgbValue.textContent =
        colorInfo[color].rgb;

}



buttons.forEach(function(button){

    button.addEventListener("click",function(){

        updateDisplay(button.id);

    });

});


mixBtn.addEventListener("click",function(){

    let value = input.value
    .toLowerCase()
    .replace(/\s/g,"");

    if(colorMixes[value]){

        let mixedColor =
        colorMixes[value];

        updateDisplay(mixedColor);

    }

    else{

        alert("❌ Sorry! That color combination does not exist.");

    }

});


input.addEventListener("keypress",function(event){

    if(event.key==="Enter"){

        mixBtn.click();

    }

});


resetBtn.addEventListener("click",function(){

    body.style.background =
    "linear-gradient(135deg,#1a1a1a,#353535)";

    cube.style.backgroundColor =
    "";

    cube.style.boxShadow =
    "0 0 35px cyan";

    colorName.textContent =
    "None";

    hexValue.textContent =
    "---";

    rgbValue.textContent =
    "---";

    input.value = "";

}); 