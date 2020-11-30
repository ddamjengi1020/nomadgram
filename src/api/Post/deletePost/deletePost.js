import prisma from "../../../prisma";

export default {
  Mutation: {
    deletePost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id } = args;
      const { user } = request;
      const verifyPost = await prisma.post.count({
        where: { userId: user.id, id },
      });
      if (verifyPost) {
        return prisma.$executeRaw(`DELETE FROM "Post" WHERE "id"='${id}'`);
      } else {
        throw Error("Not found the Post");
      }
    },
  },
};
