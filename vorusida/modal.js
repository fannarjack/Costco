"use strict";
// Check if this works
// Modal functionality
{
    // Get the modal and product information elements
    const modal = document.querySelector(".products-container-single");
    const modalProductName = document.querySelector(".name");
    const modalProductImage = document.querySelector(".product-img-single");
    const modalProductPrice = document.querySelector(".price");
    // Close button for the modal
    const closeBtn = document.getElementsByClassName("close")[0];
    // Assuming container is already defined elsewhere, and products are rendered inside it
    const container = document.querySelector('.products-container');
    if (!container || !modal || !modalProductName || !modalProductImage || !modalProductPrice || !closeBtn) {
        console.error("Required elements are missing from the DOM.");
        console.log(container, modal, modalProductImage, modalProductName, modalProductPrice, closeBtn);
    }
    else {
        container.addEventListener('click', function (e) {
            const target = e.target;
            const productCard = target.closest('.product-card');
            if (productCard) {
                const name = productCard.dataset.name;
                const price = productCard.dataset.price;
                const image = productCard.dataset.image;
                if (name && price && image) {
                    modalProductName.textContent = name;
                    modalProductImage.src = image;
                    modalProductImage.alt = name;
                    modalProductPrice.textContent = `${price}`;
                    modal.style.display = "block";
                }
            }
        });
        closeBtn.onclick = function () {
            modal.style.display = "none";
        };
        window.onclick = function (event) {
            const target = event.target;
            if (target == modal) {
                modal.style.display = "none";
            }
        };
    }
}
