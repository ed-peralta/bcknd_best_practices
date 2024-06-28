import express from 'express';
import cors from 'cors'
import connectDB from './db';
import apiRoutes from './routes';

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
connectDB();

app.use('/api/v1', apiRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/',(req,res) => res.json({"hola":"mundo"}) )