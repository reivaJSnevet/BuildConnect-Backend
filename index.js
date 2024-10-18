//importing Node.js modules
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

//importing connection files
import { dbConnection } from './src/config/db.js';
import { mailConnection } from './src/config/nodemailer.js';

import errorHandler from "./src/middlewares/errorHandler.js";

//importing routes
import {
    userRoutes,
    categoryRoutes,
    companyRoutes,
    projectRoutes,
    commentRoutes,
    authRoutes
} from './src/routes/index.js';
import requireJWT from './src/middlewares/requireJWT.js';

import swaggerJSDoc from "./src/config/swagger.js";
import corsOptions from './src/config/corsOptions.js';


const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
swaggerJSDoc(app);


//calling the function to establish a connection to the database
await dbConnection();

await mailConnection();


//routes
app.use("/api/auth", authRoutes);

app.use(requireJWT);

app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", companyRoutes);
app.use("/api", projectRoutes);
app.use("/api", commentRoutes);



//home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the API",
    });
});

//catch all routes not found
app.use((req, res, next) => {
  res.status(404).json({
      error: "Not found",
      message: `The resource ${req.originalUrl} was not found`,
  });
});


//error handling middleware
app.use(errorHandler);


//start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(
        "\x1b[32m%s\x1b[0m",
        `Server started. The server is running on Port: ${port}`
    );
});
