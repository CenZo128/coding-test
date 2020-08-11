import { observable, action, decorate } from 'mobx'
import axios from 'axios'

export class ProductStore {
  products = []

  async getProducts() {
    try {
      const dataProducts = await axios({
        method: "GET",
        url: "http://localhost:3000/products"
      })
      this.products = dataProducts.data

    } catch (err) {
      console.log(err)
    }
  }

  async addProduct({ name, category, price, stock, image, UserId }) {
    try {
      let Id = this.products[this.products.length - 1].id
      await axios({
        method: "POST",
        url: "http://localhost:3000/products",
        data: {
          id: Id += 1,
          name,
          category,
          price,
          stock,
          image,
          UserId
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  async deleteProduct(id) {
    try {
      await axios({
        method: "DELETE",
        url: "http://localhost:3000/products/" + id,
      })
      this.products = this.products.filter(product => product.id !== id)
      console.log("deleted")
    } catch (err) {
      alert(err)
    }
  }
}

decorate(ProductStore, {
  products: observable,
  addProduct: action,
  deleteProduct: action
})