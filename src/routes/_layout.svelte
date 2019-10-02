<script>
  import { stores } from '@sapper/app';
  import { getContext, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { string } from 'utils/rand';
  import Nav from '../components/Nav.svelte';

  const { session } = stores();

  export let segment;

  setContext($session.ctx, writable({}));

  const ctx = getContext($session.ctx);
</script>

<style>

</style>

<pre>{$ctx.rand}</pre>

<Nav {segment} />

<main>
  <slot />
</main>
