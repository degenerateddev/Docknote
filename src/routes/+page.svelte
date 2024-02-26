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
                <input type="text" name="content" />
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