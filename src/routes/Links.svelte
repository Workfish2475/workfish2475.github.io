<script lang="ts">
  import gitIcon from "../../static/github-mark.svg";
  import linkedinIcon from "../../static/bootstrap_linkedin.svg";
  import { darkMode } from "./theme.js";

</script>

<div class="link-container" class:dark={$darkMode}>
  <a href="https://github.com/Workfish2475">
    <button class="buttonItem">
      <img src={gitIcon} alt="Github icon" class="buttonImg" />
      <strong> Github </strong>
    </button>
  </a>

  <a href="https://www.linkedin.com/in/alexander2475/">
    <button class="buttonItem">
      <img src={linkedinIcon} alt="Github icon" class="buttonImg" />
      <strong> Linkedin </strong>
    </button>
  </a>
</div>

<style>
  .buttonItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 95%;
    padding: 5px;
  }

  .buttonImg {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  .link-container {
    padding: 5px;
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  .dark button {
    color: white;
    background-color: black;
  }

  .dark img {
    padding: 1px;
    border-radius: 5px;
    background-color: white;
  }

  .dark button:hover {
    background-color: rgba(152, 152, 152, 0.1);
  }

  strong {
    display: flex;
    align-items: center;
    color: #555555;
    font-weight: 500;
  }

  .dark strong {
    color: white;
  }

  button {
    background: none;
    border: none;
    padding: 4px;
    border-radius: 8px;
    font-size: 1em;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
  }
</style>
