<script>
	import NavBar from "../NavBar.svelte";
	import Productos from "../Productos.svelte";
	let Name = "Toro POS";
</script>

<main>
	<NavBar></NavBar>

	<div class="container">
		<div class="productos w-50">
			<h2>Productos</h2>
			<Productos multiplicador={15}></Productos>
		</div>
	</div>
</main>

<style>
	.container {
		position: relative;
		display: flex;
		justify-content: center;
		overflow: hidden;
		height: 500px;
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
