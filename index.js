const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000


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
        app.post('/user', async (req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await userCollection.insertOne(newUser)
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