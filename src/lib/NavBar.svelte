<!-- Navbar.svelte -->
<script>
  import MdAccountCircle from "svelte-icons/md/MdAccountCircle.svelte";
  import FaBoxOpen from "svelte-icons/fa/FaBoxOpen.svelte";
  import { onMount } from "svelte";

  export let name = "Mi POS";
  let selectedBackground = "";

  // Función para cambiar el fondo
  function changeFondo(fondo) {
    selectedBackground = fondo;
    document.body.style.backgroundImage = `url(${fondo})`;
    // Guardar la preferencia del usuario en el almacenamiento local
    localStorage.setItem("selectedBackground", fondo);
  }
  // Cargar el fondo seleccionado previamente al cargar la página
  onMount(() => {
    const storedBackground = localStorage.getItem("selectedBackground");
    if (storedBackground) {
      selectedBackground = storedBackground;
      document.body.style.backgroundImage = `url(${storedBackground})`;
    }
  });
</script>

<nav class="navbar glass">
  <div class="navbar-container">
    <div class="dropdown">
      <div class="brand">{name}</div>
      <div class="content">
        <button on:click={() => changeFondo("/dark.jpg")}>Dark-blue</button>
        <button on:click={() => changeFondo("/dark2.jpg")}>Blue-red</button>
        <button on:click={() => changeFondo("/green.jpg")}>Green</button>
        <button on:click={() => changeFondo("/yellow-green.jpg")}>Yellow-green</button>
        <button on:click={() => changeFondo("/background.jpg")}>Default</button>
      </div>
    </div>

    <ul>
      <li>
        <a href="/perfil">
          <div class="icon">
            <MdAccountCircle />
          </div>
          <p>Perfil</p>
        </a>
      </li>
      <li>
        <a href="/inventario">
          <div class="icon">
            <FaBoxOpen />
          </div>
          <p>Inventario</p>
        </a>
      </li>
    </ul>
  </div>
</nav>

<style>
  .icon {
    width: 1rem;
    display: flex;

    padding: 0.25rem;
  }
  .navbar {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 0 1rem;
  }

  .dropdown button{
    display: block;
    padding: 10px 15px;
	border: none;
	background: none;
	text-align: start;
	width: 100%;
  }
  .dropdown button:hover {
	background-color: rgba(0, 0, 0, 0.1);
  }
  .dropdown .content {
    background-color: whitesmoke;
    position: absolute;
    min-width: 120px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    display: none;
  }
  .dropdown:hover .content {
    display: block;
  }

  .brand {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .brand:hover {
    cursor: pointer;
    color: rgb(51, 231, 51);
    text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }


  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }

  li {
    padding-right: 1rem;
    background-color: transparent;
  }

  /* Borde derecho para todos los elementos <li> excepto el último */
  li {
    box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.5);
  }

  a {
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 2rem;
    align-items: center;
    justify-content: space-between;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
