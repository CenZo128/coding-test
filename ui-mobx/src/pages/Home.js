import React, {useContext} from 'react'
import { observer, } from 'mobx-react'
import {storesContext} from '../store'

const Home = observer(() => {
        const { counterStore } = useContext(storesContext)
        return (
            <div>
                <h1>Masuk Router</h1>
                <p>{counterStore.count}</p>
                <button onClick={()=>counterStore.increment()}>Increment</button>
                <button onClick={()=>counterStore.decrement()}>Decrement</button>
                {/* HEADER */}
    
                {/* BANNER */}
    
                {/* PRODUCT */}
            </div>
        )
    }
)

export default Home
