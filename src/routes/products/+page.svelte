<script lang="ts">
	import { invalidate } from '$app/navigation';
  import type {PageData} from './$types'

  export let data: PageData

  $: products = data.products.products 
</script>

<!-- {data.user.name} --> 

<!-- <h2>Products</h2> -->
<h2>{data.title}</h2>
<button on:click={() => {
  // invalidate('https://dummyjson.com/products')
  // invalidate('app:products')
  // invalidate((url) => {
  //   return url.hostname === 'dummyjson.com'
  // })
  invalidate('app:productsServerload')
}}>Rerun</button>

{#if products && products.length > 0}
<ul>
  {#each products as product}
  <li> 
    <img src={product.thumbnail} alt={product.title} />
    <h3>
      <a href="/product/{product.id}">{product.title}</a>
    </h3>
    <p>{product.description}</p>
  </li>
  {/each}
</ul>
{/if}

<style>
  ul {
    padding: 0px;
    margin: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
    gap: 30px
  }
  img {
    width: 100%;
  }
  li {
    border: 1px solid black;
  }
</style>