import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({ 
   //Название
   title: { 
      type: String, 
      require: true, 
      unique: true
   },
   //cakes or cupcakes
   parent: { 
      type: String, 
      default: "cakes"
   },
   //Описание
   description: { 
      type: String, 
      default: ""
   }, 
   //Картинка
   imgUrl: { 
      type: Array, 
      default: []
   }, 
   price: { 
      type: Number, 
      require: true, 
      default: 1000
   },
   vievsCount: {
      type: Number, 
      default: 0
   },
   //есть ли в наличие
   // status: { 
   //    type: Number, 
   //    default: 1
   // },
   // ///Комменты покупателей потом вкключить вместе с авторизацией
   // comments: { 
   //    type: Array, 
   //    default: []
   // }, 
   // ///цена
} , { 
   timestamps: true
})

export default mongoose.model( 'Product' , ProductSchema)