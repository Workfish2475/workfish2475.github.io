<script lang="ts">
    import Links from "./Links.svelte";
</script>

<div>
    <h1>Alexander Rivera</h1>
    <p>Portfolio</p>
    <Links />
</div>

<style>
    h1 {
        margin-bottom: 0;
        font-size: 3em;

        background: linear-gradient(to right, #fe7b3a, #ff5101);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

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
        font-weight: 500;
        margin-top: 0;
        color: #555555;
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

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        height: 25vh;
        width: auto;
    }

    @media (max-width: 450px) {
        h1 {
            font-size: 2em;
        }
    }
</style>
