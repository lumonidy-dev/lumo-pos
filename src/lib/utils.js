export const formatearPrecio = (precio) => {
    return formatComma(precio.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
    }))
};

const formatComma = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};