window.addEventListener("load", () => {
 const modal = document.querySelector(".modal");
 const closeModal = document.querySelector(".modal .bt-wrap");

 closeModal.addEventListener("click", () => {
  const isActive = modal.classList.contains("active");

  if (isActive) {
   modal.classList.remove("active");
  }
 });
});
