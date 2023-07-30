const productController=require('../controllers/productControllers');
const express=require('express');

const router= express.Router();

//MES ENDPOINTS

router.post('/addProducts',productController.addProduct);
router.get('/allProducts',productController.getAllProduct);
router.get('/published',productController.publishedAllProduct);


router.get('/oneProduct/:id',productController.getOneProduct);
router.put('/updateProduct/:id',productController.updateProduct);
router.delete('/deleteProduct/:id',productController.deleteProduct);


module.exports=router