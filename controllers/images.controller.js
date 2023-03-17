import ProductModel from "../model/Product.js"


export const downloadImg = async (req, res)=>{

   const productTitle = req.params.title;
   try { 
   ProductModel.updateOne( 
      { title: productTitle} , 
      { 
         $push: { imgUrl: req.file.originalname }, 
      }, 
      (err , doc)=>{ 
         if (err) {
            return res.status(500).json({ 
               message: `первая ошибка не удалось загрузить изображение`
            })
         } if (!doc){ 
            return res.status(500).json({ 
               message: `Не удалось найти задачу`
            })
         }
         return res.status(200).json({ 
            url: `/uploads/${req.file.originalname}`
   })})}
   catch(err) { 
      return res.status(500).json({ 
         message: ` вторая ошибка не удалось добавить изображение`
      })
   }
}



export const deleteImg= async (req, res)=>{

   const productTitle = req.params.title;
   try { 
   ProductModel.updateOne( 
      { title: productTitle} , 
      { 
         $pull: { imgUrl: req.file.originalname }, 
      }, 
      (err , doc)=>{ 
         if (err) {
            return res.status(500).json({ 
               message: `первая ошибка не удалось загрузить изображение`
            })
         } if (!doc){ 
            return res.status(500).json({ 
               message: `Не удалось найти задачу`
            })
         }
         return res.status(200).json({ 
            message: 'Удаление прошло успешно',
            url: `/uploads/${req.file.originalname}`
   })})}
   catch(err) { 
      return res.status(500).json({ 
         message: ` вторая ошибка не удалось добавить изображение`
      })
   }
}