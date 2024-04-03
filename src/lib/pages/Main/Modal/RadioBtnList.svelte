<!-- RadioBtnList es una lista que también tiene un radiobutton y uno de ellos es seleccionable. -->

<script>
    export let tipos = [];

    console.log(tipos);

    function Text(tipo) {
        // Verificar si el tipo es un objeto válido
        if (
            tipo &&
            typeof tipo === "object" &&
            "nombre" in tipo &&
            "ingredientes" in tipo
        ) {
            return `${tipo.nombre} (${tipo.ingredientes.join(", ")})`;
        } else if (tipo && typeof tipo === "object" && "nombre" in tipo) {
            return tipo.nombre;
        } else {
            console.warn("Tipo de producto inválido:", tipo);
            return "Tipo de producto inválido";
        }
    }

    function Price(tipo) {
        if (tipo && typeof tipo === "object" && "precio" in tipo) {
            return `$${tipo.precio}`;
        } else {
            console.warn("Tipo de producto inválido:", tipo);
            return "Tipo de producto inválido";
        }
    }

    let selected = null;
</script>

<!-- Lista de productos -->
<div class="txt-l px-1">
    <!-- Verificar si hay tipos de productos -->
    {#if tipos.length > 0}
        <ul class="">
            <!-- Iterar sobre los tipos de productos -->
            {#each tipos as tipo}
                <li>
                    <div class="d-flex just-sb">
                        <div class="d-flex flex-col">
                            <!-- Renderizar el texto y el precio de cada tipo -->
                            <label for={tipo.nombre}>{Text(tipo)}</label>
                            <span class="fw-b">{Price(tipo)}</span>
                        </div>
                        <!-- Radio button para cada tipo -->
                        <input
                            type="radio"
                            id={tipo.nombre}
                            name="tipo"
                            value={tipo.nombre}
                        />
                    </div>
                </li>
            {/each}
        </ul>
    {:else}
        <p>No hay tipos de productos disponibles.</p>
    {/if}
</div>

<!-- Estilos -->
<style>
    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 10px;
    }

    input[type="radio"] {
        margin-right: 5px;
    }
</style>
