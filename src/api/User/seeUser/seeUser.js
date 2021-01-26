import prisma from "../../../prisma";

export default {
  Query: {
    seeUser: async (_, args) => {
      const { id } = args;
      return await prisma.user.findOne({
        where: { id },
        include: {
          posts: {
            include: {
              files: true,
              likes: {
                include: {
                  user: true,
                },
              },
              user: true,
              comments: {
                include: {
                  user: true,
                },
              },
            },
          },
          followers: true,
          following: true,
        },
      });
    },
  },
};
