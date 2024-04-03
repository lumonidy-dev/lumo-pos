<!-- categorias.svelte -->
<script>
    import Categoria from "./Categoria.svelte";

    export let categorias = null;
    export let multiplicador = 1;

    let categoriasRenderizados = [];

    if (categorias !== null) {
        categoriasRenderizados = categorias;
    } else {
        categoriasRenderizados = Array.from(
            { length: multiplicador },
            () => ({}),
        );
    }
</script>

<div class="categorias">
    <div class="categorias-container">
        {#each categoriasRenderizados as categoria, index}
            {#if Object.keys(categoria).length > 0}
                <Categoria {categoria} />
            {:else}
                <Categoria />
            {/if}
        {/each}
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
