<script>
    import { categorias, productos } from "../../store";
    import { fetchCategorias, fetchProductos } from "../../api";
    import { onMount } from "svelte";

    import Loading from "../../Loading.svelte";
    import Modal from "../../Modal.svelte";

    import List from "../../components/List.svelte";
    import Grid from "../../components/Grid.svelte";

    import CrearCategoria from "../../components/Categorias/Crear.svelte";
    import EditarCategoria from "../../components/Categorias/Editar.svelte";

    import CrearProducto from "../../components/Productos/Crear.svelte";
    import EditarProducto from "../../components/Productos/Editar.svelte";

    let selectedCategoria = {
        id: "",
        nombre: "",
        desc: "",
        url: "",
        tipos: [],
    };

    let selectedProduct = {
        id: "",
        nombre: "",
        precio: "",
        ingredientes: [],
        categoria: { id: "", nombre: "" },
    };

    let loadedCategories = false;
    let loadedProducts = false;

    let showModalCrearCategoria = false;
    let showModalEditarCateoria = false;

    let showModalCrearProducto = false;
    let showModalEditarProducto = false;

    async function fetchData() {
        if (!loadedCategories) {
            await fetchCategorias();
            loadedCategories = true;
        }

        if (!loadedProducts) {
            await fetchProductos();
            loadedProducts = true;
        }
    }

    const handleClickCategoria = (categoria) => {
        selectedCategoria = categoria;
        showModalEditarCateoria = true;
    };

    const handleClickProducto = (producto) => {
        selectedProduct = producto;
        showModalEditarProducto = true;
    };

    onMount(() => {
        fetchData();
    });

    function handleUpdate() {
        loadedCategories = false;
        loadedProducts = false;
        fetchData();
        showModalCrearCategoria = false;
        showModalEditarCateoria = false;
        showModalCrearProducto = false;
        showModalEditarProducto = false;
    }

    function handleCrearCategoria() {
        showModalCrearCategoria = true;
    }

    function handleCloseModalCrear() {
        showModalCrearCategoria = false;
    }

    function handleCloseModalEditar() {
        showModalEditarCateoria = false;
    }

    function handleCrearProducto() {
        showModalCrearProducto = true;
    }

    function handleCloseModalCrearProducto() {
        showModalCrearProducto = false;
    }
</script>

<div class="glass-secondary br-20 vw-90 vh-80 overflow-h d-flex flex-row">
    {#if loadedCategories && loadedProducts}
        <!-- <Categorias> -->
        <div class="w-50 border d-flex flex-col">
            <h2>Categorias</h2>
            <div class="d-flex just-sa">
                <button class="create" on:click={handleCrearCategoria}>
                    Crear Categoría
                </button>
            </div>
            <Grid items={$categorias} handleClick={handleClickCategoria} />
        </div>
        <Modal
            bind:showModal={showModalCrearCategoria}
            on:close={handleCloseModalCrear}
        >
            <h2 slot="header">Crear Categoría</h2>
            <CrearCategoria on:update={handleUpdate} />
        </Modal>
        <Modal
            bind:showModal={showModalEditarCateoria}
            on:close={handleCloseModalEditar}
        >
            <h2 slot="header">Editar Categoría</h2>
            <EditarCategoria
                categoria={selectedCategoria}
                on:update={handleUpdate}
            />
        </Modal>
        <!-- </Categorias> -->

        <!-- <Productos> -->
        <div class="w-50 border d-flex flex-col">
            <h2>Productos</h2>
            <div class="d-flex just-sa">
                <button class="create" on:click={handleCrearProducto}>
                    Crear Producto
                </button>
            </div>
            <List items={$productos} handleClick={handleClickProducto} />
            <Modal
                bind:showModal={showModalCrearProducto}
                on:close={handleCloseModalCrearProducto}
            >
                <h2 slot="header">Crear Producto</h2>
                <CrearProducto on:update={handleUpdate} />
            </Modal>
            <Modal
                bind:showModal={showModalEditarProducto}
                on:close={handleCloseModalEditar}
            >
                <h2 slot="header">Editar Producto</h2>
                <EditarProducto
                    producto={selectedProduct}
                    on:update={handleUpdate}
                />
            </Modal>
        </div>
    {:else}
        <Loading />
    {/if}
</div>

<style>
    button.create {
        font-family: "Roboto", sans-serif;
        border: none;
        cursor: pointer;
    }

    button.create {
        border-radius: 5px;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
</style>
