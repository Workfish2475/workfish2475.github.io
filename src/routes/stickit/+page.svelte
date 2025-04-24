<script lang="ts">
	import Navbar from "../Navbar.svelte";
	import AppHeader from "./AppHeader.svelte";
	import RoadMap from "./RoadMap.svelte";

	import { darkMode } from "./../theme.js";
</script>

<div class:dark={$darkMode}>
	<div class="navbar">
		<Navbar displayName={"StickIt"} linkDestination={"https://workfish2475.github.io"}/>
	</div>

	<div class="app-header">
		<AppHeader></AppHeader>
	</div>

	<div class="road-map">
		<RoadMap></RoadMap>
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

  .app-header {
	margin-top: 100px;
  }
</style>