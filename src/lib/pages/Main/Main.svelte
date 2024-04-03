<script>
	import NavBar from "../../NavBar.svelte";
	import Categorias from "./Categorias.svelte";
	import { CategoriasData, BebidasData } from "./data.js";

	// Itera sobre las categorías y las convierte en un array de objetos compatible con el componente Categorias
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
		<div class="productos w-50">
			<h2>Productos</h2>
			<Categorias {categorias}></Categorias>
		</div>
	</div>
</main>

<style>
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

	main {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 99vw;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}
</style>
