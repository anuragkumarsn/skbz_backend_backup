import express from "express";
import dotenv from "dotenv";
import { expressMiddleware } from "@apollo/server/express4";
import DBConn from "./DB/connection.js";
import cors from "cors";
import adminRoutes from "./mvc/admin/routers.js";
import roleRoutes from "./mvc/role/routers.js";
import projectRoutes from "./mvc/project/routers.js";
import docs from "./mvc/docs/routers.js";
import priceRequestRoutes from "./mvc/priceRequest/routers.js";
import initialDocs from "./mvc/initialDocs/routers.js";
import currencyConverter from "./mvc/currencyConverter/routers.js";
import partRoutes from "./mvc/part/routers.js";
import apolloServer from "./modules/index.js";

import ErrorHandler from "./middlewares/errorHandler.js";

dotenv.config({ path: ".env" });

const app = express();
app.use(cors());
app.use(express.json());

DBConn();
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`

app.use("/admin", adminRoutes);
app.use("/role", roleRoutes);
app.use("/project", projectRoutes);
app.use("/doc", docs);
app.use("/price_request", priceRequestRoutes);
app.use("/initialdoc", initialDocs);
app.use("/currency", currencyConverter);
app.use("/part", partRoutes);

await apolloServer.start();
app.use("/graphql", expressMiddleware(apolloServer));

app.use(ErrorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});
