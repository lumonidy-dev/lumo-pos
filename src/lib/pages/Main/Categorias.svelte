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
        mostrarTipos = false;
    }
</script>

<div class="glass-secondary br-20 vw-50 vh-80 overflow-h">
    {#if mostrarTipos}
        <!-- Mostrar tipos si se seleccionó una categoría -->
        <SubCategoria {categoriaSeleccionada} {handleClickRegresar} />
    {:else}
        <div class="grid-respo-xs px-2 py-1 overflow h-90">
            <!-- Mostrar las categorías -->
            {#each categoriasRenderizados as categoria, index}
                {#if Object.keys(categoria).length > 0}
                    <Categoria {categoria} handleClick={handleClickCategoria} />
                {:else}
                    <Categoria />
                {/if}
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    @import "src/mixins.scss";
</style>
