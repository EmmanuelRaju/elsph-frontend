<script lang="ts">
    import Loader from "./Loader.svelte";
</script>

<Loader this={() => import("./Title.svelte")}>
    <div slot="fallback" class="layout">
        <div class="splashContainer">
            <div class="splashContainer-horizontal" />
            <div class="splashContainer-vertical" />
        </div>
    </div>
</Loader>

<style>
    .layout {
        width: 100%;
        height: 100vh;
        background-color: white;
        animation: mymove 2.5s cubic-bezier(0.4, 0, 1, 1);
        position: absolute;
        z-index: -1;
        margin: 0;
    }

    @keyframes mymove {
        from {
            background-color: black;
        }

        to {
            background-color: white;
        }
    }

    .splashContainer {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: createBox 2.5s cubic-bezier(0.4, 0, 1, 1);
    }

    .splashContainer-horizontal {
        width: 30rem;
        height: 5rem;
        background-color: white;
        position: absolute;
        top: 30%;
        box-shadow: 0 0 50px 10px rgb(255, 255, 255);
        /* animation: createBox 2.5s ease-in; */
    }

    .splashContainer-vertical {
        height: 40rem;
        width: 5rem;
        background-color: white;
        box-shadow: 0 0 50px 10px rgb(255, 255, 255);
        /* animation: createBox 2.5s ease-in; */
    }

    @keyframes createBox {
        from {
            transform: scale(0);
        }

        to {
            transform: scale(1);
        }
    }
</style>
