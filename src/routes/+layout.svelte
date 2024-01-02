<div class="flex flex-col h-screen">
    <div class="flex justify-center">
        <a href="/">
            <img src="/images/logo.png" alt="Logo" class="w-32 h-32" />
        </a>
    </div>
    
    <slot />

    <div class="flex justify-between">
        <a href="/about">About</a>
        <a href="/privacy">Privacy</a>
        <a href="/contact">Contact</a>
        <a href="/terms">Terms</a>
    </div>
</div>