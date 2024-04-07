<script>
  import NavBar from "../../NavBar.svelte";
  import Categorias from "./Categorias.svelte";
  import { CategoriasData } from "./data.js";
  import Detalle from "./Detalle.svelte";

  let categorias = Object.keys(CategoriasData).map((key) => ({
    nombre: key,
    ...CategoriasData[key],
  }));
  let multiplicador = 15;
  let name = "Toro POS";
</script>

<main>
  <NavBar {name}></NavBar>
  <div class="container">
    <div class="productos w-60">
      <h2>Productos</h2>
      <Categorias {categorias}></Categorias>
    </div>
    <div class="container-detalle w-40">
      <h2>Pedido</h2>
      <Detalle></Detalle>
    </div>
  </div>
</main>

<style lang="scss">
  @import "src/mixins.scss";

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 90vh;
  }

  .productos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container-detalle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin-right: 2rem;
    margin-left: 1rem;
  }
</style>
