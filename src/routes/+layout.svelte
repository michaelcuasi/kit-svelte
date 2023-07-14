<script lang="ts">
	import type { LayoutData } from "./$types";
  import { page } from '$app/stores'

  console.log('Page Store ====> ', $page)
  export let data: LayoutData
  console.log('Data ====>', data)

  export let dataFrom = $page
  console.log('DATAFROM ===> ', dataFrom)

</script>

<svelte:head>
  <title>
    Website Name{$page.data.title ? ` - ${$page.data.title}` : ""}
  </title>
  {#if $page.data.description }
    <meta name="description" content={$page.data.description}/>
  {/if}
</svelte:head >

{#if data.user}
<p>Logged in as {data.user.name}</p>
<nav>
  <a href="/">Home</a>
  <a href="/products">Products</a>
</nav>
<slot {dataFrom}/>
{/if}