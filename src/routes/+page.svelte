<script lang=ts>
  import { page } from "$app/stores";
  $: console.log("SLOT BITCH ====> ", $$slots)
</script>

<h1>{$page.data.title}</h1>