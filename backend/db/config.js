const mongoose=require('mongoose')

const db=()=>{
    mongoose.connect('mongodb+srv://amitsinghjin13:Sage137@cluster0.bnakryx.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log('Connected to db'))
    .catch(()=>console.error);
}


module.exports=db
