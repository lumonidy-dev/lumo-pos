<script>
    import RadioBtnList from "./RadioBtnList.svelte";
    export let categoria = {};
    let selected = null;

    function handleSelectionChange(selection) {
        selected = selection;
        dispatchEvent(
            new CustomEvent("selectionChange", { detail: selection }),
        );
    }
</script>

<div class="txt-l px-1">
    <h2>{categoria.nombre}</h2>
    <p>{categoria.desc}</p>
</div>
<RadioBtnList tipos={categoria.tipos} {selected} />
