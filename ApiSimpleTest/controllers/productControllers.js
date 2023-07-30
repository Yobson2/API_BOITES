const db= require('../models/index')

//create main model

const Product=db.products
// const Review=db.reviews



/// START 

//------ Create product

const addProduct= async (req,res)=>{
    let info={
        tittle:req.body.tittle,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published ? req.body.published :false
    }

    const products = await Product.create(info)
    res.status(200).send(products)
}

//------ get all product


const getAllProduct= async (req,res)=>{

    let products = await Product.findAll({})
    res.status(200).send(products)
}

//------ get single product


const getOneProduct= async (req,res)=>{

    const id=req.params.id
    let products = await Product.findOne({
        where: {id: id}
    })
    res.status(200).send(products)
}


//------update product


const updateProduct= async (req,res)=>{

    let id=req.params.id
    const products = await Product.update(req.body,{
        where: {id: id}
    })
    res.status(200).send(products)
}


//------delete product


const deleteProduct= async (req,res)=>{

    let id=req.params.id
    await Product.destroy({
        where: {id: id}
    })
    res.status(200).send("Product is deleted !")
}

/// get published product
const publishedAllProduct= async (req,res)=>{

    let products = await Product.findAll({where: {published:true}})
    res.status(200).send(products)
}


module.exports={
    addProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    publishedAllProduct
}