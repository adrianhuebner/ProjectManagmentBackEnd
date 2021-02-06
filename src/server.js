'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require ('morgan');

// Esoteric Resources
const pageNotFound = require('./middleware/404.js');
const authRoutes = require('./auth/authMiddleware/authMiddleware');

// Prepare the app
const app = express();

// App Level Middleware
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use(authRoutes);

// Catch Alls
app.use(pageNotFound);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is running on ${port}`)
    });
  },
};