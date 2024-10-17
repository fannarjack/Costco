// When the user clicks the hamburger icon, set the display to absolute
// When the user clicks the close icon, set the display to none
// Grab the div which contains the menu overlay (it is set to none by default as is therefore hidden)
{
const overlay = document.querySelector<HTMLDivElement>(".menu-overlay");
const navBar = document.querySelector<HTMLElement>(".nav-bar");
const mainContent = document.querySelector<HTMLElement>(".main-content"); // Assuming this is defined elsewhere

// Grab the hamburger icon

const hamburger = document.querySelector<HTMLElement>(".hamburger");

// For the hamburger icon, add an event listener, so we know when it is clicked

hamburger?.addEventListener("click", () => {

    // If the menu is displayed, set the display to none, otherwise set it to block
    // This will toggle the display of the menu overlay

    if (!overlay) return;

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
    } else {
        overlay.classList.remove("show");
        overlay.classList.add("hide");
        document.body.style.overflow = "auto"; // Allow scrolling when the menu is closed

        // Wait for the animation to finish before setting the display

        setTimeout(() => {
            overlay!.style.display = "none";
        }, 500);
    }
});

const vorur = document.querySelector<HTMLElement>(".vorur");
const underlist = document.querySelector<HTMLElement>(".underlist");

// Add an event listener for the "vorur" element

vorur?.addEventListener("click", () => {
    if (!underlist) return;
    underlist.classList.toggle("show");
});

const matur = document.querySelector<HTMLElement>(".matur");
const flokkar = document.querySelector<HTMLElement>(".flokkar");

// Add an event listener for the "matur" element

matur?.addEventListener("click", () => {
    if (!flokkar) return;
    flokkar.classList.toggle("show");
});
}

