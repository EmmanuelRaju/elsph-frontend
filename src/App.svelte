<script lang="ts">
  import Splash from "./components/SplashScreen.svelte";
  import Typewriter from "./components/Typewriter.svelte";
</script>

<Splash />
<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Hurricane&family=Poppins:wght@800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<!-- <Typewriter /> -->
<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
