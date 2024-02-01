import path from "path";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import lodash from "lodash";

import adminResolvers from "./admins/resolver.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const schemaFiles = ["admins/admin.schema.graphql"];

const mergedResolvers = lodash.merge({}, adminResolvers);

const typeDefsArray = schemaFiles.map((filename) =>
  readFileSync(path.join(__dirname, filename), {
    encoding: "utf-8",
  })
);

console.log("typeDefsArray : ", typeDefsArray);

const typeDefs = mergeTypeDefs(typeDefsArray, { all: true }); // Use an object with a 'schemas' property

const apolloServer = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers: mergedResolvers }), // Use 'resolvers' property
});

export default apolloServer;
