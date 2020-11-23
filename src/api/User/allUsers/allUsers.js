export default {
  Query: {
    allUsers: (_, __, { prisma }) =>
      prisma.user.findMany({
        include: {
          likes: true,
          comments: {
            include: {
              user: true,
            },
          },
          followers: true,
          following: true,
        },
      }),
  },
};
