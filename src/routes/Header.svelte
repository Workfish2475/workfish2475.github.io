<script lang="ts">
  import Links from "./Links.svelte";
</script>

<div>
  <h1>Alexander Rivera</h1>

  <Links />
</div>

<style>
  h1 {
    margin-bottom: 0;
    font-size: 3em;
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

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height: 25vh;
    width: auto;
  }

  @media (max-width: 450px) {
	h1 {
		font-size: 2em;
	}
  }
</style>
