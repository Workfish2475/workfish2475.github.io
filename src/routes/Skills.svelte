<script lang="ts">
  import swiftIcon from "../../static/swift.svg";
  import mongoIcon from "../../static/mongodb-icon.svg";
  import svelteIcon from "../../static/svelte-icon.svg";
  import pythonIcon from "../../static/python.svg";
  import javaIcon from "../../static/java.svg";
  import kotlinIcon from "../../static/kotlin-icon.svg";
  import mySQLIcon from "../../static/mysql-original.svg";
  import rIcon from "../../static/r-plain.svg";
  import cIcon from "../../static/c-plain.svg";
  import { darkMode } from "./theme.js";

  const skills = [
    { title: "Swift", icon: swiftIcon },
    { title: "C", icon: cIcon },
    { title: "Python", icon: pythonIcon },
    { title: "Java", icon: javaIcon },
    { title: "MongoDB", icon: mongoIcon },
    { title: "MySQL", icon: mySQLIcon },
    { title: "R", icon: rIcon },
    { title: "Kotlin", icon: kotlinIcon },
    { title: "Svelte", icon: svelteIcon },
  ];
</script>

<h6>Skills</h6>
<div class="skills-container" class:dark={$darkMode}>
  {#each skills as skill}
    <div class:darkItem={$darkMode}>
      <img src={skill.icon} class="buttonItem" alt="language icon" />
      <p>{skill.title}</p>
    </div>
  {/each}
</div>

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

  .skills-container {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(5, 1fr);
  }

  .skills-container > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 10px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    color: black;
  }

  .skills-container.dark > div {
    color: white;
    background-color: #101010;
  }

  .skills-container.dark p {
    color: #e0e0e0;
  }

  .skills-container.dark > div:hover {
    background-color: #555;
  }

  .skills-container > div:hover {
    transform: scale(1.05);
  }

  .buttonItem {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  p {
    color: #333;
    font-weight: bold;
    font-size: 0.8em;
    margin: 0;
    text-align: center;
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
