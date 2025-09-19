<script lang="ts">
    import Header from "./Header.svelte";
    import Bio from "./Bio.svelte";
    import ProjectItem from "./ProjectItem.svelte";
    import Skills from "./Skills.svelte";
    import Navbar from "./Navbar.svelte";

    import { darkMode } from "./theme.js";
</script>

<div class:dark={$darkMode}>
    <div class="navbar">
        <Navbar
            displayName={"Home"}
            linkDestination={"https://workfish2475.github.io"}
        />
    </div>

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
</div>

<style>
    div:not(.navbar) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        padding: 0;
        height: auto;
        width: auto;
    }

    .dark {
        background-color: #050505;
        color: white;
    }

    .navbar {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        padding-bottom: 25px;
    }

    .header-section {
        margin-top: 150px;
    }
</style>
