<script>
    import "../app.css";
</script>

<div class="flex flex-col justify-between h-screen bg-gray-950">
    <div class="flex justify-start p-5">
        <a href="/">
            <h1 class="text-3xl text-white font-mono font-bold">Docknote</h1>
        </a>
    </div>
    
    <div class="m-auto">
        <slot />
    </div>

    <div class="flex justify-center p-5">
        <div class="flex flex-col gap-3 text-white">
            <a href="/about">About</a>
            <a href="/privacy">Privacy</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms</a>
        </div>
    </div>
</div>