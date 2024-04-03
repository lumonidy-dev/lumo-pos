<script>
    import { onMount } from "svelte";
    import ModalBody from "./Modal/ModalBody.svelte";

    export let categoria;
    export let onClose;

    let nombre, url, desc, tipos;

    $: {
        if (categoria) {
            ({ nombre, url, desc, tipos } = categoria);
        }
    }

    function handleEscapeKey(event) {
        if (event.key === "Escape") {
            onClose();
        }
    }

    function handleEnterKey(event) {
        if (event.key === "Enter") {
            onClose();
        }
    }

    function handleBackgroundClick(event) {
        if (event.target.classList.contains("modal-background")) {
            onClose();
        }
    }

    onMount(() => {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        if (radioButtons.length > 0) {
            const firstRadioButton = radioButtons[0];
            if (firstRadioButton instanceof HTMLElement) {
                firstRadioButton.focus();
            }
        }

        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="modal-background"
    on:click={handleBackgroundClick}
    tabindex="0"
    role="button"
    aria-label="Close"
>
    <div class="modal w-80" role="dialog">
        <div class="modal-content w-100 h-100">
            <span
                class="close"
                on:click={onClose}
                on:keydown={handleEnterKey}
                tabindex="0"
                role="button"
                aria-label="Close">&times;</span
            >
            <div class="d-flex f-col w-100 h-100 align-c">
                <ModalBody {categoria} />
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @import "src/mixins.scss";

    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Color oscuro para el fondo */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        color: black;
        height: 60vh;
    }

    .modal-content {
        margin: 0 auto;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .close:hover {
        color: red;
    }
</style>
