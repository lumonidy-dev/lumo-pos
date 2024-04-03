<script>
    let pedidos = [
        { nombre: "Completo Italiano", cantidad: 1, precio: 12500 },
        { nombre: "Coca Cola Lata", cantidad: 1, precio: 80000 },
        { nombre: "Papas Fritas Medianas", cantidad: 1, precio: 12100 },
        { nombre: "Papas Fritas Medianas", cantidad: 1, precio: 12100 },
        { nombre: "Papas Fritas Medianas", cantidad: 1, precio: 12100 },
        { nombre: "Papas Fritas Medianas", cantidad: 1, precio: 12100 },
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
        <table>
            <thead>
                <tr>
                    <th>Cantidad</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {#each pedidos as pedido}
                    <tr>
                        <td>{pedido.cantidad}</td>
                        <td>{pedido.nombre}</td>
                        <td>${pedido.precio}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
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
        overflow-y: auto;
        max-height: 15rem;
    }

    table {
        width: 100%;
        border-collapse: collapse; // Colapsar los bordes de la tabla
    }

    th,
    td {
        padding: 8px;
        text-align: left;
        border-right: 1px solid #fff; // Añadir línea separadora a la derecha de cada celda
    }

    th:last-child,
    td:last-child {
        border-right: none; // Eliminar la línea separadora en la última columna
    }

    th {
        border-bottom: 1px solid #fff; // Añadir borde inferior a los encabezados
    }

    .total {
        background-color: black;
        margin-top: 1rem;
        padding: 1rem;

        p {
            @include media-query(desktop) {
                font-size: 2.6rem;
            }
            text-align: center;
            margin: 0;
            font-size: 1.5rem;
            color: green;
        }
    }

    @include boton(#45a049);
</style>
