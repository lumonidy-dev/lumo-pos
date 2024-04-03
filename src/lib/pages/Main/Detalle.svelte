<script>
    let pedidos = [
        { nombre: "Completo Italiano", cantidad: 1, precio: 12500 },
        { nombre: "Coca Cola Lata", cantidad: 1, precio: 80000 },
        { nombre: "Papas Fritas Medianas", cantidad: 1, precio: 12100 },
    ];

    function calcularTotal() {
        return pedidos.reduce((total, pedido) => total + pedido.precio, 0);
    }

    function terminarPedido() {
        // Aquí podrías implementar la lógica para finalizar el pedido
    }
</script>

<div class="detalle glass-secondary w-100 br-20">
    <h2>Detalle del Pedido</h2>

    <div class="cuadro-pedido glass-dark">
        <ul>
            {#each pedidos as pedido}
                <li>
                    {pedido.cantidad} {pedido.nombre} - ${pedido.precio}
                </li>
            {/each}
        </ul>
    </div>
    <div class="total w-60 br-20">
        <p>
            ${calcularTotal()}
        </p>
    </div>

    <button on:click={terminarPedido}>Terminar Pedido</button>
</div>

<style lang="scss">
    @import "src/mixins.scss";
    
    .detalle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @include padding(1rem);
    }

    .cuadro-pedido {
        color: #fff;
        border-radius: 10px;
        padding: 1px;
        width: 90%;
    }

    ul {
    /* Use flex boxes to align li items */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    /* Remove default padding from major browsers */
    @include padding(2rem ,x);
    /* Hide the default decorations for li items */
    list-style: none;
    & > li {
    /* Display the elements in one line */
    display: inline-block;
}
}
    .total {
        background-color: black;
        margin-top:1rem;
        padding: 1rem;
        p{
                margin: 0;
                font-size: 2.6rem;
                color: green;
        }
    }

    @include boton(#45a049);
</style>
