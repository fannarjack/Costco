"use strict";
// When the user clicks the hamburger icon, set the display to absolute
// When the user clicks the close icon, set the display to none
// Grab the div which contains the menu overlay (it is set to none by default as is therefore hidden)
{
    const overlay = document.querySelector(".menu-overlay");
    const navBar = document.querySelector(".nav-bar");
    const mainContent = document.querySelector(".main-content"); // Assuming this is defined elsewhere
    // Grab the hamburger icon
    const hamburger = document.querySelector(".hamburger");
    // For the hamburger icon, add an event listener, so we know when it is clicked
    hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener("click", () => {
        // If the menu is displayed, set the display to none, otherwise set it to block
        // This will toggle the display of the menu overlay
        if (!overlay)
            return;
        if (overlay.style.display === "none" || overlay.style.display === "") {
            overlay.style.display = "block";
            overlay.classList.remove("hide");
            overlay.classList.add("show");
            if (navBar) {
                navBar.style.backgroundColor = "transparent";
                navBar.style.backdropFilter = "none";
            }
            if (mainContent) {
                mainContent.style.overflow = "hidden";
            }
            overlay.style.height = "100vh";
            overlay.style.overflow = "auto";
        }
        else {
            overlay.classList.remove("show");
            overlay.classList.add("hide");
            document.body.style.overflow = "auto"; // Allow scrolling when the menu is closed
            // Wait for the animation to finish before setting the display
            setTimeout(() => {
                overlay.style.display = "none";
            }, 500);
        }
    });
    const vorur = document.querySelector(".vorur");
    const underlist = document.querySelector(".underlist");
    // Add an event listener for the "vorur" element
    vorur === null || vorur === void 0 ? void 0 : vorur.addEventListener("click", () => {
        if (!underlist)
            return;
        underlist.classList.toggle("show");
    });
    const matur = document.querySelector(".matur");
    const flokkar = document.querySelector(".flokkar");
    // Add an event listener for the "matur" element
    matur === null || matur === void 0 ? void 0 : matur.addEventListener("click", () => {
        if (!flokkar)
            return;
        flokkar.classList.toggle("show");
    });
}
/*
// When the user clicks the hamburger icon, set the display to absolute
// When the user clicks the close icon, set the display to none
// Grab the div which contains the menu overlay (it is set to none by default as is therefore hidden)

var overlay = document.querySelector(".menu-overlay");
var navBar = document.querySelector(".nav-bar");

// Grab the hamburger icon

var hamburger = document.querySelector(".hamburger");
// For the hamburger icon, add an event listener, so we know when it is clicked

hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener("click", function () {

    // If the menu is displayed, set the display to none, otherwise set it to block
    // This will toggle the display of the menu overlay

    if (overlay === null)
        return;
    if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "block";
        overlay.classList.remove("hide");
        overlay.classList.add("show");
        if (navBar) {
            navBar.style.backgroundColor = "transparent";
            navBar.style.backdropFilter = "none";
        }
        if (mainContent) {
            mainContent.style.overflow = "hidden"
        }
        overlay.style.height = "100vh"
        overlay.style.overflow = "auto";
    }
    
    else {
        overlay.classList.remove("show");
        overlay.classList.add("hide");
        document.body.style.overflow = "auto"; // Allow scrolling when the menu is closed
        if (navBar) {
        }
        // Wait for the animation to finish before setting the display
        setTimeout(function () {
            overlay.style.display = "none";
        }, 500);
    }
});

const vorur = document.querySelector(".vorur");

// Grab the hamburger icon

const underlist = document.querySelector(".underlist");

// For the hamburger icon, add an event listener, so we know when it is clicked

vorur === null || vorur === void 0 ? void 0 : vorur
vorur.addEventListener("click", function () {
    // If the menu is displayed, set the display to none, otherwise set it to block
    // This will toggle the display of the menu overlay
    if (underlist === null)
        return;

        underlist.classList.toggle("show");
         // Prevent scrolling when the menu is open
    }

);

const matur = document.querySelector(".matur");

// Grab the hamburger icon

const flokkar = document.querySelector(".flokkar");

// For the hamburger icon, add an event listener, so we know when it is clicked

matur === null || matur === void 0 ? void 0 : matur
matur.addEventListener("click", function () {
    // If the menu is displayed, set the display to none, otherwise set it to block
    // This will toggle the display of the menu overlay
    if (flokkar === null)
        return;

        flokkar.classList.toggle("show");
         // Prevent scrolling when the menu is open
    }

);
*/ 
