<!-- PasswordField.svelte -->
<script>
    export let password = "";
    let showPassword = false;

    const togglePasswordVisibility = () => {
        showPassword = !showPassword;
    };

    const handlePasswordChange = (event) => {
        password = event.target.value;
    };
</script>

<div class="field">
    <input
        type={showPassword ? "text" : "password"}
        value={password}
        on:input={handlePasswordChange}
        placeholder="Contraseña"
    />
    <button on:click={togglePasswordVisibility}>
        {showPassword ? "Ocultar" : "Mostrar"}
    </button>
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
</style>
