<script>
    import { enhance } from "$app/forms";

    export let form;
    let success = false;

    $: if (form?.success) {
        success = true;
    }
</script>

<div class="container mx-auto">
    <div class="flex h-full">
        <div class="m-auto">
            <form method="POST" use:enhance>
                <textarea name="content" class="w-1/2 p-4 font-mono font-semibold text-lg bg-purple-800 text-white" cols="30" rows="10"></textarea>
                <button type="submit" class="w-1/2 p-3 font-mono font-semibold text-lg bg-purple-500">Submit</button>
            </form>
            {#if success}
                <div class="container mx-auto bg-green-600 rounded-md w-full p-5">
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