<!-- App.svelte -->

<script>
	import { Router, Route } from "svelte-routing";
	import Login from "./lib/pages/Login/Login.svelte";
	import Main from "./lib/pages/Main/Main.svelte";
	import Inventario from "./lib/pages/Inventario/Inventario.svelte";
	import NotFound from "./lib/pages/NotFound.svelte";

	let selectedOption = "";
	let password = "";
</script>

<Router>
	<Route path="/" component={Login} />
	<Route path="/main" component={Main} />
	<Route path="/inventario" component={Inventario} />
	<Route path="*" component={NotFound} />
</Router>
