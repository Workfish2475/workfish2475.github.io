<script lang="ts">
    import { page } from "$app/state";
    import blockIcon from "../../../../static/block.svg";
</script>

<div>
    <img src={blockIcon} alt="Block icon" />
    <h1>{page.status}</h1>
    <strong>{page.error?.message}</strong>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        height: 100vh;
        align-items: center;
        justify-content: center;

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

    img {
        filter: brightness(0) saturate(100%) invert(13%) sepia(100%)
            saturate(6763%) hue-rotate(5deg) brightness(104%) contrast(116%);

        height: 75%;
        width: 75%;
    }

    h1 {
        margin: 0;
    }

    strong {
        color: gray;
    }
</style>
