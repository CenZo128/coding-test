import { observable, action, computed, decorate } from 'mobx'

export class ProductStore {
  products = []

  addProduct({name,category,price,stock,image,UserId=1}) {
    this.count++
  }

  decrement() {
    this.count--
  }
}

decorate(ProductStore,{
    products: observable,
    increment : action,
    decrement: action
})