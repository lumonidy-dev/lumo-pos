<!-- Modal.svelte -->
<script>
    export let showModal; // boolean

    let dialog; // HTMLDialogElement

    $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    class="glass"
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:click|self={() => dialog.close()}
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation class="modal-container">
        <slot name="header" />
        <slot />
        <!-- svelte-ignore a11y-autofocus -->
        <button autofocus class="close-button" on:click={() => dialog.close()}
            >&times</button
        >
    </div>
</dialog>

<style>
    dialog {
        min-width: 30vw;
        max-width: 50vw;
        border-radius: 0.5rem;
        overflow: hidden;
        background-color: rgba(255, 166, 0, 0.5);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        border: none;
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
    }
    .modal-container {
        padding-top: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .close-button {
        cursor: pointer;
        transition: background-color 0.3s ease;
        font-size: 2rem;
        font-weight: 600;
        position: absolute;
        top: 0;
        right: 0.5rem;
        border: none;
        background-color: transparent;
        color: red;
        -webkit-text-stroke: 1px black;
    }
    .close-button:hover {
        background-color: #555;
    }
</style>
