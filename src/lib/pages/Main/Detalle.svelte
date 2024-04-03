<script>
    let pedidos = [
        { nombre: "Completo Italiano", cantidad: 1, precio: 1500 },
        { nombre: "Coca Cola Lata", cantidad: 1, precio: 1000 },
        { nombre: "Papas Fritas Medianas", cantidad: 1, precio: 2100 },
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

    <div class="cuadro-pedido">
        <ul>
            {#each pedidos as pedido}
                <li>
                    {pedido.cantidad} {pedido.nombre} - ${pedido.precio}
                </li>
            {/each}
        </ul>
    </div>
    <div class="total">Total: ${calcularTotal()}</div>

    <button on:click={terminarPedido}>Terminar Pedido</button>
</div>

<style lang="scss">
    @import "src/mixins.scss";
    
    .detalle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .cuadro-pedido {
        background-color: #ffffff;
        color: black;
        border-radius: 10px;
        padding: 1px;
        width: 90%;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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
        margin-top: 10px;
    }

    button{
        @include boton(green);
    }

</style>
