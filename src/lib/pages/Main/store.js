import { writable } from "svelte/store";

export const selecciones = writable([]);

export const carrito = writable([]);
export const selectedBackground = writable("/background.jpg");
export const abrirModal = writable(false);
export const modalContent = writable([]);