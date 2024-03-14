import { startApolloServer } from './app';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';
import { connectDB } from './db';

connectDB();

startApolloServer(typeDefs, resolvers);