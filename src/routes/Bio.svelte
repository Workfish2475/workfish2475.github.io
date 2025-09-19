<script lang="ts">
    import { darkMode } from "./theme.js";
</script>

<div class:dark={$darkMode}>
    <h6>About me</h6>

    <p>
        Recent graduate with a strong interest in software development. I'm
        always open to learning something new and enjoy making cool things. In
        my free time, I work on side projects written in <strong>Swift</strong>
        and have been tinkering with <strong>Go</strong>.
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
        text-align: center;
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
