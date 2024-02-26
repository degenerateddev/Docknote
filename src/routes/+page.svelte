<script>
    import { enhance } from "$app/forms";
    import { page } from "$app/stores";

    export let form;
    let success = false;
    let link = "";

    $: if (form?.success) {
        success = true;

        setTimeout(() => {
            success = false;
            link = $page.url.origin + "/note/" + form?.uuid
        }, 3000);
    }
</script>

<div class="container mx-auto">
    <div class="flex h-full">
        <div class="m-auto">
            {#if link !== ""}
                <div class="text-xl cursor-pointer p-3 bg-black bg-opacity-50 text-white" on:click={() => {
                    navigator.clipboard.writeText(link);
                }}>{link}</div>
            {/if}
            <form method="POST" use:enhance>
                <textarea name="content" class="w-full p-4 font-mono font-semibold text-lg bg-purple-800 text-white" cols="30" rows="10"></textarea>
                <button type="submit" class="w-full p-3 font-mono font-semibold text-lg bg-purple-500">Submit</button>
                <small class="text-center text-white">Your note will expire 24h after creation if not accessed!</small>
            </form>
            {#if success}
                <div class="container mx-auto bg-green-600 rounded-md w-full p-5 m-5">
                    <div class="flex h-full">
                        <div class="m-auto">
                            Success
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>