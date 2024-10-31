import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "BuildConnect API",
            version: "1.0.0",
            description: "A simple Express Library API for BuildConnect",
        },
        servers: [
            {
                url: "http://localhost:3000/api/",
                description: "Local server",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
                cookieAuth: {
                    type: "apiKey",
                    in: "cookie",
                    name: "refresh_Token",
                }
            },
        },
        security: [
            {
                bearerAuth: [],
                cookieAuth: [],
            },
        ],
    },
    apis: [
        './src/docs/swagger/schemas/*.js',
        './src/docs/swagger/routes/*.js',
    ],
}

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    app.get("/api-docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
};

export default swaggerDocs;