<script>
    import { productos } from "../../store";
    import { createCategoria } from "../../api";

    import { createEventDispatcher } from "svelte";

    import Loading from "../../Loading.svelte";
    import Select from "../Select.svelte";

    const dispatch = createEventDispatcher();

    let nombre = "";
    let desc = "";
    let url = "";
    let statusMessage = "";
    let tipos = [];

    let isLoading = false;

    function handleSelect(event) {
        const selectedOptions = event.detail;
        const ids = selectedOptions.map((option) => option.id);
        tipos = ids;
    }

    async function handleSubmit() {
        isLoading = true;
        const categoria = {
            nombre: nombre.trim() != "" ? nombre : "No especificado",
            desc: desc.trim() != "" ? desc : "No especificado",
            url:
                url.trim() != ""
                    ? url
                    : "https://upload.wikimedia.org/wikipedia/commons/4/41/Noimage.svg",
            tipos: tipos.length > 0 ? tipos : [""],
        };

        console.log(categoria);

        try {
            await createCategoria(categoria);
            statusMessage = "Categoría creada con éxito";
        } catch (error) {
            statusMessage = "Error al crear la categoría";
        } finally {
            isLoading = false;
            dispatch("update");
        }
    }
</script>

{#if isLoading}
    <Loading />
{:else}
    {#if statusMessage}
        <p>{statusMessage}</p>
    {/if}

    <div
        class="form-container d-flex flex-col gap-1 px-2 py-2 glass-secondary br-20"
    >
        <div class="d-flex flex-row gap-1">
            <div class="d-flex flex-col align-c">
                <div class="d-flex flex-col">
                    Nombre:
                    <input type="text" bind:value={nombre} name="nombre" />
                </div>

                <div class="d-flex flex-col">
                    Descripción:
                    <input type="text" bind:value={desc} name="desc" />
                </div>

                <div class="d-flex flex-col">
                    URL de la imagen:
                    <input type="text" bind:value={url} name="url" />
                </div>
            </div>
            <div class="d-flex flex-col">
                Tipo:
                <Select
                    options={$productos}
                    labelField="nombre"
                    on:select={handleSelect}
                />
            </div>
        </div>
        <button type="submit" on:click={handleSubmit}>Crear Categoría</button>
    </div>
{/if}

<style>
    input {
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
    }

    input:focus {
        outline: none;
        box-shadow: 0 0 0 2px #3333ff33;
    }

    button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #333;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background-color: #555;
    }
</style>
