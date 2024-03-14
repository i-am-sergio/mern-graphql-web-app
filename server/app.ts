import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4';
import http from 'http';
import { DocumentNode } from 'graphql';

const PORT = 5000;

export async function startApolloServer(typeDefs: DocumentNode, resolvers: Record<string, any>) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
    });

    await server.start();
    app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware(server));

    await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));

    console.log(`Server ready at http://localhost:${PORT}`);
}