import prisma from "../../../prisma";

export default {
  Query: {
    seeFullPost: async (_, args) => {
      const { id } = args;
      const { user, comments, files, ...post } = await prisma.post.findOne({
        where: { id },
        include: {
          user: true,
          comments: {
            include: {
              user: true,
            },
          },
          likes: {
            include: {
              user: true,
            },
          },
          files: true,
        },
      });
      return {
        post,
        comments,
        files,
        user,
      };
    },
  },
};
