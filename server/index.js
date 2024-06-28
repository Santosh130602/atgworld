
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
const cors = require("cors");
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

const colors = require("colors");
const database = require('./config/db');




dotenv.config();
const app = express();
 
app.use(cors({
    origin: ['https://atgworld-chi.vercel.app/','http://localhost:3000/','https://atgworld-3i5n.onrender.com']
}));
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
    console.log(`Server started on PORT ${PORT}`.green.bold)
});




