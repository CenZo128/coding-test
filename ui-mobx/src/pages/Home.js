import React, {useContext, useState, useEffect} from 'react'
import { observer, } from 'mobx-react'
import {storesContext} from '../store'


const Home = observer(() => {
        const { counterStore, productStore } = useContext(storesContext)
        const [name, setName] = useState("")
        const [category, setCategory] = useState("")
        const [price, setPrice] = useState(0)
        const [stock, setStock] = useState(0)
        const [image, setImage] = useState("")
        const [UserId, setUserId] = useState(1)

        useEffect(() => {
            productStore.getProducts()
            
        }, [])

        const onHandleSubmitProduct = (e) => {
            e.preventDefault()
            productStore.addProduct({name,category,price,stock,image,UserId})
        }

        return (
            <div>
                {/* <h1>Masuk Router</h1>
                <p>{counterStore.count}</p>
                <button onClick={()=>counterStore.increment()}>Increment</button>
                <button onClick={()=>counterStore.decrement()}>Decrement</button>
                <form onSubmit={(e) => onHandleSubmitProduct(e)}>
                    <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" placeholder="Category" onChange={(e)=>setCategory(e.target.value)}/>
                    <input type="number" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
                    <input type="number" placeholder="Stock" onChange={(e)=>setStock(e.target.value)}/>
                    <input type="text" placeholder="Image URL" onChange={(e)=>setImage(e.target.value)}/>
                    <input type="submit" value="SUBMIT"/>
                </form> */}
                {/* BANNER */}
                
                {/* PRODUCT */}
                {JSON.stringify(productStore.products)}
            </div>
        )
    }
)

export default Home
