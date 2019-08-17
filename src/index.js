const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => async (_root, _args, context, _info) => {
      const links = await context.prisma.links();
      return links;
    },
  },
  Mutation: {
    post: async (_root, args, context) => {
      const link = await context.prisma.createLink({
        url: args.url,
        description: args.description,
      });

      return link;
    },
    updateLink: (_root, args, context) => {
      return context.prisma.updateLink({
        data: {
          url: args.url,
          description: args.description,
        },
        where: {
          id: args.id,
        },
      });
    },
    deleteLink: (_root, args, context) => {
      return context.prisma.deleteLink({
        id: args.id,
      });
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
