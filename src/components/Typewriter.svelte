<h1 class="anim">Welcome, Sojourner!</h1>

<style>
    h1 {
        width: max-content;
        position: relative;
        font-family: "Hurricane", cursive;
    }

    h1::before {
        content: "";
        background-color: white;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        animation: typewriter 1s steps(21) forwards;
    }

    @keyframes typewriter {
        to {
            left: 100%;
        }
    }
</style>
