<script>
    export let producto = {
        nombre: "Producto falso",
        url: "https://domino.cl/wp-content/uploads/2021/06/Completos.png",
    };
</script>

<div class="producto glass-secondary br-20">
    <img class="" src={producto.url} alt={producto.nombre} />
    <div class="hr w-80"></div>
    <p class="nombre">{producto.nombre}</p>
</div>

<style lang="scss">
    @import "src/mixins.scss";
    .producto {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        // @include padding(20px);
        margin-right: 250px;
    }

    img {
        position: relative;
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: contain;
        border-radius: 8px;
    }
</style>
