
// Check if this works
// Modal functionality
{
// Get the modal and product information elements
const modal = document.querySelector<HTMLElement>(".products-container-single");
const modalProductName = document.querySelector<HTMLElement>(".name");
const modalProductImage = document.querySelector<HTMLImageElement>(".product-img-single");
const modalProductPrice = document.querySelector<HTMLElement>(".price");

// Close button for the modal
const closeBtn = document.getElementsByClassName("close")[0] as HTMLElement;

// Assuming container is already defined elsewhere, and products are rendered inside it
const container = document.querySelector<HTMLElement>('.products-container');

if (!container || !modal || !modalProductName || !modalProductImage || !modalProductPrice || !closeBtn) {
  console.error("Required elements are missing from the DOM.");
  console.log(container, modal, modalProductImage, modalProductName, modalProductPrice, closeBtn)
} else {
  container.addEventListener('click', function (e: Event) {
    const target = e.target as HTMLElement;
    const productCard = target.closest('.product-card') as HTMLElement | null;

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

  window.onclick = function (event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target == modal) {
      modal.style.display = "none";
    }
  };
}
}

