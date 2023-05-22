# Express and MongoDB Task

This is a simple project built with Express and MongoDB. It allows users to Register and Login, and view a list of all User, One User, Create, Update and Delete Users.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Install the project dependencies by running `npm install`.
3. Start the development server by running `npm run dev`.
4. Visit http://localhost:3000 in your web browser.

## Prerequisites

To run this project, you'll need to have the following installed on your machine:

- Node.js (version 18 or higher)
- MongoDB (version 4 or higher)

## Installing

To install the project dependencies, run the following command:

```
npm install
```

## Running the development server

To start the development server, run the following command:

```
npm run dev
```

The server will start on port 3000 by default. You can access the application by visiting http://localhost:3000 in your web browser.


## Built With

- [Express](https://expressjs.com/) - A web application framework for Node.js
- [MongoDB](https://www.mongodb.com/) - A document-oriented database
- [Mongoose](https://mongoosejs.com/) - A MongoDB object modeling tool designed to work in an asynchronous environment


## Project structure

The project is structured as follows:

```
├── src
    ├── app
        ├── controllers
        │   ├── auth.controller.js
        │   └── user.controller.js
        ├── models
        │   └── user.model.js
        ├── routes
        │   ├── auth.routes.js
        │   └── user.routes.js
        ├── services
        │   ├── auth.service.js
        │   └── user.service.js
        ├── utilites
        │   ├── bcrypt.js
        │   ├── jwt.js
        │   ├── multer.js
        │   ├── removeFile.js
    ├── index.js
├── package.json
└── README.md
```

- `controllers` - Contains the controllers for auth and users.
- `models` - Contains the Mongoose models for users.
- `routes` - Contains the routes for blog auth and users.
- `services` - Contains the service for the auth and users.
- `index.js` - Initializes the Express application and sets up middleware and routes.
- `package.json` - Contains information about the project and its dependencies.
- `README.md` - This file.

## API DocumentationThe API has the following endpoints:

### Auth

- `POST /api/auth/register` - Register a new user.
- `Post /api/auth/login` - Login with email and password.

### Users

- `POST /api/users` - Create a new user.
- `GET /api/users` - Get a list of allusers.
- `GET /api/users/:userId` - Get a single user by ID.
- `PUT /api/users/:userId` - Update a single user by ID.
- `DELETE /api/users/:userId` - Delete a single user by ID.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)