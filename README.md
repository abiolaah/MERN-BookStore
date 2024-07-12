# BOOKSTORE ADMIN WEB APP

The Book store WebApp project is a user-friendly web application built to simulate admin side of the page. The web application has the basic CRUD Operation. The Tech stack used is MERN,(MongoDB, Express, Reactjs and NodeJs)

## Table of Contents
- [Instruction](#instruction)
- [Backend](#backend)
    - [Steps for Backend with Clonned Repository](#steps-for-backend-with-clonned-repository)
    - [Steps for Building Backend from Scratch](#steps-for-building-backend-from-scratch)
- [Frontend](#frontend)
    - [Steps for Frontend with Clonned Repository](#steps-for-frontend-with-clonned-repository)
    - [Steps for Building Frontend from Scratch](#steps-for-building-frontend-from-scratch)
- [Lessons](#lesson)

### Instruction
- To clone the repository, copy and paste the command below to your terminal
```sh
 git clone https://github.com/abiolaah/MERN-BookStore.git
```
- Follow the steps in [this documentation](https://www.mongodb.com/docs/atlas/getting-started/) to create MongoDB database on Atlas.
- Follow the steps in [this tutoria](https://medium.com/create-a-clocking-in-system-on-react/creating-a-local-mongodb-database-and-insert-a-document-c6a4a2102a22) to create MongoDB database locally
### Backend
The backend is built using ExpressJs and Nodejs and the dependencies are listed below:
- cors:  allows a server to indicate any origins other than its own from which a browser should allow resource loading. Documentation [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- express: minimal and flexible node.js web application framework that helps create api endpoints for this project. Documentation [here](https://expressjs.com/)
- mongoose: a mongodb object modeling for node.js. Helps to connect with MongoDB. Documentation [here](https://mongoosejs.com/)
#### Steps for Backend with Clonned Repository
Below are steps to follow if using the cloned repository
1. After following the clonning instruction above.
2. Navigate to the root directory in your terminal.
    ```sh
    cd MERN-BookStore
    ```
3. Navigate to the frontend directory in your terminal.
    ```sh
    cd backeend
    ```
4. Install dependencies
    ```sh
    npm install
    ```
5. Start the frontend development server with the command below
    ```sh
    npm run dev
    ```
5. Open your web browser and navigate to ```http://localhost:5001``` to view the application.
6. Use ```http://localhost:5001/api/books``` to test the api endpoints
>Note: You can change the port number in config.js

#### Steps for Building Backend from Scratch
Below are steps to follow if building from scratch
1. Create a directory for your project and given it a name. This can be done in terminal using the command below
```sh
mkdir <project-name>
```
2. Navigate to the root directory of your project in terminal
```sh
cd <name-of-your-project>
```
3. Make a new directory in the project root directory. You can give any name but I would recommend using backend or server if the backend and frontend directories will be in the same main project directory
```sh
mkdir <name-of-backend-directory>
``` 
4. Navigate to the backend directory in terminal
```sh
cd <name-of-backend-directory>
```
5. Run the command below
```sh
npm init -y
```
6. Navigate to the package.json file in VSCode or IDE of choice. Below the line that reads `"version":"1.0.0"`, add this code `"type":"module"`
7. Install dependencies express, nodemon, cors, mongoose using the command below in terminal
```sh
npm install express nodemon cors mongoose
```
8.  Navigate to the package.json file in VSCode or IDE of choice. In the script object, delete the line of code with `"test":"echo \"Error: no test specified\" && exit 1"` and replace with the following code
`"start":node index.js""`
`"dev":"nodemon index.js"`
>Note; You name the index.js file server.js
9. Create a new file in the backend directory and name it index.js
10. In the index.js file, add the code below
```sh
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 5001
const uri = process.env.MONGODB_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
    })
    app.use(cors())
    app.use(express.json())
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`)
        })
```
>Note: Create a .env file in the backend root directory and add the MONGODB_URI
11. You can use the code in the repository to complete your code.


### Frontend
The frontend is built using Reactjs and the dependencies are listed below:
- TailwindCSS: for design instead of basic CSS. Check out its documentation [here](https://tailwindcss.com/docs/installation).
- Axios: to connect, fetch data from api endpoint and render to the frontend. Check out its documentation [here](https://axios-http.com/docs/intro).
- React-Router-Dom: to navigate between pages. Check out its documentation [here](https://www.npmjs.com/package/react-router-dom).
- notistack: to display error and success messages using snackbar. Check out its documentationn [here](https://notistack.com/getting-started).
- react-icons: to get icons to represent. Check out its documentation [here](https://react-icons.github.io/react-icons/).

#### Steps for Frontend with Clonned Repository
Below are steps to follow if using the cloned repository
1. After following the clonning instruction above.
2. Navigate to the root directory in your terminal.
    ```sh
    cd MERN-BookStore
    ```
3. Navigate to the frontend directory in your terminal.
    ```sh
    cd frontend
    ```
4. Install dependencies
    ```sh
    npm install
    ```
5. Start the frontend development server with the command below
    ```sh
    npm run dev
    ```
5. Open your web browser and navigate to ```http://localhost:5173``` to view the application.

#### Steps for Building Frontend from Scratch
Below are steps to follow if building from scratch
1. Navigate to the root directory of your project in terminal
```sh
cd <name-of-your-project>
```
2. Create a new React app using the Vite with the command below
```sh
npm create vite@latest
```
3. Give the project a name. I would recommend using frontend or client if the backend and frontend will be in the same main directory
4. Use the down arrow key to navigate to React and use Enter or Return to select it as your framework.
5. Use the down arrow key to navigate to Javascript and use Enter or Return to select it as your variant.
6. Run the command below to navigate to the frontend directory
```sh
cd <name-of-frontend-directory>
```
7. Run the command below to install necessary basic dependencies for react
```sh
npm install
```
8. Start the frontend development server with the command below
```sh
npm run dev
```
9. Open your web browser and navigate to ```http://localhost:5173``` to view the application.

10. Use the command below to install the dependencies for this project. List of dependencies/package are above
```sh
npm install <package-name>
```
11. You can use the code in the repository to complete your code.

### Lesson
- Learnt to create a simple bookstore admin page using MongoDB, Express, ReactJs and Nodejs. 
- I learnt to use axios with its various method to fetch data from api endpoints.
- I learnt to use mongoose to connect to MongoDB cloud.
- I learnt to use express and node to create api endpoints and fetch data from and send data to the database.