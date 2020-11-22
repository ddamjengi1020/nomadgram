export default {
  Query: {
    allUsers: (_, __, { prisma }) =>
      prisma.user.findMany({
        include: {
          likes: true,
        },
      }),
  },
};
