const mongoClient=require("mongodb").MongoClient;
const mongoose=require("mongoose");
// const url="mongodb+srv://Richa:Rich@209861@cluster0.assbm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const url= "mongodb+srv://Lali:Lali@cluster0.vevsh.mongodb.net/farmerfriend?retryWrites=true&w=majority"
function mongooseConnect()
{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(response=>{
        console.log("mongoose connected")
    }).catch(err=>console.log(err));
}
function connect()
{
    mongoClient.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },(err,db)=>{
        if(err)
        {
            console.log(err);
            process.exit(1);
        }
        console.log("Mongo Connected");
    })
}
//mongooseConnect();
//connect();
module.exports={mongooseConnect};
