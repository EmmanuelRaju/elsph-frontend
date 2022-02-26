<script>
    import { fade } from "svelte/transition";
</script>

<section transition:fade>
    <video src="/video/mountains.mp4" autoplay loop muted />
    <h2>el shaddai</h2>
</section>
<slot />

<style>
    section {
        position: absolute;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
    section video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    section h2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-transform: uppercase;
        font-size: 21.5vw;
        /* text-align: right; */
        /* margin-left: 0.5vw; */
        font-family: Poppins;
        line-height: 0.85em;
        font-weight: 800;
        color: #fff;
        background: rgba(0, 0, 0, 0.85);
        mix-blend-mode: multiply;
    }
</style>
