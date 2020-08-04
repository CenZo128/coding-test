const { Product, User } = require('../models')

class ProductController {
    static getProducts(req, res, next) {
        //Menerima dr middleware
        Product.findAll()
            .then(Product => {
                res.status(200).json(Product)
            })
            .catch(err => {
                next(err)
            })
    }
    
    static add(req, res, next) {
        let {name,category,price,stock,image} = req.body
        let userId = req.userData.id

        Product.create({
            name,
            category,
            price,
            stock,
            image,
            UserId: userId
        })
            .then(Product => {
                return Product.findOne({
                    where: {
                        id: Product.id
                    },
                })
            })
            .then(Product => {
                res.status(201).json(Product)
            })
            .catch(err => {
                next(err)
            })
    }
    static update(req, res, next) {
        let ProductId = req.params.id
        let {name,category,price,stock,image} = req.body
        Product.update({
            name,
            category,
            price,
            stock,
            image,
        }, {
            where: {
                id: ProductId
            },
        })
            .then(Product => {
                if (!Product) {
                    next({
                        name: "Not_Found"
                    })
                } else {
                    return Product.findOne({
                        where: {
                            id: ProductId
                        },
                    })
                }
            })
            .then(updated => {
                res.status(201).json(updated)
            })
            .catch(err => {
                next(err)
            })
    }
    static delete(req, res, next) {
        let ProductId = req.params.id
        let UserId = req.userData.id

        Product.destroy({
            where: {
                id: ProductId
            }
        })
            .then(Product => {
                res.status(200).json(Product)

            })
            .catch(err => {
                next(err)
            })
    }

}
module.exports = ProductController

/**
 * HTTP Status Code
 * 200 : Ok
 * 201 : Created
 * 400 : Bad Request
 * 401 : Not Authorized
 * 403 : Forbidden
 * 404 : Not Found
 * 500 : Internal Server Error
 *
 */