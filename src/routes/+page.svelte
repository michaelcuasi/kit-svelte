<script>
  import { goto, beforeNavigate, afterNavigate } from "$app/navigation";

  import { Button } from "$components";
  import ProductHeader from "./product/ProductHeader.svelte";

  import { navigating } from "$app/stores";

  $: console.log($navigating)

  beforeNavigate((navigation) => {
    console.log('beforeNavigate => ', navigation)
  }) 

  afterNavigate((navigation) => {
    console.log('afterNavigate => ', navigation)
  }) 

</script>

<button on:click={() => {
  goto('/about')
}}>Go to About</button>

<ProductHeader/>

<a href="/about">About</a>

<Button></Button>

