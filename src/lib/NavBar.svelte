<!-- Navbar.svelte -->
<script>
	import MdAccountCircle from "svelte-icons/md/MdAccountCircle.svelte";
	import FaBoxOpen from "svelte-icons/fa/FaBoxOpen.svelte";

	export let name = "Mi POS";
</script>

<nav class="navbar">
	<div class="navbar-container">
		<div class="brand">{name}</div>
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
		background: linear-gradient(
			209.36deg,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0) 100%
		);
		box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(10px);
		color: white;
		position: fixed;
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
