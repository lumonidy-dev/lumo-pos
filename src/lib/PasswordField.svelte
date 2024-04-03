<!-- PasswordField.svelte -->
<script>
    import { IoIosEye, IoIosEyeOff } from "svelte-icons/io";

    export let password = "";
    let showPassword = false;

    const togglePasswordVisibility = () => {
        showPassword = !showPassword;
    };

    const handlePasswordChange = (event) => {
        password = event.target.value;
    };
</script>

<div class="field glass-secondary">
    <input
        type={showPassword ? "text" : "password"}
        value={password}
        on:input={handlePasswordChange}
        placeholder="Contraseña"
    />
    <button on:click={togglePasswordVisibility}>
        {#if showPassword}
            <IoIosEyeOff />
        {:else}
            <IoIosEye />
        {/if}
    </button>
</div>

<style>
    .field {
        border-radius: 10px;
        padding: 10px;
        width: 200px;
        margin-bottom: 10px;
        display: flex;
    }

    input {
        font-family: "Poppins", sans-serif;
        width: 100%;
        border: none;
        border-radius: 5px;
        background-color: transparent;
        color: white;
        font-size: 1rem;
        font-weight: 500;
    }

    input::placeholder {
        color: white;
    }

    button {
        border: none;
        background-color: transparent;
        color: white;
        font-size: 1.2rem;
        text-align: center;
        height: 2.5rem;
        cursor: pointer;
    }
</style>
