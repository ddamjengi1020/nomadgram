import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

import { sendSecretMail } from "./utils";

sendSecretMail("silluat11@gmail.com", "강한 남자");

const PORT = process.env.PORT;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`😎 server is running on http://localhost:${PORT}`)
);
