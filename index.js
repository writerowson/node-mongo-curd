const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000


// use middleware
app.use(cors())
app.use(express.json())

// userName : usser1
// Pass : JWwNUVt@Waz8QKa 




const uri = "mongodb+srv://user1:JWwNUVt@Waz8QKa@cluster0.ofq71.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log('data connected');
    client.close();
});



// const uri = "mongodb+srv://user1:JWwNUVt@Waz8QKa@cluster0.ofq71.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// async function run() {
//     try {
//         // to connect client
//         await client.connect()
//         const userCollection = client.db("foodExpress").collection("devices");
//         const user = { name: 'Mhiya Mahi', email: 'mahi@gmail.com' };
//         const result = await userCollection.insertOne(user);
//         console.log(`User inserted with id : ${result.insertedId}`)
//     }
//     finally {
//         // to close operration
//         await client.close()
//     }

// }

// // call run console function
// run().catch(console.dir)




app.get('/', (req, res) => {
    res.send('Running my Node curd')
})

app.listen(port, () => {
    console.log('Crud server is running')
})