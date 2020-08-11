import { observable, action, computed, decorate } from 'mobx'
import axios from 'axios'

export class ProductStore {
  products = []
  
  async getProducts(){
    try{
      const dataProducts = await axios({
        method: "GET",
        url: "http://localhost:3000/invoices/transactions"
      })
      this.products = dataProducts.data
    } catch(err) {
      console.log(err)
    }   
  } 
  
  addProduct({name,category,price,stock,image,UserId=1}) {
    console.log(arguments)
  }

  deleteProduct() {
    this.count--
  }
}

decorate(ProductStore,{
    products: observable,
    addProduct : action,
    deleteProduct: action
})