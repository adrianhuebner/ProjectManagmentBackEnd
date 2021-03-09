'use strict';

const express = require('express');
const projectRouter = express.Router();

// Routes that are going to need to be created

// Home page will be a list of all the categories of projects
projectRouter.get('/')

// Get all the projects when clicking on a specific category
projectRouter.get('/:category')

// Click on a specific project to see it displayed
projectRouter.get('/:category/:id')

// Update a new project
projectRouter.put('/:category/:id')

// Button on home page takes user to a form to create a new project
projectRouter.post('/newproject')