<script>
    import { createEventDispatcher } from "svelte";

    // Definir las propiedades del componente
    export let options = [];
    export let labelField = "label";
    export let selectedOptions = [];
    export let multiple = true;

    $: console.log(selectedOptions);

    const dispatch = createEventDispatcher();

    let searchString = "";

    // Función para manejar los cambios en el input de búsqueda
    function handleSearch(event) {
        searchString = event.target.value.toLowerCase();
    }

    // Función para manejar la selección/deselección de una opción
    function handleToggleSelection(option) {
        if (selectedOptions.includes(option)) {
            selectedOptions = selectedOptions.filter((item) => item !== option);
        } else {
            selectedOptions = multiple
                ? [...selectedOptions, option]
                : [option];
        }
        dispatch("select", selectedOptions);
    }

    // Función para eliminar una opción seleccionada
    function removeSelectedOption(option) {
        selectedOptions = selectedOptions.filter((item) => item !== option);
        dispatch("select", selectedOptions);
    }

    // Filtrar las opciones según el texto de búsqueda
    $: filteredOptions = options.filter((option) =>
        option[labelField].toLowerCase().includes(searchString),
    );
</script>

<!-- Componente de selección múltiple -->
<div class="glass br-20 w-100">
    <div class="select-container d-flex just-c align-c w-100">
        <div class="d-flex flex-col just-sa w-100">
            <input
                type="text"
                placeholder="Buscar..."
                on:input={handleSearch}
                class="br-20-top border-none search-input"
                name="search"
            />

            <div class="options-container w-100">
                <ul class=" h-100">
                    <div class="d-flex flex-col align-c gap-1">
                        {#each filteredOptions as option (option.id)}
                            <li class="h-100">
                                <button
                                    class="option h-100 glass-secondary br-20"
                                    on:click={() =>
                                        handleToggleSelection(option)}
                                    on:keydown={(event) =>
                                        handleToggleSelection(option)}
                                >
                                    <span class="px-1">
                                        {option[labelField]}
                                    </span>
                                </button>
                            </li>
                        {/each}
                    </div>
                </ul>
            </div>
        </div>
    </div>

    <!-- Contenedor para las selecciones -->
    <div class="selected-options-container">
        {#each selectedOptions as option (option.id)}
            <button
                class="option h-100 glass-secondary br-20"
                on:click={() => removeSelectedOption(option)}
                type="button"
            >
                {option[labelField]}
                <span class="remove-icon">✕</span>
            </button>
        {/each}
    </div>
</div>

<style>
    /* Estilos del componente aquí */
    .options-container {
        max-height: 200px;
        overflow-y: auto;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    li {
        background-color: transparent;
    }

    .options-container {
        margin: 0;
        padding: 0;
    }

    .option {
        display: block;
        padding: 0.5rem;
        border: none;
        cursor: pointer;
        text-align: left;
    }

    .option:hover {
        background-color: #e9e9e9;
    }

    .selected-options-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        padding: 0.5rem;
    }

    .remove-icon {
        margin-left: 0.5rem;
    }

    .search-input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        margin-bottom: 0.5rem;
    }
</style>
