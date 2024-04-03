<script>
	import NavBar from "../../NavBar.svelte";
	import Productos from "./Categorias.svelte";
	let name = "Toro POS";
	let multiplicador = 35;

	let categorias = [
		{
			nombre: "Completos",
			url: "https://domino.cl/wp-content/uploads/2021/06/Completos.png",
		},
		{
			nombre: "Churrascos",
			url: "https://churrascoschile.cl/wp-content/uploads/2022/07/CHURRASCO-ITALIANO-churrascoschile-e1658524693675.png",
		},
		{
			nombre: "Pizzas",
			url: "https://underpizza-image-storage.s3.us-east-2.amazonaws.com/sides/dEcc48jAvLAM5t2KY/0.webp",
		},
		{
			nombre: "Bebidas",
			url: "https://ossa.elpanzon.cl/wp-content/uploads/2021/03/ElPanzon-Bebidas.png",
		},
		{
			nombre: "Tacos",
			url: "https://static.vecteezy.com/system/resources/previews/025/067/655/non_2x/tacos-with-ai-generated-free-png.png",
		},
	];
</script>

<main>
	<NavBar {name}></NavBar>

	<div class="container">
		<div class="productos w-50">
			<h2>Productos</h2>
			<Productos {categorias}></Productos>
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
