class ProductManager {
    constructor() {
      this.products = [];
      this.lastId = 0;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        throw new Error(`Product not found with ID ${id}`);
      }
      return product;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (this.products.some((p) => p.code === code)) {
        throw new Error(`Product with code ${code} already exists`);
      }
      const product = {
        id: ++this.lastId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(product);
      return product;
    }
  
    updateProduct(id, updates) {
      const product = this.getProductById(id);
      const updatedProduct = Object.assign({}, product, updates);
      if (updates.code && this.products.some((p) => p.code === updates.code && p.id !== id)) {
        throw new Error(`Product with code ${updates.code} already exists`);
      }
      Object.assign(product, updatedProduct);
      return product;
    }
  
    deleteProduct(id) {
      const index = this.products.findIndex((p) => p.id === id);
      if (index === -1) {
        throw new Error(`Product not found with ID ${id}`);
      }
      this.products.splice(index, 1);
    }
  }
  
    //DESAFIO 2: MANEJO DE ARCHIVOS

  const productManager = new ProductManager();

  const product1 = productManager.addProduct(
    "producto 1",
    "Este es el primer producto de prueba",
    100,
    "No hay imagen",
    "primero",
    10
  );
  const product2 = productManager.addProduct(
    "producto 2",
    "Este es el segundo producto de prueba",
    150,
    "No hay imagen",
    "segundo",
    20
  );
  const product3 = productManager.addProduct(
    "producto 3",
    "Este es el tercer producto de prueba",
    200,
    "No hay imagen",
    "tercero",
    30
  );
  
  console.log(productManager.getProductById(2));
  
  try {
    productManager.getProductById(4);
  } catch (error) {
    console.log(error.message);
  }
  
  const updatedProduct = productManager.updateProduct(1, { price: 120, stock: 15 });
  console.log(updatedProduct); 
  
  try {
    productManager.updateProduct(2, { code: "tercero" });
  } catch (error) {
    console
  }