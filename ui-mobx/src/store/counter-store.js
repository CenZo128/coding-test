import { observable, action, computed, decorate } from 'mobx'

export class CounterStore {
  count = 10

  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}

decorate(CounterStore,{
    count: observable,
    increment : action,
    decrement: action
})