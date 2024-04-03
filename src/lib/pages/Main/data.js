export const CategoriasData = {
    "Completos": {
        url: "https://domino.cl/wp-content/uploads/2021/06/Completos.png",
        desc: "Elige tu completo favorito",
        tipos: [
            { nombre: "Italiano", precio: 1500, ingredientes: ["Palta", "Tomate", "Mayonesa"] },
            { nombre: "Dinámico", precio: 2000, ingredientes: ["Palta", "Tomate", "Mayonesa", "Chucrut"] },
            { nombre: "A lo pobre", precio: 2500, ingredientes: ["Huevo", "Cebolla"] },
            { nombre: "Chacarero", precio: 3000, ingredientes: ["Porotos verdes", "Carne", "Tomate"] }
        ]
    },
    "Churrascos": {
        url: "https://churrascoschile.cl/wp-content/uploads/2022/07/CHURRASCO-ITALIANO-churrascoschile-e1658524693675.png",
        desc: "Elige tu churrasco favorito",
        tipos: [
            { nombre: "Churrasco", precio: 2000, ingredientes: ["Carne"] },
            { nombre: "Churrasco italiano", precio: 2500, ingredientes: ["Carne", "Palta", "Tomate", "Mayonesa"] },
            { nombre: "Churrasco Barros Luco", precio: 3000, ingredientes: ["Carne", "Queso"] },
            { nombre: "Churrasco a lo pobre", precio: 3500, ingredientes: ["Carne", "Huevo", "Cebolla"] },
            { nombre: "Churrasco Brasileño", precio: 4000, ingredientes: ["Carne", "Queso", "Palta", "Mayonesa"] }
        ]
    },
    "Pizzas": {
        url: "https://underpizza-image-storage.s3.us-east-2.amazonaws.com/sides/dEcc48jAvLAM5t2KY/0.webp",
        desc: "Elige tu pizza favorita",
        tipos: [
            { nombre: "Margarita", precio: 5000, ingredientes: ["Tomate", "Queso"] },
            { nombre: "Pepperoni", precio: 6000, ingredientes: ["Tomate", "Queso", "Pepperoni"] },
            { nombre: "Hawaiana", precio: 7000, ingredientes: ["Tomate", "Queso", "Piña", "Jamón"] },
            { nombre: "Vegetariana", precio: 8000, ingredientes: ["Tomate", "Queso", "Champiñones", "Pimentón", "Cebolla"] },
            { nombre: "Pollo BBQ", precio: 9000, ingredientes: ["Tomate", "Queso", "Pollo", "BBQ"] }
        ]
    },
    "Bebidas": {
        url: "https://ossa.elpanzon.cl/wp-content/uploads/2021/03/ElPanzon-Bebidas.png",
        desc: "Elige tu bebida favorita",
        tipos: [
            { nombre: "Coca-Cola", precio: 1000 },
            { nombre: "Pepsi", precio: 1000 },
            { nombre: "Fanta", precio: 1000 },
            { nombre: "Sprite", precio: 1000 },
            { nombre: "Agua", precio: 500 }
        ]
    },
    "Tacos": {
        url: "https://static.vecteezy.com/system/resources/previews/025/067/655/non_2x/tacos-with-ai-generated-free-png.png",
        desc: "Elige tu taco favorito",
        tipos: [
            { nombre: "Taco de pollo", precio: 1500, ingredientes: ["Pollo", "Cilantro", "Cebolla"] },
            { nombre: "Taco de carne", precio: 2000, ingredientes: ["Carne", "Cilantro", "Cebolla"] },
            { nombre: "Taco de pescado", precio: 2500, ingredientes: ["Pescado", "Cilantro", "Cebolla"] },
            { nombre: "Taco vegetariano", precio: 3000, ingredientes: ["Champiñones", "Cilantro", "Cebolla"] }
        ]
    },
    "Fritos": {
        url: "https://dennysofguam.com/wp-content/uploads/2023/12/Shr_Sampler.png",
        desc: "Elige tu frito favorito",
        tipos: [
            { nombre: "Empanadas", precio: 1500 },
            { nombre: "Milanesas", precio: 2000 },
            { nombre: "Papas fritas", precio: 2500 },
            { nombre: "Nuggets", precio: 3000 }
        ]
    }
};

export const BebidasData = {
    nombre: "Bebidas",
    desc: "¿Quieres agregar bebidas?",
    tipos: CategoriasData.Bebidas.tipos,
}

export const ExtrasData = {
    nombre: "Extras",
    desc: "¿Algún acompañamiento?",
    tipos: CategoriasData.Fritos.tipos,
}