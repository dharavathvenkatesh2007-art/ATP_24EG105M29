const products = [
                            { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                            { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                            { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
                            { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                            { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                          ];
                          

 export function getProductById(id) {
    // Find and return product by ID
                let ide=products.find(pid=>pid.id==id)
                return ide
                          }
                          
export function getAllProducts() {
                            // Return all products
                    return products
                          }

export function getProductsByCategory(category) {
                            // Filter products by category
                let filt=products.filter(pcategory=>pcategory==category)
                 return filt
                          }

export function searchProducts(query) {
                            // Search products by name (case-insensitive)
                 let name=products.find(element=>element.name==query)
                 return name
}

export function checkStock(productId, quantity) {
                            // Check if product has enough stock
                            // Return true/false
                            if(products.stock!=0){
                                let id=products.find(element=>element.id==productId)
                                return true
                            }
                            else return false
                          }
 export function reduceStock(productId, quantity) {
                            // Reduce product stock after purchase
                            
                            if(products.id!=0){
                                let p=products.map(element=>{
                                products.stock=products.stock-quantity
                        }
                        )
                        }
                    }
                          


