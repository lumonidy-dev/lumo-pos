<script>
    import LeftSide from "./LeftSide.svelte";
    import RightSide from "./RightSide.svelte";
    import { Bebidas, Extras } from "../data.js";
    import { onMount } from "svelte";

    export let categoria;
    let bebidas = Bebidas;
    let extras = Extras;
    let selected = null;

    // Define el manejador de eventos para el evento 'tipoSeleccionado'
    function handleTipoSeleccionado(event) {
        console.log("Tipo seleccionado:", event.detail);
    }

    // Escucha el evento 'tipoSeleccionado' cuando el componente se monta
    onMount(() => {
        // Agrega un escucha de eventos al componente para el evento 'tipoSeleccionado'
        window.addEventListener("tipoSeleccionado", handleTipoSeleccionado);

        // Retira el escucha de eventos cuando el componente se desmonta
        return () => {
            window.removeEventListener(
                "tipoSeleccionado",
                handleTipoSeleccionado,
            );
        };
    });
</script>

<div class="left w-50 d-flex flex-col align-c">
    <div class="px-2 w-80 h-100 shadow-left d-flex flex-col just-c">
        <LeftSide {categoria} />
    </div>
    <button class="glass-primary br-20 w-80">Agregar al carrito</button>
</div>
<div class="right w-50 h-100 overflow">
    <RightSide {categoria} />
</div>

<style lang="scss">
    @import "src/mixins.scss";
    
    @include boton(#45a049);

</style>
