import faker from 'faker';


const mount = (el) => {
  let products = '';

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devProductsEl = document.querySelector('#dev-products');

  // Assuming our container does not have an element with
  // id 'dev-products', we create it and append to body
  if (devProductsEl) {
    mount(devProductsEl);
  }
}

// We are running through container
// and should export the mount function
export { mount };