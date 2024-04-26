const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const Dashboard = require('./models/Dashboard')
/* import Routes */
const authRouter = require('./routes/auth') // for user
const adminRouter = require('./routes/admin'); // for admin
const superRouter = require('./routes/super'); // for superAdmin
// const privateRouter = require('./routes/private');

const URL = "mongodb://localhost:27017/Movie";
const PORT = 5000;
mongoose.connect(URL).then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.log(err);
});

const app = express();
/* Middleware */
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/private', adminRouter);
app.use('/api/private/superadmin', superRouter);

app.get('/', (req, res) => {
    res.send('MERN LoginSystem - Server is up and Running')
})

app.get('/movies', async (req, res) => {

    const movies = await Dashboard.find();
    try {
        return res.status(200).json({
            success: true,
            data:{
                movies: movies
            }

        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message
        })
    }


})

const server = app.listen(PORT, () => console.log(`Server running on port ...${PORT}`));

process.on('unhandledRejection', (err) => {
    console.log(err);
    server.close(() => process.exit(1));
})