<script lang="ts">
  import Header from "./Header.svelte";
  import Bio from "./Bio.svelte";
  import ProjectItem from "./ProjectItem.svelte";
  import Skills from "./Skills.svelte";
  import Contact from "./Contact.svelte";
  import MadeWith from "./MadeWith.svelte";

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
</script>

<div class:dark={$darkMode}>
  <div class="header-section">
    <Header />
  </div>

  <div class="tech-stack">
    <Skills />
  </div>

  <div class="project-section">
    <ProjectItem />
  </div>

  <div class="about-me">
    <Bio />
  </div>

  <div>
    <MadeWith />
  </div>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    margin: 0;
    padding: 0;
    height: auto;
    width: auto;
  }

  .dark {
    background-color: #050505;
    color: white;
  }
</style>
