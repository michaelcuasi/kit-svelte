import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async({fetch}) => {
  const response = await fetch('/api/products')
  if(response.ok) {
    return {
      products: response.json()
    }
  }
  const errorJSON = await response.json()
  throw error(response.status, errorJSON.message)
}


























// export const load: PageServerLoad = async ({fetch}) => {
//   const response = await fetch('/api/products')
//   if (response.ok) {
//     return {
//       products: response.json()
//     }
//   }
//   const errorJSON = await response.json()
//   throw error(response.status, errorJSON.message)
// }

// export const load: PageServerLoad = async ({parent}) => {
//   console.log('Product Load Function')
//   const parentData = await parent()
//   console.log(`parent data => `, parentData)
//   const products = await (await import('$lib/dummy-products.json')).default
//   return {
//     products
//   }
// }