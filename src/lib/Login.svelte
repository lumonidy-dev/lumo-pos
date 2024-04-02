<script>
  import Logo from "/logo.webp";
  import PasswordField from "./PasswordField.svelte";
  import SelectField from "./SelectField.svelte";

  // Opciones para el campo de opciones
  const options = [
	"12.345.678-9",
	"23.456.789-0",
	"34.567.890-1",
	"45.678.901-2",
	"56.789.012-3",
  ];

  export let selectedOption;
  export let password;

  const handleSubmit = () => {
	console.log("Seleccionado:", selectedOption, "Contraseña:", password);
  };
</script>

 <div class="login">
	<div class="title">
	  <h1>Iniciar sesión</h1>
	  <img src={Logo} alt="Logo de la empresa" />
	</div>
	<div class="fields">
	  <SelectField bind:selectedOption {options} placeholder="Busca tu Rut" />
	  <PasswordField bind:password />
	</div>
	<button type="submit" on:click={handleSubmit}>Ingresar</button>
  </div>

  <style>
	.title {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}

	.title img {
	  position: absolute;
	  z-index: -1;
	  width: 100px;
	  height: 100px;
	  margin-top: -2.5rem;
	  filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.25));
	  border-radius: 1rem;
	  user-select: none;
	  -webkit-user-drag: none;
	}

	.title h1 {
	  position: relative;
	  z-index: 1;
	  user-select: none;
	}

	.login {
	  padding: 1rem 2rem;
	  border-radius: 40px;
	  background: linear-gradient(
		209.36deg,
		rgba(255, 255, 255, 0.5) 0%,
		rgba(255, 255, 255, 0) 100%
	  );
	  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
	  backdrop-filter: blur(10px);
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}

	.fields {
	  display: flex;
	  flex-direction: column;
	  padding: 1rem 0.5rem;
	  width: 100%;
	  align-items: center;
	}

	button {
	  border: none;
	  background: linear-gradient(
		209.36deg,
		rgba(255, 255, 255, 0.5) 0%,
		rgba(255, 255, 255, 0) 100%
	  );
	  filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.25));
	  color: white;
	  font-weight: 600;
	  font-family: "Poppins", sans-serif;
	  font-size: 1.5rem;
	  border-radius: 10px;
	  padding: 0.25rem 1rem;
	  width: 200px;
	  cursor: pointer;
	  transition: 100ms;
	}

	button:hover {
	  background-color: rgba(0, 255, 0, 0.2);
	  box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
	}
  </style>
