import { observable, action, decorate } from 'mobx'
import axios from 'axios'

export class CartStore {
  carts = []

  async getCarts() {
    try {
      this.carts = await axios({
        method: "GET",
        url: "http://localhost:3000/carts?customerId=1"
      })

    } catch (err) {
      console.log(err)
    }
  }

}

decorate(CartStore, {
  products: observable,
  getCarts : action  
})