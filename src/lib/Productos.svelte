<script>
    import Producto from "./Producto.svelte";
    export let productos = [];
</script>

<div class="productos">
    <h1>Productos</h1>
    <div class="productos-container">
        {#each productos as producto}
            <Producto {producto} />
        {/each}
    </div>
</div>

<style>
    .productos {
    }

   
</style>
