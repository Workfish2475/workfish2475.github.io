<script lang="ts">
  import { darkMode } from "./theme.js";
</script>

<div class:dark={$darkMode}>
  <p>Made with Svelte</p>
</div>

<style>
  p {
    font-weight: bold;
    color: #848482;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
  }
</style>
