import React from 'react'
import { CounterStore } from './counter-store'
import { ProductStore } from './product-store'

export const storesContext = React.createContext({
  counterStore: new CounterStore(),
  productStore: new ProductStore(),
})