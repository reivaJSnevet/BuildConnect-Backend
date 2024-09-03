//importing Node.js modules
import express from "express";

//importing connection files
import { dbConnection } from './src/config/db.js';

//importing routes
import { userRoutes,
    categoryRoutes,
    companyRoutes,
} from './src/routes/index.js';



const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//calling the function to establish a connection to the database
await dbConnection();


app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", companyRoutes);

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

//start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(
        "\x1b[32m%s\x1b[0m",
        `Server started. The server is running on Port: ${port}`
    );
});
