

    const mongodb = require ('mongodb')

    const   mongoClient = mongodb.MongoClient

    const connectionUrl = 'mongodb://127.0.0.1:27017'

    const dbname = "pro-1"

        mongoClient.connect(connectionUrl , (error,res1) =>{
        if(error){
            return  console.log('error has occured')
        }
        console.log('All Perf')


       
        const db = res1.db(dbname)
        db.collection('users').insertOne({
            name : 'sara',
            age : 21
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
        })

       
        db.collection('users').insertOne({
            name : 'marwa',
            age : 23
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
        })
    
        db.collection ('users').insertMany(
           [ {
                name: 'islam',
                age: 25
            },
            {
                name: 'adel',
                age: 25
            },
            {
                name: 'tarek',
                age: 26
            },
            {
                name: 'ali',
                age: 26
            },
            {
                name: 'ahmed',
                age: 45
            },
            {
                name: 'samy',
                age: 26
            },
            {
                name: 'salama',
                age: 26
            },
            {
                name: 'reem',
                age: 25
            },
            {
                name: 'tasneem',
                age: 25
            },
            {
                name: 'aya',
                age: 25
            }] , (error,data)=>{
                if(error){
                    console.log('Unable to insert data')
                }
                console.log(data.insertedCount)
            } 
        )

      db.collection('users').find({age:25}).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })
      
      db.collection('users').find({age:25}).limit(3).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })

    

   db.collection("users").updateMany({},
      { $set: {name : "hoda" }},{limit:4}
      )
      .then((data1) =>{console.log(data1.modifiedCount)})
      .catch((error)=> console.log(error))
    db.collection("users").updateOne({_id:mongodb.ObjectId("64d7d001072df50591c5fc20")},{
      
        $inc:{age : 20}
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})


   db.collection("users").updateMany({},{
        $inc : {age : 10}
      })
      .then((data1) =>{console.log(data1.modifiedCount)})
      .catch((error)=> console.log(error))
   

      db.collection("users").deleteOne({_id:mongodb.ObjectId("64d7d001072df50591c5fc20")})
      .then((data1) =>{console.log(data1.deletedCount)})
      .catch((error)=> console.log(error))


      db.collection("users").deleteMany({age:35})
      .then((data1) =>{console.log(data1.deletedCount)})
      .catch((error)=> console.log(error))
    })