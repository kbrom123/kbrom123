import express from 'express';
import mongoose from 'mongoose';
import { MONGODB } from './config.js';
import { PORT } from './config.js';
import router from './routes/BookRoutes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/books', router);


mongoose.connect(MONGODB).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => console.log(error));
