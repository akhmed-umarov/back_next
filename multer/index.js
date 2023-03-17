import multer from 'multer';

const storage = multer.diskStorage({ 
   destination: (_, __, cd)=>{ 
      cd(null , 'uploads')
   }, 
   filename: (_ , file , cd)=>{ 
      cd(null , file.originalname)
   }
})



const upload = multer( {storage })

export default upload
