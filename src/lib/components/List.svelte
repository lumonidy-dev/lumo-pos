<script>
    export let items = [
        {
            nombre: "Categoría 1",
        },
        {
            nombre: "Categoría 2",
        },
        {
            nombre: "Categoría 3",
        },
        {
            nombre: "Categoría 4",
        },
    ];

    export let handleClick = (categoria) => {};
</script>

<div class="d-flex flex-col h-100">
    <div class="p-2 h-100 overflow">
        {#each items as item}
            <ul>
                <li class="item br-20">
                    <div>
                        <button
                            class="br-20-top w-100 br-20 py-1"
                            on:click={() => handleClick(item)}
                            on:keydown={(event) => {
                                if (event.key === "Enter") handleClick(item);
                            }}
                        >
                            <div
                                class=" w-100 d-flex
                        br-20-bottom"
                            >
                                <span class="etiqueta h2 w-100">
                                    {item.nombre}</span
                                >
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
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
        & .etiqueta {
            text-shadow: 0 0 10px rgba(73, 69, 184, 0.556);
            color: rgb(8, 0, 255);
        }
    }

    li {
        list-style: none;
    }

    ul {
        padding: 0;
    }
</style>
