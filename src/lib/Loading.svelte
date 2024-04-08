<div class="d-flex flex-col just-c align-c w-100 h-100">
    <div class="spinner"></div>
    <p class="text-center">Cargando...</p>
</div>

<style lang="scss">
    .spinner {
        border: 0.5rem solid rgba(0, 0, 0, 0.1);
        border-top: 0.5rem solid #333;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        animation: spin 1s linear infinite;
        position: relative;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>
