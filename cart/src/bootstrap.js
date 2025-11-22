import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devCartEl = document.querySelector("#dev-cart");

  // Assuming our container does not have an element with
  // id 'dev-cart', we create it and append to body
  if (devCartEl) {
    mount(devCartEl);
  }
}

// We are running through container
// and should export the mount function
export { mount };
