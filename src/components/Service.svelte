<script>
  export let index = {};
</script>

<ul>
  {#each Object.values(index) as value}
    <li><pre>{JSON.stringify(value)}</pre></li>
  {/each}
</ul>
