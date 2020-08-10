import React from 'react'
import { CounterStore } from './counter-store'

export const storesContext = React.createContext({
  counterStore: new CounterStore(),
})