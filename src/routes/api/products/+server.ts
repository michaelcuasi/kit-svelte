import type { RequestHandler } from './$types'
import { json, error } from '@sveltejs/kit'

export const GET: RequestHandler = async({fetch}) => {
  const response = await fetch('https://dummyjson.com/products')
  if(response.ok) {
    const resJSON = await response.json()
    return json(resJSON, {
      status: 200
    }) 
  }
  throw error(response.status, response.statusText)
}























// export const GET: RequestHandler = async () => {
//   const products = await(await import('$lib/dummy-products.json')).default
//   return new Response(JSON.stringify(products), {
//     status: 200
//   })
// } 

// export const GET: RequestHandler = async ({fetch}) => {
//   const response = await fetch('https://dummyjson.com/products')
//   // console.log(response)
//   if(response.ok) {
//     const resJSON = await response.json()
//     return json(resJSON, {
//       status: 200
//     })
//   }
//   throw error(response.status, response.statusText)
// }