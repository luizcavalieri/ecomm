import faker from 'faker'

const mountProduct = (el) => {
  let products = `<h3>Products</h3>`

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName()
    products += `<div>${name}</div>`
  }

  if (el) {
    el.innerHTML = products
  }
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-products')
  if (el) mountProduct(el)
}

export { mountProduct }
