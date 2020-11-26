import "./env";
import logger from "morgan";
import schema from "./schema";
import { GraphQLServer } from "graphql-yoga";
import { authenticateJwt } from "./passport";
import "./utils";
import "./passport";
import { isAuthenticated } from "./middlewares";

const PORT = process.env.PORT;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAuthenticated }),
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`😎 server is running on http://localhost:${PORT}`)
);
