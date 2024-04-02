<script>
    export let producto = {
        nombre: "Producto falso",
        url: "https://domino.cl/wp-content/uploads/2021/06/Completos.png",
    };
</script>

<div class="producto glass-secondary br-20 w-100">
    <img class="" src={producto.url} alt={producto.nombre} />
    <div class="hr w-80"></div>
    <p class="nombre">{producto.nombre}</p>
</div>

<style lang="scss">
    @import "src/mixins.scss";
    .producto {
        position: relative;
        justify-content: center;
        align-items: center;
    }

    img {
        position: relative;
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: contain;
        border-radius: 8px;
    }
</style>
