
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({parent}) => {
  console.log('Product Load Function')
  const parentData = await parent()
  console.log(`parent data => `, parentData)
  const products = await (await import('$lib/dummy-products.json')).default
  return {
    products
  }
}