import prisma from "../../../prisma";

export default {
  Query: {
    allUsers: () =>
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
