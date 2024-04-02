<!-- App.svelte -->

<script>
	import { Router, Route } from "svelte-routing";
	import Login from "./lib/Login.svelte";
	import Main from "./lib/Main.svelte";

	let selectedOption = "";
	let password = "";


</script>

<Router>
	<Route path="/" component={Login} />
	<Route path="/main" component={Main} />
	
</Router>

