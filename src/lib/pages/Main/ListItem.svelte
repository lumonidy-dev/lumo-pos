<script>
  import { createEventDispatcher } from "svelte";

  export let tipo;

  let contador = 0;
  const dispatch = createEventDispatcher();

  function incrementarContador() {
    contador++;
    dispatch("incrementar", { tipo, cantidad: contador });
  }

  function decrementarContador() {
    if (contador > 0) {
      contador--;
      dispatch("decrementar", { tipo, cantidad: contador });
    }
  }

  function getTitulo(tipo) {
    return tipo.nombre;
  }

  function getIngredientes(tipo) {
    return tipo.ingredientes ? tipo.ingredientes.join(", ") : "";
  }

  function getPrice(tipo) {
    return `$${formatComma(tipo.precio.toFixed(0))}`;
  }

  function formatComma(str) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>

<li
  class="d-flexbox w-100 glass-secondary br-20 shadow btn-hover {contador > 0
    ? 'selected'
    : ''}"
>
  <div class="d-flex flex-row">
    <div class="d-flex flex-col w-70 just-c align-s px-1">
      <span class="fw-b">{getTitulo(tipo)}</span>
      {#if tipo.ingredientes && tipo.ingredientes.length > 0}
        <span class="fs-l txt-l">{getIngredientes(tipo)}</span>
      {/if}
    </div>
    <div class="w-sm just-se d-flex flex-row align-c w-80">
      <button
        class="circulo verde incrementar pointer"
        on:click={incrementarContador}
      >
        <span class="fw-b fs-m">+</span>
      </button>

      <button class="circulo contador">
        <span class="fw-b fs-m">{contador}</span>
      </button>
      <button
        class="circulo rojo decrementar pointer"
        on:click={decrementarContador}
      >
        <span class="fw-b fs-m">-</span>
      </button>
    </div>
    <div class="d-flex flex-col ml-30">
      <p class="fs-l pr-1 h-100">{getPrice(tipo)}</p>
    </div>
  </div>
</li>

<style>
  li {
    list-style: none;
  }

  .circulo {
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    aspect-ratio: 1/1;
    background-color: transparent;
    border: 1px solid #000;
  }

  .rojo {
    background-color: rgba(255, 0, 0, 0.35);
  }

  .verde {
    background-color: rgba(0, 255, 0, 0.35);
    color: #064206;
  }

  .selected {
    background-color: #ffffff94;
    color: #130909;
  }
</style>
