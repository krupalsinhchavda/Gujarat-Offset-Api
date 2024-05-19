const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
const corsOptions = {
    // origin: '*', // Replace with the origin(s) you want to allow
    origin: '*', // Replace with the origin(s) you want to allow
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the HTTP methods you want to allow
    allowedHeaders: 'Content-Type,Authorization', // Specify the headers you want to allow
    credentials: true, // Allow cookies to be sent with the request (if needed)
    optionsSuccessStatus: 204, // Set the HTTP status code for successful preflight requests
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// ROUTER NAVIGATION
const clientRoutes = require('./routes/clientRoutes');
const paperRoutes = require('./routes/paperRoutes');
const chemicalRoutes = require('./routes/chemicalRoutes');

// Routes
app.use('/api/client', clientRoutes);
app.use('/api/paper', paperRoutes);
app.use('/api/chemical', chemicalRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});