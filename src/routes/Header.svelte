<script lang="ts">
  import Links from "./Links.svelte";
  import moonIcon from "../../static/moon.svg";
  import sunIcon from "../../static/sun.svg";

  import { toggleDarkMode } from "./theme.js";
  import { darkMode } from "./theme.js";
</script>

<div class="themeButton" class:dark={$darkMode}>
  <button onclick={toggleDarkMode}>
    <img
      src={$darkMode ? sunIcon : moonIcon}
      alt="Theme icon"
      class="theme-icon"
    />
  </button>
</div>

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

  p {
	color: #848482;
    font-size: 1em;
    font-weight: 600;
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

  .dark p {
	color: gray;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height: 25vh;
    width: auto;
  }

  .themeButton {
    display: flex;
    width: 95vw;
    height: auto;
    flex-direction: row;
    justify-content: right;
	padding-top: 5px;
  }

  .location {
    display: flex;
    flex-direction: row;
    margin-top: -10px;
    margin-bottom: 75px;
    height: auto;
  }

  .dark img {
    filter: invert(100%) sepia(0%) saturate(100%) hue-rotate(130deg)
      brightness(100%) contrast(80%);
  }

  button {
    background: none;
    border: none;
    padding: 8px;
    border-radius: 50%;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 450px) {
	h1 {
		font-size: 2em;
	}
  }
</style>
