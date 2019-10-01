<script context="module">
  export const CTX = {};
</script>

<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import Nav from '../components/Nav.svelte';

  setContext(CTX, writable({}));

  export let segment;
</script>

<style>

</style>

<Nav {segment} />

<main>
  <slot />
</main>
