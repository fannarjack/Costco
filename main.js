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


 //virkar ekki  

const products = [
    {
        name: "Pera",
        price: "55 kr.",
        unit: "Stk.",
        image: "/images/pera.png",
        imageClass: "product-img-pera"
    },
    {
        name: "Pera lífræn",
        price: "169 kr.",
        unit: "Stk.",
        image: "/images/peralifræn.png",
        imageClass: "product-img"
    },
    {
        name: "Perur í pakka",
        price: "439 kr.",
        unit: "Stk.",
        image: "/images/perurpakki.png",
        imageClass: "product-img-perupakki"
    },
    {
        name: "Perur í pakka",
        price: "569 kr.",
        unit: "Stk.",
        image: "/images/perurgrön.png",
        imageClass: "product-img-perupakki"
    }
];

function createProductCard(product) {
    return `
        <div class="product-card">
            <img class="heart-img" src="images/heart-regular.svg" alt="heart"/>
            <img class="${product.imageClass}" src="${product.image}" alt="${product.name}"/>
            <div class="product-text">
                <div class="banana">
                    <p>${product.name}</p>
                </div>
                <div class="strong-price">
                    <p><strong>${product.price}</strong> ${product.unit}</p>
                </div>
            </div>
            <div class="price-quantity">
                <img src="/images/circle-info-solid.svg" alt="information"/>
                <img src="/images/cart-shopping-solid.svg" alt="cart"/>
            </div>
        </div>
    `;
}

const container = document.getElementById('products-container');
products.forEach(product => {
    container.innerHTML += createProductCard(product);
});





//Reyndi síðan eitthvað svona fyrir neðan, þar sem ég setti öll peru cards inn í bananar.html og gerði
// display:block og ætlaði að láta peru cards birtast þegar ýtt er á peru button. En virkaði ekki...  

document.addEventListener('DOMContentLoaded', function () {
    // Get all the category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
  
    // Get all the product containers
    const productContainers = document.querySelectorAll('.products-container');
  
    // Add a click event listener to each button
    categoryButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Get the category from the clicked button's data attribute
        const category = this.getAttribute('data-category');
  
        // Hide all product containers
        productContainers.forEach(container => {
          container.style.display = 'none'; // Hide all containers
        });
  
        // Show the product container for the selected category
        const activeContainer = document.querySelector(`.category-${category}`);
        if (activeContainer) {
          activeContainer.style.display = 'block'; // Show the selected container
        }
  
        // Optionally: Add active class to the clicked button
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });