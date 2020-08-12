import React, { useContext, useState, useEffect } from 'react'
import { observer, useObserver } from 'mobx-react'
import { storesContext } from '../store'

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

    }, [productStore])

    const onHandleSubmitProduct = (e) => {
        e.preventDefault()
        setUserId(1)
        productStore.addProduct({ name, category, price, stock, image, UserId })
    }

    const onHandleDelete = (id) => {
        console.log("Handle Delete")
        productStore.deleteProduct(id)
    }
    return useObserver(() => (
        <div>
            <h3 className="mb-3">Products</h3>
            {/* <p>{counterStore.count}</p>
            <button onClick={() => counterStore.increment()}>Increment</button>
            <button onClick={() => counterStore.decrement()}>Decrement</button>
            <form onSubmit={(e) => onHandleSubmitProduct(e)}>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
                <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                <input type="number" placeholder="Stock" onChange={(e) => setStock(e.target.value)} />
                <input type="text" placeholder="Image URL" onChange={(e) => setImage(e.target.value)} />
                <input type="submit" value="SUBMIT" />
            </form> */}
            {/* BANNER */}

            {/* PRODUCT */}
            <div className="container">
                <div className="row">
                    {productStore.products.map(el => {
                        return (
                            <div key={el.id} className="col-3 ">
                                <div className="card">
                                    
                                <div className="card-header">
                                    <img className="card-image-top img-fluid" src={el.image} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>{el.name}</h5>
                                    <p>Rp. {el.price}</p>
                                    <p>Stock : {el.stock}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-sm btn-info mr-5">Add to Cart</button>
                                    <button className="btn btn-sm btn-outline-danger" onClick={()=>onHandleDelete(el.id)}>Delete</button>
                                </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* {JSON.stringify(productStore.products)} */}
        </div>
    ))
}
)

export default Home
