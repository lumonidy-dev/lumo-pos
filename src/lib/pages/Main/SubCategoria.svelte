<script>
    import { IoIosArrowDropleftCircle, IoIosCart } from "svelte-icons/io/";
    import { writable, derived } from "svelte/store";
    import ListItem from "./ListItem.svelte";
    import { Bebidas, Extras } from "./data.js";

    export let categoriaSeleccionada;
    export let handleClickRegresar;

    let tipos = categoriaSeleccionada.tipos;

    // Estado de la selección
    let seleccion = writable([]);

    function formatComma(str) {
        return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            event.stopPropagation();
            event.preventDefault();
            handleClickRegresar();
        }
    }

    // Calcula el total seleccionado
    const totalSeleccionado = derived(
        seleccion,
        ($seleccion, set) => {
            let total = 0;
            $seleccion.forEach((item) => {
                total += item.precio;
            });
            set(total);
        },
        0,
    );

    // Manejar la selección al incrementar un producto
    function handleIncrementar(event) {
        const producto = event.detail.tipo;
        seleccion.update((items) => [...items, producto]);
    }

    // Manejar la selección al decrementar un producto
    function handleDecrementar(event) {
        const producto = event.detail.tipo;
        seleccion.update((items) => items.filter((item) => item !== producto));
    }

    function handleCarrito() {
        console.log("Seleccion", $seleccion);
    }
</script>

<div class="d-flex flex-wrap flex-col w-100 h-100">
    <div class="h-4r just-se d-flex flex-row align-c gap-md border-bottom">
        <!-- Botón para regresar a la lista de categorías -->
        <button
            class="regresar h-10 fw-b fs-m border-none pos-abs pos-left"
            on:click={handleClickRegresar}
            on:keydown|stopPropagation={handleKeyDown}
            tabindex="0"
        >
            <IoIosArrowDropleftCircle />
        </button>
        <div class="d-flex flex-row h-100 just-se w-80">
            <img
                class="img-contain h-100"
                src={categoriaSeleccionada.url}
                alt={categoriaSeleccionada.nombre}
            />
            <div class="d-flex align-c h-100 fs-3rem just-sb just-sa w-100">
                <span class="w-80 fs-2rem txt-l pl-1"
                    >{categoriaSeleccionada.nombre}</span
                >
                <span class="w-100 fs-2rem">Total: %{totalSeleccionado}</span>
            </div>
        </div>
    </div>
    <div class="d-flex flex-row w-100 h-80 overflow-h">
        <div class="d-flex flex-col w-50 h-100">
            <h2 class="fs-l">{categoriaSeleccionada.desc}</h2>
            <div class="d-flex flex-col h-100 align-c gap-1">
                <div class="overflow h-75">
                    <ul class="px-1 d-flex flex-col gap-1">
                        {#each tipos as tipo}
                            <ListItem
                                {tipo}
                                on:incrementar={handleIncrementar}
                                on:decrementar={handleDecrementar}
                            />
                        {/each}
                    </ul>
                </div>
                <button
                    class="w-80 h-10 border-none btn btn-hover glass fw-b fs-l br-20"
                    on:click={handleCarrito}
                >
                    <div class="d-flex flex-row just-sa align-c">
                        <div class="icono"><IoIosCart /></div>
                        <span> Agregar al carrito</span>
                    </div>
                </button>
            </div>
        </div>
        <div class="d-flex flex-col w-50 overflow border-left">
            <div class="border-bottom">
                <h2 class="fs-l">{Bebidas.desc}</h2>
                <div class="overflow-h">
                    <ul class="px-1 d-flex flex-col gap-1">
                        {#each Bebidas.tipos as tipo}
                            <ListItem
                                {tipo}
                                on:incrementar={handleIncrementar}
                                on:decrementar={handleDecrementar}
                            />
                        {/each}
                    </ul>
                </div>
            </div>
            <div>
                <h2 class="fs-l">{Extras.desc}</h2>
                <div class="overflow-h">
                    <ul class="px-1 d-flex flex-col gap-1">
                        {#each Extras.tipos as tipo}
                            <ListItem
                                {tipo}
                                on:incrementar={handleIncrementar}
                                on:decrementar={handleDecrementar}
                            />
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @import "src/mixins.scss";

    .regresar {
        background: none;
        cursor: pointer;
        color: #ddd;
    }

    .regresar:hover {
        color: #fff;
    }
</style>
