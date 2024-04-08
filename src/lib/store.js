import { writable } from "svelte/store";


// selecciones es un array de objetos con la siguiente estructura:
// [{ id: 1, nombre: "nombre", precio: 100, cantidad: 1 }, { id: 2, nombre: "nombre", precio: 100, cantidad: 1 }, ...]
export const selecciones = writable([]);

// carrito es un array de objetos con la siguiente estructura:
// [{ id: 1, nombre: "nombre", precio: 100, cantidad: 1 }, { id: 2, nombre: "nombre", precio: 100, cantidad: 1 }, ...]
export const carrito = writable([]);

// selectedBackground es un string con la ruta de la imagen de fondo seleccionada
export const selectedBackground = writable("/background.jpg");

// categorias es un array de strings con las categorias de los productos con la siguiente estructura:
// [{id: string, nombre: string, desc: string, url: string, tipos: []string}, {...}, ...]

export const categorias = writable([]);

// productos es un array de objetos con la siguiente estructura:
// [{id: string, nombre: string, precio: string, ingredientes: []string, stock: string, categoria: string}, {...}, ...]
export const productos = writable([]);




// Path: src/lib/store.js