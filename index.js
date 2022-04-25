const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const { options } = require('nodemon/lib/config');
const app = express()
const port = process.env.PORT || 5000
const ObjectId = require('mongodb').ObjectId

// use middleware
app.use(cors())
app.use(express.json())


// userName : newuser
// Pass : BSYcyuebEeAHBo4Q


const uri = "mongodb+srv://newuser:BSYcyuebEeAHBo4Q@cluster0.ofq71.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        // to connect client
        await client.connect();
        console.log('db connected')
        const userCollection = client.db('foodExpress').collection('user');

        // to get all user
        app.get('/user', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);

        })

        app.get('/user/:id', async (req, res) => {
            const id = rea.params.id
            const query = { _id: ObjectId(id) }
            const result = await userCollection.findOne(query)
            res.send(result)
        })

        // Post user : adding new
        app.post('/user', async (req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await userCollection.insertOne(newUser)
            res.send(result)
        })

        //update a user
        app.put('/user/:id', async (req, res) => {
            const id = reqparams.id;
            const updatedUser = req.body
            const filter = { _id: ObjectId(id) }
            const updatedDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updateUser.email
                }
            };
            const result = await userCollection.updateOne(filter, updatedDoc, options)
            res.send(result)
        })

        // delete a user 
        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id;
            // query for delete only one not all
            const query = { _id: ObjectId(id) }
            const result = await userCollection.deleteOne(query)
            res.send(result)
        })
    }
    finally {
        // to close oparetion
        // await client.close()
    }

}

// call run console function catch for error only used in astnc function
run().catch(console.dir)




app.get('/', (req, res) => {
    res.send('Running my Node curd')
})

app.listen(port, () => {
    console.log('Crud server is running')
})




