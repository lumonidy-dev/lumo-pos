<script>
    import { categorias } from "../../store";
    import { deleteProducto, updateProducto } from "../../api";

    import { createEventDispatcher } from "svelte";

    import Select from "../Select.svelte";
    import Modal from "../../Modal.svelte";

    export let producto = {
        id: "abc",
        nombre: "cde",
        precio: "111",
        ingredientes: "",
        categoria: {
            id: "1",
            nombre: "abc",
        },
    };

    let statusMessage = "";
    let showModalEliminar = false;
    let confirmDelete = "";

    const dispatch = createEventDispatcher();

    function handleSelect(event) {
        const selectedOptions = event.detail;
        const categoria = selectedOptions[0];
        // si categoria tiene la key id, asignarla a producto.categoria
        if (categoria.id) {
            producto.categoria = categoria;
        }
    }

    async function handleSubmit() {
        let ingredientesArray;
        // Verificar si producto.ingredientes es una cadena o un array
        if (typeof producto.ingredientes === "string") {
            // Si es una cadena, dividirla en un array
            ingredientesArray = producto.ingredientes
                .split(",")
                .map((item) => item.trim());
        } else if (Array.isArray(producto.ingredientes)) {
            // Si es un array, usarlo directamente
            ingredientesArray = producto.ingredientes;
        } else {
            // Manejar cualquier otro tipo de dato
            console.error("El tipo de producto.ingredientes no es válido.");
            return; // Terminar la función para evitar más errores
        }

        const Producto = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            ingredientes: ingredientesArray,
            categoria: producto.categoria.id,
        };

        try {
            await updateProducto(Producto);
            statusMessage = "Producto actualizado con éxito";
        } catch (error) {
            statusMessage = "Error al actualizar el producto";
        } finally {
            // Emitir el evento para actualizar la lista de productos
            dispatch("update");
        }
    }

    function handleModalDelete() {
        showModalEliminar = true;
    }

    async function handleDelete() {
        try {
            await deleteProducto(producto.id);
            statusMessage = "Producto eliminado con éxito";
        } catch (error) {
            statusMessage = "Error al eliminar el producto";
        } finally {
            // Emitir el evento para actualizar la lista de productos
            dispatch("update");
            showModalEliminar = false;
        }
    }
</script>

<Modal bind:showModal={showModalEliminar}>
    <div slot="header">
        <h2>Eliminar producto</h2>
    </div>
    <div>
        <p>¿Estás seguro de que deseas eliminar el producto?</p>
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
        <div class="d-flex flex-col">
            <label for="nombre-update">Nombre</label>
            <input
                type="text"
                id="nombre-update"
                bind:value={producto.nombre}
                placeholder="Nombre del producto"
            />

            <label for="precio-update">Precio</label>
            <input
                type="string"
                id="precio-update"
                bind:value={producto.precio}
                placeholder="Precio del producto"
            />

            <label for="ingredientes-update">Ingredientes</label>
            <input
                type="text"
                id="ingredientes-update"
                bind:value={producto.ingredientes}
                placeholder="Ingredientes del producto"
            />
        </div>
        <Select
            options={$categorias}
            labelField="nombre"
            on:select={handleSelect}
            multiple={false}
            selectedOptions={[producto.categoria]}
        />
    </div>

    <div class="d-flex flex-row mt-1 gap-1">
        <button class="w-50 guardar" on:click={handleSubmit}>Guardar</button>
        <button class="w-50 borrar" on:click={handleModalDelete}
            >Eliminar</button
        >
    </div>
</div>

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
