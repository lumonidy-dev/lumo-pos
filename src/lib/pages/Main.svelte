<script>
	import NavBar from "../NavBar.svelte";
	import Productos from "../Productos.svelte";
	let Name = "Toro POS";
	let productos = [
		{
			id: 1,
			nombre: "Lata Coca Cola",
			url: "https://brindo.cl/3-thickbox_default/1x-coca-cola-lata-350cc.jpg",
		},
		{
			id: 2,
			nombre: "Lata Fanta",
			url: "https://brindo.cl/15-large_default/1x-fanta-lata-350cc.jpg",
		},
		{
			id: 3,
			nombre: "Lata Sprite",
			url: "https://brindo.cl/22-large_default/1x-sprite-lata-350cc.jpg",
		},
		{
			id: 4,
			nombre: "Churrascos",
			url: "https://vacuum.cl/wp-content/uploads/2023/08/churrasco-italiano-1.png",
		},
		{
			id: 5,
			nombre: "Completos",
			url: "https://domino.cl/wp-content/uploads/2021/06/Completos.png",
		}
	];
</script>

<main>
	<NavBar name="ToroPOS" />
	<div class="container">
		<div class="productos">
			<Productos {productos} />
		</div>
	</div>
</main>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 16px;
		grid-row-gap: 8px;
	}

	.productos {
		grid-area: 1 / 1 / 6 / 4;
	}
	.div2 {
		grid-area: 1 / 4 / 3 / 6;
	}
	.div3 {
		grid-area: 3 / 4 / 4 / 6;
	}
	.div4 {
		grid-area: 4 / 4 / 5 / 6;
	}
</style>
