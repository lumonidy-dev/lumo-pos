<script>
    import { categorias } from "../../store";
    import { createProducto } from "../../api";

    import { createEventDispatcher } from "svelte";

    import Loading from "../../Loading.svelte";
    import Select from "../Select.svelte";

    const dispatch = createEventDispatcher();

    const producto = {
        nombre: "Sin nombre",
        desc: "Sin descripción",
        precio: "0",
        ingredientes: [],
        categoria: {
            id: "UfsOblViwVNpqB1ycVJG",
            nombre: "Sin categoría",
        }, // es el id de la categoría "Sin categoría",
    };

    let ingredientesTexto = "";
    $: {
        producto.ingredientes = ingredientesTexto
            .split(",")
            .map((ingrediente) => ingrediente.trim());
    }
    let isLoading = false;
    let statusMessage = "";

    function handleSelect(event) {
        const selectedOptions = event.detail;
        const categoria = selectedOptions[0];
        // Verificar si categoria está definido
        if (categoria && categoria.id) {
            // Asignar la id de la categoría a producto.categoria
            producto.categoria = categoria.id;
        }
    }

    async function handleSubmit() {
        isLoading = true;
        const ProductoRequest = {
            nombre:
                producto.nombre.trim() != "" ? producto.nombre : "Sin nombre",
            desc:
                producto.desc.trim() != "" ? producto.desc : "Sin descripción",
            precio: producto.precio,
            ingredientes: producto.ingredientes,
            categoria: producto.categoria.id,
        };
        try {
            await createProducto(ProductoRequest);
            statusMessage = "Producto creado con éxito";
        } catch (error) {
            statusMessage = "Error al crear el producto";
        } finally {
            isLoading = false;
            // Emitir el evento para actualizar la lista de productos
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
        <label for="nombre">Nombre</label>
        <input
            type="text"
            id="nombre"
            bind:value={producto.nombre}
            placeholder="Nombre del producto"
        />

        <label for="desc">Descripción</label>
        <textarea
            id="desc"
            bind:value={producto.desc}
            placeholder="Descripción del producto"
        ></textarea>

        <label for="precio">Precio</label>
        <input
            type="string"
            id="precio"
            bind:value={producto.precio}
            placeholder="Precio del producto"
        />

        <label for="ingredientes">Ingredientes</label>
        <input
            type="text"
            id="ingredientes"
            bind:value={ingredientesTexto}
            placeholder="Ingrese los ingredientes separados por comas"
        />

        <Select
            options={$categorias}
            labelField="nombre"
            on:select={handleSelect}
            multiple={false}
        />

        <button class="btn-primary br-20" on:click={handleSubmit}>
            Crear producto
        </button>
    </div>
{/if}

<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

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
