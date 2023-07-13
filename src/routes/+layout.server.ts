import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = () => {
  const user = {name: 'Michael', id: 1}
  return {
    user
  }
}