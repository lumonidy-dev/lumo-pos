<script>
    import FaEdit from 'svelte-icons/fa/FaEdit.svelte'
    import FaTrash from 'svelte-icons/fa/FaTrash.svelte'

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
                    <th>Cant.</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {#each pedidos as pedido}
                    <tr class="fila-pedido">
                        <td>{pedido.cantidad}</td>
                        <td>{pedido.nombre}</td>
                        <td>${pedido.precio}</td>
                        <div class="acciones">
                            <button class="editar" on:click={() => editarPedido(pedido)}><FaEdit class="icono"/></button>
                            <button class="eliminar" on:click={() => eliminarPedido(pedido)}><FaTrash class="icono"/></button>
                        </div>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
    <div class="total w-60 br-20 glass-dark">
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

    .fila-pedido {
        position: relative;

        &:hover .acciones {
            display: flex;
            height: 100%;
        }
    }

    .acciones {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0; 
        display: none;
        align-items: center;
        justify-content: space-between;

        .eliminar, .editar {
            flex: 1;
            margin: 0;
            @include padding(.5rem)
        }

        .eliminar {
            background-color: red;
            color: white;
            height:100%;
            border-radius: 0;
        }

        .editar {
            background-color: blue;
            color: white;
            height:100%;
            border-radius: 0;
        }
    }

    .total {
        margin-top: 1rem;
        padding: 1rem;
        -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);
        p {
            @include media-query(desktop) {
                font-size: 2.6rem;
            }
            text-align: center;
            margin: 0;
            font-size: 1.5rem;
            color: #fff;
        }
    }


    @include boton(#45a049);
</style>
