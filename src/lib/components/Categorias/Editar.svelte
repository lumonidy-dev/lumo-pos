<script>
    import { productos } from "../../store";
    import { deleteCategoria, updateCategoria } from "../../api";

    import { createEventDispatcher } from "svelte";

    import Select from "../Select.svelte";
    import Modal from "../../Modal.svelte";
    import Categoria from "../../pages/Main/Categoria.svelte";

    export let categoria = {
        id: "",
        nombre: "",
        desc: "",
        url: "",
        tipos: [
            {
                id: "",
                nombre: "",
            },
        ],
    };

    let statusMessage = "";
    let showModalEliminar = false;
    let confirmDelete = "";

    const dispatch = createEventDispatcher();

    function handleSelect(event) {
        const selectedOptions = event.detail;
        if (selectedOptions.length > 0) {
            categoria.tipos = selectedOptions;
        }
    }

    async function handleSubmit() {
        const Categoria = {
            id: categoria.id,
            nombre: categoria.nombre,
            desc: categoria.desc,
            url: categoria.url,
            tipos: categoria.tipos.map((tipo) => tipo.id),
        };

        console.log(Categoria);

        try {
            await updateCategoria(Categoria);
            statusMessage = "Categoría actualizada con éxito";
        } catch (error) {
            statusMessage = "Error al actualizar la categoría";
        } finally {
            dispatch("update"); // Emitir el evento para actualizar la lista de productos
        }
    }

    function handleModalDelete() {
        showModalEliminar = true;
    }

    async function handleDelete() {
        try {
            await deleteCategoria(categoria.id);
            statusMessage = "Categoría eliminada con éxito";
        } catch (error) {
            statusMessage = "Error al eliminar la categoría";
        } finally {
            // Emitir el evento para actualizar la lista de productos
            dispatch("update");
            showModalEliminar = false;
        }
    }
</script>

<Modal bind:showModal={showModalEliminar}>
    <div slot="header">
        <h2>Eliminar categoría</h2>
    </div>
    <div>
        <p>¿Estás seguro de que deseas eliminar la categoría?</p>
        <div class="inputConfirm">
            <input
                type="text"
                bind:value={confirmDelete}
                placeholder="Escribe 'eliminar' para confirmar"
                name="confirmDelete"
            />
            <button
                on:click={handleDelete}
                disabled={confirmDelete != "eliminar"}>Eliminar</button
            >
        </div>
    </div>
</Modal>
<div class=" d-flex flex-col gap-1 br-20">
    <div class="d-flex flex-row gap-2 w-100 just-c align-s">
        <div class="d-flex flex-col gap-xs">
            <div class="d-flex flex-col readonly">
                ID
                <input
                    type="text"
                    bind:value={categoria.id}
                    name="id"
                    readonly
                />
            </div>

            <div class="d-flex flex-col">
                Nombre
                <input
                    type="text"
                    bind:value={categoria.nombre}
                    name="nombre"
                />
            </div>

            <div class="d-flex flex-col">
                Descripción
                <textarea bind:value={categoria.desc} name="nombre"></textarea>
            </div>

            <div class="d-flex flex-row w-100 just-sb py-1">
                <div class="d-flex flex-col gap-1">
                    URL
                    <input type="text" bind:value={categoria.url} name="url" />
                </div>
                <img
                    class="img card d-flex just-c align-c"
                    src={categoria.url}
                    alt={categoria.nombre}
                />
            </div>
        </div>

        <div class="d-flex flex-col">
            Productos
            <Select
                options={$productos}
                labelField="nombre"
                on:select={handleSelect}
                multiple={true}
                selectedOptions={categoria.tipos}
            />
        </div>
    </div>
    <div class="d-flex flex-row mt-1 gap-1">
        <button class="w-50 guardar" on:click={handleSubmit}>Guardar</button>
        <button class="w-50 borrar" on:click={handleModalDelete}
            >Eliminar</button
        >
    </div>
</div>

<style>
    img {
        width: 33%;
        height: auto;
        object-fit: contain;
        aspect-ratio: 1;
    }

    .img.card {
        background-color: #ccc;
        border-radius: 0.5rem;
    }
    input,
    textarea {
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
    }

    input:focus,
    textarea:focus {
        outline: none;
        box-shadow: 0 0 0 2px #3333ff33;
    }

    button {
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #3333ff33;
    }

    .guardar {
        background-color: green;
        color: white;
        -webkit-text-stroke: black 0.1px;
        font-size: 1.3rem;
    }

    .borrar {
        background-color: red;
        color: white;
        -webkit-text-stroke: black 0.1px;
        font-size: 1.3rem;
    }
</style>
