import { mountProduct } from 'productsApp/ProductsIndex'
import { mountCart } from  'cartApp/CartShow'

console.log('Container !!')

const prodsEl = document.getElementById('my-products')
const cartEl = document.getElementById('my-cart')

if (prodsEl) mountProduct(prodsEl)
if (cartEl) mountCart(cartEl)
