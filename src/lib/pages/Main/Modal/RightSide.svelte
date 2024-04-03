<!-- RightSide.svelte -->
<script>
    import RadioContainer from "./RadioContainer.svelte";
    import { Bebidas, Extras } from "../data.js";
    import { createEventDispatcher } from "svelte";

    export let categoria;
    let bebidas = Bebidas;
    let extras = Extras;
    let selectedTipo = null; // Variable para almacenar el tipo seleccionado
    const dispatch = createEventDispatcher(); // Crear despachador de eventos

    // Manejar el cambio de selección recibido desde RadioContainer
    function handleSelectionChange(selection) {
        selectedTipo = selection; // Actualizar la variable con la selección recibida
        // Emitir evento con la selección al componente padre
        dispatch("tipoSeleccionado", selectedTipo);
    }
</script>

<!-- Contenedor RightSide -->
<div>
    <RadioContainer {categoria} on:selectionChange={handleSelectionChange} />
    <div class="hr-black"></div>
    <RadioContainer
        categoria={bebidas}
        on:selectionChange={handleSelectionChange}
    />
    <div class="hr-black"></div>
    <RadioContainer
        categoria={extras}
        on:selectionChange={handleSelectionChange}
    />
</div>
