const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const cors = require('cors'); // Importa el modulo cors

const taskRoutes = require('./routes/taskRoutes');

const app = express();
const port = 3005;

// Configura las opciones de CORS
const corsOptions = {
  origin: 'http://localhost:4200', // URL de tu frontend de Angular
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

// Middlewares
app.use(express.json());                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
app.use(cors(corsOptions)); // middleware cors
app.use('/api/tasks', taskRoutes);

app.get('/',(req,res) => {
    res.send('Hello World')
})

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    console.log(process.env.MONGO_DB_URI); 
  });