import express from 'express';
import cors from 'cors';

import { PORT } from './config.js';
import connectDB from './db/client.js';
// import { Book } from './models/bookModel.js';
import bookRoutes from './routes/bookRoutes.js'

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To TeeMusing Bookstore');
});

app.use('/api/books', bookRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`)
})