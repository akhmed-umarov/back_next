import { Router } from "express";   
import  { ProductController  , ImgController }  from "../controllers/index.js";
import express from 'express';
import upload from "../multer/index.js";


const router = Router();

///все продукты нонам нужно по фильтрам
router.get( '/products' ,  ProductController.getAllProducts);

router.get( '/cakes' , ProductController.getAllCakes);
router.get( '/cupcakes' , ProductController.getAllCupCakes);

router.get('/filter' , ProductController.getFilterGroup);
// router.get('/products/:parent' , )   //можно было сделать чтобы по группам доставались данные но там разницы практически никакой

// router.get( '/products/:title' , ProductController.getOneProduct)

//тоже самое просто разные пути для маршрутизации nextJs
router.get( '/cakes/:title' , ProductController.getOneCakes);
router.get( '/cupcakes/:title' , ProductController.getOneCupCakes);


// router.post( '/products' , zadachaValidatorArray , zadachaValidatorArrayFunction,  ProductController.createZadacha )
router.post( '/product'  ,  ProductController.createProduct )
router.delete( '/product/:title'  ,  ProductController.removeProduct)
router.patch( '/product/:title'  , ProductController.patchProduct )

//удаление добавление фото в продуктах 
router.patch( '/upload/:title' ,  upload.single('image') , ImgController.downloadImg)
router.delete( '/upload/:title' ,  upload.single('image') , ImgController.deleteImg)

//для загрузки с сервака
router.use('/uploads', express.static('uploads'));

//для загрузки на сервак
router.post('/upload' , upload.single('image'), (req, res) => {
res.json({
url: `/uploads/${req.file.originalname}`,
});
});

export default router