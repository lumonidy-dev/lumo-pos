<!-- Categoria.svelte -->
<script>
  export let categoria = {
    nombre: "Categoría Falsa",
    url: "https://m.media-amazon.com/images/I/71Ruy+XEKOS._AC_SL1500_.jpg",
    desc: "Elige un tipo de producto",
    tipos: [
      {
        nombre: "Tipo 1",
        precio: 100,
      },
      {
        nombre: "Tipo 2",
        precio: 200,
      },
      {
        nombre: "Tipo 3",
        precio: 300,
      },
    ],
  };

  export let handleClick = (categoria) => {
    console.log("Clic en Categorias", categoria);
  };

  // Función handleKeyDown que imprime el nombre de la categoría del clickeado
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.stopPropagation();
      event.preventDefault();
      handleClick();
    }
  }
</script>

<button
  class="categoria glass-secondary br-20 w-100 h-100 ratio1-1"
  on:click={() => handleClick(categoria)}
  on:keydown|stopPropagation={handleKeyDown}
  tabindex="0"
>
  <img src={categoria.url} alt={categoria.nombre} />
  <p class="glass-xs etiqueta w-100 br-20-bottom">
    {categoria.nombre}
  </p>
</button>

<style lang="scss">
  @import "src/mixins.scss";
  .categoria {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include padding(0.5rem, x);
    transition:
      box-shadow 0.3s ease,
      transform 0.3s ease;
  }

  img {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
  }

  .etiqueta {
    position: absolute;
    bottom: 0;
    text-align: center;
    text-transform: capitalize;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 600;
    margin: 0 auto;
    transition:
      text-shadow 0.3s ease,
      color 0.3s ease;
    height: 2rem;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #fff;
  }

  button {
    border: none;
  }

  button:focus {
    outline: none;
  }

  .categoria:hover,
  .categoria:focus {
    box-shadow: 0 0 10px rgb(43, 255, 0);
    transform: translateY(5px);
    cursor: pointer;
  }

  .categoria:hover .etiqueta,
  .categoria:focus .etiqueta {
    text-shadow: 0 0 5px #165a1f;
    color: rgb(43, 255, 0);
  }
</style>
