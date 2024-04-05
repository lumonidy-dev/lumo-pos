<script>
  import FaEdit from "svelte-icons/fa/FaEdit.svelte";
  import FaTrash from "svelte-icons/fa/FaTrash.svelte";
  import { formatearPrecio } from "../../utils.js";
  import { carrito } from "./store.js";

  let total = 0;
  // Calcula el total de manera reactiva
  $: total = $carrito.reduce(
    (acc, item) => acc + item.tipo.precio * item.cantidad,
    0
  );

  function editarPedido(pedido) {
    // todo: Implementar lógica para editar un pedido
  }

  function eliminarPedido(pedido) {
    carrito.update(($carrito) => $carrito.filter((item) => item !== pedido));
  }

  function terminarPedido() {
    console.log();
  }
</script>

<div class="detalle glass-secondary w-100 br-20">
  <div class="cuadro-pedido w-90 h-90 glass-dark">
    <table>
      <thead>
        <tr>
          <th class="w-10">Cant.</th>
          <th>Producto</th>
          <th class="w-20">Valor</th>
        </tr>
      </thead>
      <tbody>
        {#each $carrito as item (item.tipo.nombre)}
          <tr class="fila-pedido">
            <td>{item.cantidad}</td>
            <td>{item.tipo.nombre}</td>
            <td class="precio"
              >{formatearPrecio(item.tipo.precio * item.cantidad)}</td
            >
            <td class="acciones">
              <button
                title="Editar"
                class="editar"
                on:click={() => editarPedido(item)}><FaEdit /></button
              >
              <button
                title="Eliminar"
                class="eliminar"
                on:click={() => eliminarPedido(item)}><FaTrash /></button
              >
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <div class="container-total w-60 br-20">
    <h3>Total</h3>
    <p>{formatearPrecio(total)}</p>
  </div>

  <button on:click={terminarPedido}>Terminar Pedido</button>
</div>

<style lang="scss">
  @import "src/mixins.scss";

  .detalle {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @include padding(2rem, y);
  }

  .cuadro-pedido {
    color: #fff;
    border-radius: 10px;
    overflow-y: auto;
    max-height: 18rem;
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
  .precio {
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

    .eliminar,
    .editar {
      flex: 1;
      margin: 0;
      @include padding(0.5rem);
      transition: all 0.2s;

      &:hover {
        filter: brightness(0.8);
        @include padding(0.4rem);
      }
    }

    .eliminar {
      background: rgb(241, 55, 60);
      background: radial-gradient(
        circle,
        rgba(241, 55, 60, 1) 0%,
        rgba(162, 23, 23, 1) 100%
      );
      color: white;
      height: 100%;
      border-radius: 0;
    }

    .editar {
      background: rgb(47, 91, 255);
      background: radial-gradient(
        circle,
        rgba(47, 91, 255, 1) 0%,
        rgba(52, 48, 231, 1) 100%
      );
      color: white;
      height: 100%;
      border-radius: 0;
    }
  }

  .container-total {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.4rem;
    min-width: 8rem;
    background: rgb(246, 191, 18);
    background: linear-gradient(
      90deg,
      rgba(246, 191, 18, 0.7980535279805353) 0%,
      rgba(235, 146, 6, 0.8) 100%
    );
    @include padding(1rem);
    p {
      font-weight: 700;
      margin: 0;
      font-size: 2rem;
      color: #fff;
    }
    h3 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1rem;
      margin: 0;
    }
  }

  @include boton(#45a049);
</style>
