<!-- Categorias.svelte -->
<script>
    import Categoria from "./Categoria.svelte";
    import SubCategoria from "./SubCategoria.svelte";

    export let categorias = null;
    export let multiplicador = 1;

    let categoriasRenderizados = [];

    // Estado para manejar si se está mostrando una categoría o no
    let mostrarTipos = false;
    let categoriaSeleccionada = {};

    if (categorias !== null) {
        categoriasRenderizados = categorias;
    } else {
        categoriasRenderizados = Array.from(
            { length: multiplicador },
            () => ({}),
        );
    }

    // Función para manejar el clic en una categoría
    function handleClickCategoria(categoria) {
        mostrarTipos = true;
        categoriaSeleccionada = categoria;
    }

    // Función para manejar el regreso a las categorías
    function handleClickRegresar() {
        console.log("Regreso a Categorias");
        mostrarTipos = false;
    }
</script>

<div class="glass-secondary br-20 categorias vw-50">
    <div class="categorias-container">
        {#if mostrarTipos}
            <!-- Mostrar tipos si se seleccionó una categoría -->
            <SubCategoria {categoriaSeleccionada} {handleClickRegresar} />
        {:else}
            <!-- Mostrar las categorías -->
            {#each categoriasRenderizados as categoria, index}
                {#if Object.keys(categoria).length > 0}
                    <Categoria {categoria} handleClick={handleClickCategoria} />
                {:else}
                    <Categoria />
                {/if}
            {/each}
        {/if}
    </div>
</div>

<style lang="scss">
    @import "src/mixins.scss";

    .categorias {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .categorias-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-gap: 2rem;
        padding: 2rem;
        height: 100%;
        overflow-y: auto;
        padding-bottom: 8rem;
    }
</style>
