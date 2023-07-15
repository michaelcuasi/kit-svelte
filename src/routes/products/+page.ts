import type { PageLoad } from "./$types";

export const load: PageLoad = ({data, fetch, depends}) => {
  fetch('https://dummyjson.com/products')
  fetch('https://dummyjson.com/users')
  depends('app:products')
  return {
    products: data.products,
    title: 'product list'
  }
} 