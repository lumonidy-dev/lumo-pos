<script>
  import { abrirModal, carrito } from "./store.js";
  import FaMinusCircle from "svelte-icons/fa/FaMinusCircle.svelte";
  import FaPlusCircle from "svelte-icons/fa/FaPlusCircle.svelte";
  export let modalContent;

  function cerrarModal() {
    $abrirModal = false;
  }

  function handleOuterClick() {
    //todo cerrar modal al hacer click fuera del modal
    cerrarModal();
  }

  //buscar el pedido en el carrito
  function buscarPedido() {
    const index = $carrito.findIndex(
      (item) => JSON.stringify(item) === JSON.stringify($modalContent)
    );
    if (index === -1) {
      console.log("No se encontro el pedido");
    } else {
      console.log($modalContent);
    }
  }

  function handleclickIncrementar() {
    //incrementar la cantidad del pedido
    const index = $carrito.findIndex(
      (item) => JSON.stringify(item) === JSON.stringify($modalContent)
    );
    if (index === -1) {
      console.log("No se encontro el pedido");
    } else {
      console.log("Pedido sumado");
      $carrito[index].cantidad++;
      $modalContent.cantidad = $carrito[index].cantidad;
    }
  }

  function handleclickDecrementar() {
    //decrementar la cantidad del pedido
    const index = $carrito.findIndex(
      (item) => JSON.stringify(item) === JSON.stringify($modalContent)
    );
    if (index === -1) {
      console.log("No se encontro el pedido");
    } else {
      console.log("Pedido descontado");
      $carrito[index].cantidad--;
      $modalContent.cantidad = $carrito[index].cantidad;
      if ($carrito[index].cantidad === 0) {
        $carrito.splice(index, 1);
        cerrarModal();
      }
    }
  }

  function info() {
    buscarPedido();
  }
</script>

<div class="modal ">
  <div class="modal-inner glass d-flex flex-col h-30 just-sa">
    <h1 class="fs-xl">Editar pedido</h1>
    <div class="d-flex glass-secondary px-2 align-c just-sb">
      <p class="fs-l fw-b">{$modalContent.tipo.nombre}</p>

      <p class="fs-l fw-b">{$modalContent.tipo.precio}</p>

      <div class="d-flex align-c">
        <button on:click={handleclickIncrementar} class="mas">
          <FaPlusCircle />
        </button>
        <p class="fs- l fw-b m-10">{$modalContent.cantidad}</p>
        <button on:click={handleclickDecrementar} class="menos">
          <FaMinusCircle />
        </button>
      </div>
    </div>

    <div class="d-flex just-c">
       <button class="boton glass" on:click={cerrarModal}>Cerrar</button> 
    </div>
    
  </div>
</div>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-inner {
    padding: 1rem;
    border-radius: 0.5rem;
    width: 50%;
  }
  h1 {
    text-align: center;
    color: whitesmoke;
  }
  button {
    background-color: transparent;
    border: none;
  }
  .menos {
    color: white;
    width: 2rem;
    margin: 0 1rem;
  }
  .menos:hover {
    color: #ff0000;
    opacity: 0.6;
  }
  .mas {
    color: white;
    width: 2rem;
    margin: 0 1rem;
  }
  .mas:hover {
    color: #00ff00;
    opacity: 0.6;
  }
  .boton {
    height: 3rem;
    width: 10rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
</style>
