class ProductManager {
    constructor() {
        this.products = [];
    }

    static id = 0

    addProduct(title, description, price, image, code, stock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(` El codigo ${code} esta repetido`)
                break;
            }
        }

        const newProduct = {
            title,
            description,
            price,
            image,
            code,
            stock,
        }

        if (!Object.values(newProduct).includes(undefined)) {
            ProductManager.id++;
            this.products.push({ ...newProduct, id: ProductManager.id });
        } else {
            console.log("Todos los campos son obligatorios")
        }

    }

    getProduct() {
        return this.products;
    }

    existe(id) {
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id) {
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id))
    }
}

const productos = new ProductManager
// Array vacio
console.log(productos.getProduct())

// Productos
productos.addProduct("Cafe", "Nescafe", 500, "Imagen", "abc123", 5)
productos.addProduct("Coca", "Coca-Cola", 550, "Imagen2", "abc124", 10)

// Array productos
console.log(productos.getProduct())

// Validacion de CODE repetido
productos.addProduct("Coca1", "Coca-Cola1", 560, "Imagen3", "abc124", 8)

// Busqueda de producto por ID
productos.getProductById(2)

// Busqueda por ID no encontrado
productos.getProductById(3)
