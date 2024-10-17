// Define the array of products with the Product type
export const products = [
    {
        category: "perur",
        name: "Pera",
        price: "55 kr.",
        unit: "Stk.",
        image: "../images/pera.png",
        imageClass: "product-img-pera"
    },
    {
        category: "perur",
        name: "Pera lífræn",
        price: "169 kr.",
        unit: "Stk.",
        image: "../images/peralifræn.png",
        imageClass: "product-img"
    },
    {
        category: "perur",
        name: "Perur í pakka",
        price: "439 kr.",
        unit: "Stk.",
        image: "../images/perurpakki.png",
        imageClass: "product-img-perupakki"
    },
    {
        category: "perur",
        name: "Perur í pakka",
        price: "569 kr.",
        unit: "Stk.",
        image: "../images/perurgrön.png",
        imageClass: "product-img-perupakki"
    },
    {
        category: "bananar",
        name: "Banani ódýr",
        price: "48 kr.",
        unit: "Stk.",
        image: "../images/banani.png",
        imageClass: "product-img"
    },
    {
        category: "bananar",
        name: "Bananar",
        price: "80 kr.",
        unit: "Stk.",
        image: "../images/bananar.png",
        imageClass: "product-img"
    },
    {
        category: "bananar",
        name: "Bananar lífrænir búnt",
        price: "217 kr.",
        unit: "Stk.",
        image: "../images/bananar.png",
        imageClass: "product-img"
    }
];
// Function to create a product card as a string of HTML
export function createProductCard(product) {
    return `
         <div class="product-card" data-name="${product.name}" data-price="${product.price}" data-unit="${product.unit}" data-image="${product.image}">
            <img class="heart-img" src="../images/heart-regular.svg" alt="heart"/>
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
                <img src="../images/circle-info-solid.svg" alt="information"/>
                <img src="../images/cart-shopping-solid.svg" alt="cart"/>
            </div>
        </div>
    `;
}
// Selecting the container and ensuring it's an HTMLElement
const container = document.querySelector('.products-container');
if (container) {
    // Add product cards to the container
    products.forEach(product => {
        container.innerHTML += createProductCard(product);
    });
}
// Add an event listener to the food element and ensure it's an HTMLElement
const food = document.getElementById("matur");
if (food) {
    food.addEventListener('click', function () {
        if (container) {
            container.innerHTML = "";
            products.forEach(product => {
                container.innerHTML += createProductCard(product);
            });
        }
    });
}
/*
//Product cards

const products = [
  {
      category: "perur",
      name: "Pera",
      price: "55 kr.",
      unit: "Stk.",
      image: "../images/pera.png",
      imageClass: "product-img-pera"
  },
  {
      category: "perur",
      name: "Pera lífræn",
      price: "169 kr.",
      unit: "Stk.",
      image: "../images/peralifræn.png",
      imageClass: "product-img"
  },
  {
      category: "perur",
      name: "Perur í pakka",
      price: "439 kr.",
      unit: "Stk.",
      image: "../images/perurpakki.png",
      imageClass: "product-img-perupakki"
  },
  {
      category: "perur",
      name: "Perur í pakka",
      price: "569 kr.",
      unit: "Stk.",
      image: "../images/perurgrön.png",
      imageClass: "product-img-perupakki"
  },
  {
      category: "bananar",
      name: "Banani ódýr",
      price: "48 kr.",
      unit: "Stk.",
      image: "../images/banani.png",
      imageClass: "product-img"
  },
  {
      category: "bananar",
      name: "Bananar",
      price: "80 kr.",
      unit: "Stk.",
      image: "../images/bananar.png",
      imageClass: "product-img"
  },
  {
      category: "bananar",
      name: "Bananar lífrænir búnt",
      price: "217 kr.",
      unit: "Stk.",
      image: "../images/bananar.png",
      imageClass: "product-img"
  }
];

function createProductCard(product) {
  return `
       <div class="product-card" data-name="${product.name}" data-price="${product.price}" data-unit="${product.unit}" data-image="${product.image}">
          <img class="heart-img" src="../images/heart-regular.svg" alt="heart"/>
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
              <img src="../images/circle-info-solid.svg" alt="information"/>
              <img src="../images/cart-shopping-solid.svg" alt="cart"/>
          </div>
      </div>
  `;
}


const container = document.querySelector('.products-container');
products.forEach(product => {
  container.innerHTML += createProductCard(product);
});

const food = document.getElementById("matur");
food.addEventListener('click', function() {
  container.innerHTML = ""
  products.forEach(product => {
      container.innerHTML += createProductCard(product);
  });
})
  */ 
