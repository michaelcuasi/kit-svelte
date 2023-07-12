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

<ProductHeader/>

<button on:click={() => {
  goto('/about')
}}>Go to About</button>



