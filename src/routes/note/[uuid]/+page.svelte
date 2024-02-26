<script>
    export let data;
</script>

<div class="container mx-auto">
    <div class="flex h-full">
        <div class="m-auto text-xl p-3 bg-black bg-opacity-50 text-white">
            {#if data.note}
                <div>{data.note}</div>
            {:else}
                <div>Note not found</div>
            {/if}
        </div>
    </div>
</div>