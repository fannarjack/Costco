import {products, createProductCard} from "./productCards.js";

// CATEGORY BUTTON

document.addEventListener('DOMContentLoaded', () => {
  // Get all the category buttons
  const categoryButtons = document.querySelectorAll<HTMLButtonElement>('.category-btn');
  const container = document.querySelector<HTMLElement>('.products-container'); // Assuming you have a container for products
  
  
  if (!container) return; // Ensure the container exists

  // Add a click event listener to each button
  categoryButtons.forEach(button => {
    button.addEventListener('click', function (this: HTMLButtonElement) {
      // Get the category from the clicked button's data attribute
      const category = this.getAttribute('data-category');
      
      if (!category) return; // Ensure category exists
      
      container.innerHTML = "";

      // Hide all product containers and only display matching products
      products.forEach(product => {
        if (category === product.category) {
          container.innerHTML += createProductCard(product);
        }
      });

      // Optionally: Add active class to the clicked button
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
});




