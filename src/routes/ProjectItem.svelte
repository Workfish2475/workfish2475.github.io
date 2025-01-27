<script lang="ts">
  import { darkMode } from "./theme.js";
  import { projects } from "./projectItem.js";
  import gitIcon from "../../static/github-mark.svg";
</script>

<h6>Projects</h6>
{#each projects as project}
  <div class:dark={$darkMode}>
    <h3>{project.name}</h3>

    <div class="langs" class:dark={$darkMode}>
      {#each project.languages as language}
        <img src={language} alt="icon" />
      {/each}
    </div>

    <p>
      {@html project.desc}
    </p>

    <div class="button-container" class:dark={$darkMode}>
      <a href={project.gitUrl}>
        <button>
          <img src={gitIcon} alt="githib icon" class="gitButton" />
        </button>
      </a>
    </div>
  </div>
{/each}

<style>
  h6 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: -20px;
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
    border-radius: 10px;
    padding: 10px;
    background-color: #f4f4f4;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    width: 80%;
  }

  .dark {
    background-color: #101010;
    color: white;
    box-shadow: 0 4px 6px rgba(183, 183, 183, 0.1);
  }

  .dark:hover {
    box-shadow: 0 6px 8px rgba(179, 179, 179, 0.15);
  }

  div:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  .langs {
    box-shadow: none;
    padding: 0;
    margin-top: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .langs:hover {
    box-shadow: none;
  }

  .button-container {
    box-shadow: none;
    background-color: none;

    width: auto;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .button-container:hover {
    box-shadow: none;
    background-color: none;
  }

  button {
    border: none;
    background: none;
    border-radius: 10px;
  }

  button:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 25px;
    height: 25px;
    border: none;
  }

  h3 {
    margin-bottom: 0;
    font-size: larger;
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
    color: #555;
    font-size: medium;
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
    color: lightgray;
  }
</style>
