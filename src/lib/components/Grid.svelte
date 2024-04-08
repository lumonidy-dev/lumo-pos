<script>
    export let items = [
        {
            nombre: "Categoría 1",
            url: "https://via.placeholder.com/150",
        },
        {
            nombre: "Categoría 2",
            url: "https://via.placeholder.com/150",
        },
        {
            nombre: "Categoría 3",
            url: "https://via.placeholder.com/150",
        },
        {
            nombre: "Categoría 4",
            url: "https://via.placeholder.com/150",
        },
    ];

    export let handleClick = (categoria) => {};
</script>

<div class="d-flex flex-col h-100">
    <div class="grid-respo-xs p-2 h-100 overflow">
        {#each items as item}
            <div class=" d-flex flex-col">
                <div class="item br-20">
                    <button
                        class=" glass-secondary br-20-top w-100 ratio1-1 pt-xs br-20-top"
                        on:click={() => handleClick(item)}
                        on:keydown={(event) => {
                            if (event.key === "Enter") handleClick(item);
                        }}
                    >
                        <div class="d-flex flex-col">
                            <img
                                class="h-70 d-flex just-c align-c img-cover -top black ratio1-1"
                                src={item.url}
                                alt={item.nombre}
                            />
                        </div>
                    </button>
                    <div class="etiqueta w-100 glass-dark d-flex br-20-bottom">
                        <span class="h2 w-100"> {item.nombre}</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .etiqueta {
        position: relative;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        transition:
            text-shadow 0.3s ease,
            color 0.3s ease;
    }

    button {
        border: none;
    }

    button:focus {
        outline: none;
    }

    button:hover,
    .etiqueta:hover {
        cursor: pointer;
    }

    .item:hover {
        box-shadow: 0 0 10px rgb(43, 255, 0);
        transform: translateY(5px);
        & .etiqueta {
            text-shadow: 0 0 10px rgb(43, 255, 0);
            color: rgb(43, 255, 0);
        }
    }
</style>
