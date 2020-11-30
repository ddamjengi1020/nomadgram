import prisma from "../../../prisma";

export default {
  Mutation: {
    editPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id, caption, location } = args;
      const { user } = request;
      const verifyPost = await prisma.post.count({
        where: { userId: user.id, id },
      });
      if (verifyPost) {
        return prisma.post.update({
          where: {
            id,
          },
          data: {
            caption,
            location,
          },
        });
      } else {
        throw Error("Can't do this");
      }
    },
  },
};
