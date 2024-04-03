<script>
    export let categoria = {};
</script>

<div class="w-100 h-100 d-flex flex-col just-c">
    <h2>{categoria.nombre}</h2>
    <img src={categoria.url} alt={categoria.nombre} />
</div>
