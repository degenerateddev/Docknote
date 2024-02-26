<script>
    import "../app.css";
</script>

<div class="flex flex-col justify-between h-screen">
    <div class="flex justify-center">
        <a href="/">
            <h1 class="text-3xl">Docknote</h1>
        </a>
    </div>
    
    <div class="m-auto">
        <slot />
    </div>

    <div class="flex justify-between">
        <a href="/about">About</a>
        <a href="/privacy">Privacy</a>
        <a href="/contact">Contact</a>
        <a href="/terms">Terms</a>
    </div>
</div>