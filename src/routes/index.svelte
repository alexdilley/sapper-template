<script context="module">
  import { getStore } from './_store';

  export async function preload(_, session) {
    const store = getStore(/* init */ !process.browser);
    const item = {
      id: Date.now(),
      label: Math.random()
        .toString(36)
        .substring(7),
    };

    session.items = { ...session.items, [item.id]: item };
    store.update(state => ({ ...state, [item.id]: item }));

    // Simulate external service call.
    await new Promise(resolve =>
      setTimeout(resolve, Math.floor(Math.random() * Math.floor(50)))
    );

    return { item };
  }
</script>

<script>
  import { stores } from '@sapper/app';
  import { getContext } from 'svelte';
  import { CTX } from './_layout.svelte';

  const { session } = stores();
  const store = getStore();
  const ctx = getContext(CTX);

  export let item;

  // Hydrate...
  $session.items = { ...$session.items, [item.id]: item };
  store.update(state => ({ ...state, [item.id]: item }));
  ctx.update(state => ({ ...state, [item.id]: item }));
</script>

<style>

</style>
