<script>
    import Producto from "./Producto.svelte";

    export let productos = null;
    export let multiplicador = 1;

    let productosRenderizados = [];

    if (productos !== null) {
        productosRenderizados = productos;
    } else {
        productosRenderizados = Array.from({ length: multiplicador });
    }
</script>

<div class="productos">
    <div class="productos-container w-100">
        {#each productosRenderizados as producto}
            <Producto />
        {/each}
    </div>
</div>

<style>
    .productos-container {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        grid-gap: 20px;
        border: 1px solid black;
        height: 100%;
    }
</style>
