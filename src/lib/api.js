// Path: src/lib/api.js
// Api.js es un archivo que se encarga de realizar las peticiones a la API
// y almacenar los datos en los stores de Svelte.

import { categorias, productos } from "./store.js";

const url = "http://localhost:8000";


export async function fetchCategorias() {
    const response = await fetch(`${url}/categorias`);
    const data = await response.json();
    categorias.set(data);
}

export async function fetchProductos() {
    const response = await fetch(`${url}/productos`);
    const data = await response.json();
    productos.set(data);
}

export async function createCategoria(categoria) {
    const response = await fetch(`${url}/categorias`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(categoria)
    });

    if (!response.ok) {
        throw new Error("Error al crear la categoría");
    }

    // Si la respuesta es exitosa, simplemente la devolvemos
    return await response.json();
}

export async function createProducto(producto) {
    const response = await fetch(`${url}/productos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(producto)

    }
    );

    if (!response.ok) {
        throw new Error("Error al crear el producto");
    }

    // Si la respuesta es exitosa, simplemente la devolvemos
    return await response.json();
}

export async function updateCategoria(categoria) {
    console.log(categoria);
    const response = await fetch(`${url}/categorias/${categoria.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(categoria)
    });

    if (!response.ok) {
        throw new Error("Error al actualizar la categoría");
    }

    // Si la respuesta es exitosa, simplemente la devolvemos
    return await response.json();
}

export async function updateProducto(producto) {
    console.log(producto);
    const response = await fetch(`${url}/productos/${producto.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(producto)
    });

    if (!response.ok) {
        throw new Error("Error al actualizar el producto");
    }

    // Si la respuesta es exitosa, simplemente la devolvemos
    return await response.json();
}

export async function deleteCategoria(id) {
    const response = await fetch(`${url}/categorias/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Error al eliminar la categoría");
    }
}

export async function deleteProducto(id) {
    const response = await fetch(`${url}/productos/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Error al eliminar el producto");
    }
}