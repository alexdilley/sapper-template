<script context="module">
  import { string } from 'utils/rand';

  export async function preload() {
    return { rand: string() }
  }
</script>

<script>
  import { stores } from '@sapper/app';
  import { getContext } from 'svelte';

  const { session } = stores();
  const ctx = getContext($session.ctx)

  export let rand;

  $ctx.rand = rand;
</script>

<pre>{$ctx.rand}</pre>
