<script>
  import { stores } from '@sapper/app';
  import { getContext } from 'svelte';
  import Service from './Service.svelte';
  import { CTX } from '../routes/_layout.svelte';
  import { getStore } from '../routes/_store';

  const { session } = stores();
  const store = getStore();
  const ctx = getContext(CTX);

  export let segment;
</script>

<style>
  .selected {
    color: red;
  }
</style>

<header>
  <nav>
    <ul>
      <li>
        <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
      </li>
      <li>
        <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
      </li>
    </ul>
  </nav>
  <dl>
    <dt>session store</dt>
    <dd><Service index={$session.items} /></dd>
    <dt>module-level store</dt>
    <dd><Service index={$store} /></dd>
    <dt>context store</dt>
    <dd><Service index={$ctx} /></dd>
  </dl>
</header>
