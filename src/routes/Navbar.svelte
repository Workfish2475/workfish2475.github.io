<script lang="ts">
  import moonIcon from "../../static/moon.svg";
  import sunIcon from "../../static/sun.svg";

  import { toggleDarkMode } from "./theme.js";
  import { darkMode } from "./theme.js";

  export let displayName;
  export let linkDestination;
</script>

<div class="container" class:dark={$darkMode}>
  <a href={linkDestination}>
    <h3>
      {displayName}
    </h3>
  </a>

  <div class="themeButton" class:dark={$darkMode}>
    <button onclick={toggleDarkMode}>
      <img
        src={$darkMode ? sunIcon : moonIcon}
        alt="Theme icon"
        class="theme-icon"
      />
    </button>
  </div>
</div>

<style>
  h3 {
    font-weight: bold;
    padding-left: 10px;
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

  button {
    background: none;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .dark img {
    filter: invert(100%) sepia(0%) saturate(100%) hue-rotate(130deg)
      brightness(100%) contrast(80%);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    backdrop-filter: blur(16px);
    padding: 0 10px;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    color: black;
  }

  .dark a {
    color: white;
  }
</style>
