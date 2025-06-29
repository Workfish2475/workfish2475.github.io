<script lang="ts">
</script>

<div class="container">
  <h1>Features</h1>

  <div class="checkboxes">
    <div class="checkgroup">
      <input type="checkbox" id="sync" disabled={true} checked />
      <label for="sync">iCloud Syncing</label>
    </div>

    <div class="checkgroup">
      <input type="checkbox" id="sync" disabled={true} checked />
      <label for="sync">Basic Markdown like Syntax</label>
    </div>

    <div class="checkgroup">
      <input type="checkbox" id="sync" disabled={true} checked />
      <label for="sync">Widgets</label>
    </div>

    <div class="checkgroup">
      <input type="checkbox" id="sync" disabled={true} checked />
      <label for="sync">Cross Platform</label>
    </div>

    <div class="checkgroup">
      <input type="checkbox" id="sync" disabled={true} checked />
      <label for="sync">Pinnable windows on MacOS</label>
    </div>
  </div>
</div>

<style>
  .container {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 95vw;
    max-width: 800px;
    gap: 10px;
  }

  .checkboxes {
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 500px;
    gap: 15px;

    /* border: 1px red solid; */
  }

  .checkgroup {
    display: flex;
  }

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #f1d244;
    border-radius: 50%;
    background-color: white;
    cursor: not-allowed;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input[type="checkbox"]:checked {
    background-color: #f1d244;
  }

  input[type="checkbox"]:checked::after {
    content: "✓";
    color: #272727;
    font-size: 14px;
    font-weight: bold;
    line-height: 1;
  }

  h1 {
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

  label {
    padding-left: 10px;
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
