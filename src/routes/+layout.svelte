<script lang="ts">
  import { darkMode } from "./theme.js";
</script>

<svelte:head>
  <meta name="theme-color" content={$darkMode ? "black" : "#F7F7F7"} />
</svelte:head>

<div class:dark={$darkMode}>
  <slot />
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    /*background-color: #f7f7f7;*/
    background-color: white;
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  .dark {
    background-color: black;
    color: white;
  }

  .dark :global(*) {
    transition:
      background-color 0.3s,
      color 0.3s;
  }
</style>
