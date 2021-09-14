import faker from 'faker'

const mountCart = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-cart')
  if (el) {
    mountCart(el)
  }
}

export { mountCart }
