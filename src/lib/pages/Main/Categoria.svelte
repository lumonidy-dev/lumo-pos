<script>
    export let categoria = {
        nombre: "Completos",
        url: "https://domino.cl/wp-content/uploads/2021/06/Completos.png",
    };

    // Función handleClick que imprime el nombre de la categoría del clickeado
    function handleClick() {
        console.log(categoria.nombre);
    }

    // Función handleKeyDown que imprime el nombre de la categoría del clickeado
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            event.stopPropagation();
            event.preventDefault();
            handleClick();
        }
    }
</script>

<button
    class="categoria glass-secondary br-20 w-100"
    on:click={handleClick}
    on:keydown|stopPropagation={handleKeyDown}
    tabindex="0"
>
    <img src={categoria.url} alt={categoria.nombre} />
    <p class="glass-dark etiqueta w-100 br-20-bottom">{categoria.nombre}</p>
</button>

<style lang="scss">
    @import "src/mixins.scss";
    .categoria {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @include padding(0.5rem, x);
        transition:
            box-shadow 0.3s ease,
            transform 0.3s ease;
        aspect-ratio: 3/4;
    }

    img {
        position: relative;
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: contain;
    }

    .etiqueta {
        position: absolute;
        bottom: 0;
        text-align: center;
        text-transform: capitalize;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-weight: 600;
        margin: 0 auto;
        transition:
            text-shadow 0.3s ease,
            color 0.3s ease;
        height: 2rem;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    button {
        border: none;
    }

    button:focus {
        outline: none;
    }

    .categoria:hover,
    .categoria:focus {
        box-shadow: 0 0 10px rgb(43, 255, 0);
        transform: translateY(5px);
        cursor: pointer;
    }

    .categoria:hover .etiqueta,
    .categoria:focus .etiqueta {
        text-shadow: 0 0 5px #165a1f;
        color: rgb(43, 255, 0);
    }
</style>
