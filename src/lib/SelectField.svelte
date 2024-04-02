<!--SelectField.svelte-->
<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let selectedOption = "";
    export let options = [];
    export let placeholder = "";

    const handleChange = (event) => {
        selectedOption = event.target.value;
    };
</script>

<div class="field glass-secondary">
    <select on:change={handleChange} value={selectedOption}>
        <option value="" disabled>{placeholder}</option>
        {#each options as option}
            <option value={option}>{option} </option>
        {/each}
    </select>
</div>

<style>
    .field {
        border-radius: 10px;
        padding: 10px;
        width: 200px;
        margin-bottom: 10px;
    }

    select {
        width: 100%;
        border: none;
        border-radius: 5px;
        background-color: transparent;
        color: white;
        font-size: 1rem;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
    }

    option {
        color: black;
    }
</style>
