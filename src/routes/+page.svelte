<script lang="ts">
  import Header from "./Header.svelte";
  import Bio from "./Bio.svelte";
  import ProjectItem from "./ProjectItem.svelte";
  import Skills from "./Skills.svelte";
  import Contact from "./Contact.svelte";
  import MadeWith from "./MadeWith.svelte";

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
