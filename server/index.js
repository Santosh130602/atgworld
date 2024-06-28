
// const express = require('express');
// const dotenv = require('dotenv');
// const userRoutes = require('./routes/userRoutes');
// const cors = require("cors");
// const postRoutes = require('./routes/postRoutes');
// const commentRoutes = require('./routes/commentRoutes');
// const { errorHandler } = require('./middleware/errorMiddleware');

// const colors = require("colors");
// const database = require('./config/db');


// app.use(express.static('public'));

// dotenv.config();

// const app = express();
// // app.use(cors({
// //     origin: 'https://atgworld-chi.vercel.app',
// // }));

// const corsOptions = {
//     origin: 'https://your-vercel-app.vercel.app', // replace with your Vercel domain
//     optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions));


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
const cors = require('cors');
const colors = require('colors');
const database = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config(); // Load environment variables

const app = express();

const corsOptions = {
    origin: 'https://atgworld-chi.vercel.app', // replace with your Vercel domain
    optionsSuccessStatus: 200,
};

// Use CORS middleware before defining routes
app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON bodies

app.use(express.static('public')); // Serve static files

// API Routes
app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// Error handling middleware
app.use(errorHandler);

// Root route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Connect to the database
database.connect();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`.green.bold);
});


