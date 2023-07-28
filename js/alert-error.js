export const AlertError = {
  element: document.querySelector(".modal-alert"),
  open() {
    AlertError.element.classList.add("open");
  },
  close() {
    AlertError.element.classList.remove("open");
  },
};
