export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal-wrapper .card h2"),
  buttonClose: document.querySelector("#btnClose"),
  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

Modal.buttonClose.onclick = () => {
  Modal.close();
};

document.onkeydown = (event) => {
  if (event.key === "Escape") {
    Modal.close();
  }
};
