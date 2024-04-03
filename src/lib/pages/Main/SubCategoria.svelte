<!-- SubCategoria.svelte -->
<script>
    export let categoriaSeleccionada;
    export let handleClickRegresar;

    // tipos es un arreglo de objetos {nombre: string, precio: number, ingredientes: array[string]}
    let tipos = categoriaSeleccionada.tipos;

    // Función para manejar el clic en un tipo y realizar alguna acción
    function handleClickTipo(tipo) {
        // Aquí puedes implementar la lógica para manejar el clic en un tipo
        console.log("Tipo seleccionado:", tipo);
    }

    function getTitulo(tipo) {
        return tipo.nombre;
    }

    function getIngredientes(tipo) {
        // puede que no tenga asi que retorna no hay información existente. en ternario
        return tipo.ingredientes
            ? tipo.ingredientes.join(", ")
            : "No hay información existente";
    }

    function getPrice(tipo) {
        return tipo.precio;
    }
</script>

<div class="container w-100 d-flex flex-column just-c vw-40">
    <div class="d-flex">
        <div class="left w-50 d-flex flex-col just-c">
            <h2 class="">{categoriaSeleccionada.nombre}</h2>
            <img
                class="img-contain ratio3-4 h-100 w-100"
                src={categoriaSeleccionada.url}
                alt={categoriaSeleccionada.nombre}
            />
            <h2>PrecioTotal</h2>
        </div>
        <div class="right w-50">
            <h2 class="fs-l">{categoriaSeleccionada.desc}</h2>
            <ul class="px-1 d-flex flex-col gap-1">
                {#each tipos as tipo}
                    <li class="d-flexbox w-100 glass-secondary br-20">
                        <div class="tipo fs-s d-flex flex-col align-s px-1">
                            <span>{getTitulo(tipo)}</span>
                            <div class="d-flex">
                                <span>{getIngredientes(tipo)}</span>
                                <span>{getPrice(tipo)}</span>
                            </div>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
    </div>

    <!-- Botón para regresar a la lista de categorías -->
    <button class="w-10 h-10 fw-b fs-m regresar" on:click={handleClickRegresar}
        >&lt</button
    >
</div>

<style lang="scss">
    @import "src/mixins.scss";
    .container {
        position: relative;
    }

    .regresar {
        position: absolute;
        left: 0;
        right: 0;
    }

    li {
        list-style: none;
    }
</style>
