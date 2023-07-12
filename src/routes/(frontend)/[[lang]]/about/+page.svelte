<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  // $: console.log($page)
</script>

<h2>about</h2>

{JSON.stringify($page.params)}

<button on:click={() => {
  goto('/')
}}>Go to home</button>