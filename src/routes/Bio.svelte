<script lang="ts">
	import { darkMode } from "./theme.js";
</script>

<div class:dark={$darkMode}>
  <h6>About me</h6>

  <p>
    I am a recent graduate looking for opportunities. Currently, I am very
    interested in <strong>mobile app development</strong>
    and the various technologies related to it. However, I am also familiar all the
    technologies listed above for, non-mobile app development tasks or positions.
    I am always happy to learn as much as I can.
  </p>
</div>

<style>
  h6 {
    font-size: 1.5em;
    font-weight: bold;

    text-align: center;
    margin-bottom: 5px;
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
    text-align: left;
	font-size: large;
	font-weight: medium;
	line-height: 1.5em;
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

  strong {
    color: black;
  }

  .dark strong {
	color: white;
  }

  div {
  padding: 10px;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
}
  
</style>
