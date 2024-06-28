
// const express = require('express');
// const dotenv = require('dotenv');
// const userRoutes = require('./routes/userRoutes');
// const cors = require("cors");
// const postRoutes = require('./routes/postRoutes');
// const commentRoutes = require('./routes/commentRoutes');
// const { errorHandler } = require('./middleware/errorMiddleware');

// const colors = require("colors");
// const database = require('./config/db');


// dotenv.config();
// const app = express();


// const corsOptions = {
//     origin: '*', 
//     optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
// app.use(express.json());


// app.use('/api/user', userRoutes);
// app.use('/api/posts', postRoutes);
// app.use('/api/comments', commentRoutes);

// app.use(errorHandler);

// app.get('/', (req, res) => {
//     res.send('Server is running');
// });
// database.connect();

// const PORT = process.env.PORT || 5000;



// app.listen(PORT, () => {
//     console.log(`Server started on PORT ${PORT}`.green.bold)
// });




const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');
const colors = require('colors');
const database = require('./config/db');

dotenv.config();
const app = express();

const corsOptions = {
    origin: 'https://atgworld-chi.vercel.app',
    optionsSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Enable pre-flight

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Server is running');
});

database.connect();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`.green.bold);
});
