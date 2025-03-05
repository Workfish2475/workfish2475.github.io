<script lang="ts">
    import type { PageData } from "./$types.js";
    import gitIcon from "../../../../static/github-mark.svg";

    export let data: PageData;
</script>

<div class="main-container">
    <strong class="disclaimer">Note: This portion of the site is a work in progress!</strong>

    <div class="title">
        <h1>
            {data.name}
        </h1>
    </div>

    <div class="content">
        <div class="desc">
            <p>
                {@html data.desc}
            </p>
        </div>
        <div class="stats">
            <strong>Info</strong>
            {#each data.languages as langauge}
                <img src={langauge} alt="project language">
            {/each}

            <a href="{data.gitUrl}"> 
                <img src={gitIcon} alt="github icon">
            </a>
        </div>
    </div>
</div>

<style>
    .main-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 25px;

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

    .title {
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid black;
    }

    .content {
        display: flex;
        flex-direction: row;
        height: 100%;
    }

    .desc{
        width: 75%;
    }

    .stats {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        width: 25%;

        background-color: #f4f4f4;
    }

    img {
        height: 50px;
        width: 50px;
    }

    .disclaimer {
        background-color: rgb(250, 83, 83);
        border-radius: 10px;
        border: 5px red solid;
        color: white;
        padding: 10px;
    }

    @media screen and (max-width: 750px) {
        .stats {
            gap: 10px;
            width: 90%;
        }

        .content {
            width: 100%;
            align-items: center;
            flex-direction: column-reverse;
            height: auto;
        }

        img {
            height: 25px;
            width: 25px;
        }
    }
</style>
