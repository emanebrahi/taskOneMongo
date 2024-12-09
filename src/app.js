
const mongodb = require ('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = 'proj-1' 

mongoClient.connect (connectionUrl , (error , res1)=>{
    if (error) {
        return console.log('error has occured')
    }
    console.log('all perf')

    // reference 
    const db = res1.db(dbname)

    db.collection('users').insertOne({
        name : 'eman',
        age : 25
    },(error,data) =>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })

    //insert one ===================================================

    db.collection('users').insertOne({
        name : 'alaa',
        age : 30
    },(error,data) =>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })

    //insert many ===================================================
    db.collection('users').insertMany([
        {
            name:"tala",
            age:25
        },
        {
            name:"toleen",
            age:26

        },
        {
            name:"mahmoud",
            age:27
        },
        {
            name:"mohammed",
            age:27
        },
        {
            name:"ahmed",
            age:27
        },
        {
            name:"salah",
            age:27
        },
        {
            name:"khaled",
            age:27
        },
        {
            name:"alaa",
            age:33
        },
        {
            name:"asmaa",
            age:22
        },
        {
            name:"ibrahim",
            age:36
        }
    ],(error,data)=>{
        if(error){
            console.log("unable to insert data from insert many")
        }
        console.log(data.insertedCount)
    })

    //find all 27 years ==========================


   db.collection('users').find({age:27}).toArray((error,users)=>{
    if(error){
        console.log("error has occured")
    }
    console.log(users)
   })
    
   //find all 27 years limit first three elements ==========================

   db.collection('users').find({age:27}).limit(3).toArray((error,users)=>{
    if(error){
        console.log("error has occured")
    }
    console.log(users)
   })

// set name and inc age for first 4 ==================================

db.collection('users').find({}).limit(4).toArray((error, data) => {
    if (error) {
        return console.log(error);
    }

    data.forEach(doc => {
        db.collection("users")
            .updateOne(
                { _id: doc._id },  
                {
                 $set: { name: "zakaria" },
                $inc : {age:5}},
            )
            .then((result) => {
                console.log(result.modifiedCount);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    //update one for 1 inc age 5
db.collection("users").updateOne(
    {_id: mongodb.ObjectId("6757182aca94aa7abd3f2e34")}, 
    {
        $inc: { age: 5 }  
    }
)
.then((data) => console.log(data.modifiedCount))
.catch((error) => console.log(error));

})

//update many inc age 10 ======================================

db.collection("users").updateMany({},{
    $inc :{age:10}
}).then((data)=>{console.log(data.modifiedCount)})
.catch((error)=>{console.log(error)})



db.collection("users").deleteMany({age:41

})
.then((data)=>{console.log(data.deletedCount)})
.catch((error)=>{console.log(error)})
});




