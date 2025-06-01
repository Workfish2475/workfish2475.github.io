<script lang="ts">
	import { darkMode } from "../theme.js";
	import appIcon from "./assets/1024.png";
</script>

<div class="container" class:dark={$darkMode}>
	<div class="content">
		<img src={appIcon} alt="demo">
		<p>
			StickIt is a sticky note app for iOS, iPadOS, and macOS that lets users create notes that seamlessly sync across their Mac and mobile devices via iCloud.
		</p>
	</div>
</div>

<style>
  .container {	
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60vh;
	width: 95vw;
	max-width: 800px;
  }

  img {
	max-width: 250px;
	max-height: 250px;
  }

  .content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 25px;
  }

  p {
	padding-left: 10px;
	padding-right: 10px;
	font-size: large;
	font-weight: 400;
	
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
