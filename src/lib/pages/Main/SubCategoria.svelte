<script>
    import { IoIosArrowDropleftCircle, IoIosCart } from "svelte-icons/io";
    import { formatearPrecio } from "../../utils";
    import { derived } from "svelte/store";
    import ListItem from "./ListItem.svelte";
    import { Bebidas, Extras } from "./data.js";
    import { selecciones, carrito } from "./store.js";

    export let categoriaSeleccionada;
    export let handleClickRegresar;

    export let tipos = categoriaSeleccionada.tipos;

    // Estado de la selección
    let seleccion = selecciones;
    let carro = carrito;

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            event.stopPropagation();
            event.preventDefault();
            handleClickRegresar();
        }
    }

    const totalSeleccionado = derived(
        seleccion,
        ($seleccion) => {
            let total = 0;
            $seleccion.forEach((item) => {
                total += item.tipo.precio * item.cantidad;
            });
            return total;
        },
        0,
    );

    let total = 0;

    totalSeleccionado.subscribe((value) => {
        total = formatearPrecio(value.toFixed(0));
    });

    function handleIncrementar(event) {
        const { tipo, cantidad } = event.detail;
        seleccion.update((selecciones) => {
            const index = selecciones.findIndex((s) => s.tipo === tipo);
            if (index !== -1) {
                let seleccionesActualizadas = [...selecciones];
                seleccionesActualizadas[index] = {
                    ...seleccionesActualizadas[index],
                    cantidad,
                };
                return seleccionesActualizadas;
            } else {
                return [...selecciones, { tipo, cantidad: 1 }];
            }
        });
        // console.log("Incrementar selección:", $selecciones); // Banderas para seguimiento
    }

    function handleDecrementar(event) {
        const { tipo, cantidad } = event.detail;
        seleccion.update((selecciones) => {
            if (cantidad === 0) {
                return selecciones.filter((s) => s.tipo !== tipo);
            } else {
                const index = selecciones.findIndex((s) => s.tipo === tipo);
                let seleccionesActualizadas = [...selecciones];
                seleccionesActualizadas[index] = {
                    ...seleccionesActualizadas[index],
                    cantidad,
                };
                return seleccionesActualizadas;
            }
        });
        // console.log("Decrementar selección:", $selecciones); // Banderas para seguimiento
    }

    function handleCarrito() {
        carrito.update(($carrito) => {
            let carritoActualizado = [...$carrito];
            $selecciones.forEach((seleccion) => {
                const indiceExistente = carritoActualizado.findIndex(
                    (item) => item.tipo.nombre === seleccion.tipo.nombre,
                );
                if (indiceExistente !== -1) {
                    carritoActualizado[indiceExistente].cantidad +=
                        seleccion.cantidad;
                } else {
                    carritoActualizado.push(seleccion);
                }
            });
            return carritoActualizado;
        });

        selecciones.set([]);

        // console.log("Selecciones movidas al carrito."); // Banderas para seguimiento
        handleClickRegresar(); // Volver a la vista anterior o cerrar el modal
        // console.log("Estado final del carrito:", $carrito); // Estado del carrito después de actualizar
    }
</script>

<div class="d-flex flex-wrap flex-col w-100 h-100">
    <div class="h-4r just-sa d-flex flex-row align-c gap-md border-bottom">
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
                <span class="w-20 fs-2rem txt-l pr-1">Total: ${total}</span>
            </div>
        </div>
    </div>
    <div class="d-flex flex-row w-100 h-80 overflow-h">
        <div class="d-flex flex-col w-50 h-100">
            <h2 class="fs-l">{categoriaSeleccionada.desc}</h2>
            <div class="d-flex flex-col h-100 align-c gap-1">
                <div class="overflow h-70">
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
