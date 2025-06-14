<script lang="ts">
  import { darkMode } from "../theme.js";
</script>

<div class="container" class:dark={$darkMode}>
  <h1>Contact Me</h1>

  <p>StickIt@RiveraPrivate.com</p>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95vw;
    height: 30vh;
  }

  h1 {
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

  p {
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
    font-size: 1.2rem;
    color: #555;
    background-color: #f9f9f9;
    padding: 0.5em 1em;
    border-radius: 8px;
    text-align: center;
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  p:hover {
    background-color: #eaeaea;
    color: #333;
    cursor: pointer;
  }

  p:active {
    background-color: #dcdcdc;
  }

  .dark p {
    background-color: #050505;
    color: white;
  }

  .dark p:hover {
	background-color: #1a1a1a;
	color: #e0e0e0;
  }
</style>
