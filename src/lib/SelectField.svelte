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

<div class="field">
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
        background: linear-gradient(
            209.36deg,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.25));
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
