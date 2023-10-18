import express from 'express';
import {Book} from '../Models/bookModel.js'

const router = express.Router();

router.get("/",async(req,res)=>{
    try{
        const books = await Book.find({
        })
        
        return res.status(200).send({
            count:books.length,
            data:books
        })
    }catch(error){
        console.log(error.message);
        res.status(500).send({
            message: error.message
        })
    }
})
router.get("/search/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findById(id);
  
      if (book) {
        return res.status(200).json(book);
      } else {
        return res.status(404).json({ message: "Book not found with id" });
      }
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ message: error.message });
    }
  });
  

router.get("/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findById(
       id)
        


    }catch(error){
        console.log(error.message);
        res.status(500).send({
            message: error.message
        })
    }
})

//Route for update a book
router.put("/:id", async(req,res)=>{
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message:"Please provide all fields"
            })
        
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body)

        if(!result){
            return res.status(404).json({message: "Book not found"})
        }
        return res.status(200).json({
            message: "Successfully updated the book!"
        })
    }catch(error){
        console.log(error.message)
        res.status(500).send({
            message: error.message
        })
    }
})

router.delete("/:id", async(req,res)=>{
try{
    const { id } = req.params;
    const result = await Book.findOneAndDelete(id);

    if(!result){
        return res.status(404).json({
            message: "Book not found"
        })
    }

    res.status(200).send({
        message:"post deleted successfully"
    })

}catch(error){ 
    console.log(error)
    res.status(500).send({
        message:error.message
    })
}
})

router.post('/', async(req,res)=>{
    try{
        if(
            !req.body.title || 
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear"
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear:req.body.publishYear
        }
        const  book = await Book.create(newBook);
        return res.status(201).send(book);
    }catch(error){
        console.log(error.message)
        response.status(500).send({
            message: error.message
        })
    }
})

export default router;