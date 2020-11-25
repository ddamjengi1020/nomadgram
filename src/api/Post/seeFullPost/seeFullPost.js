export default {
  Query: {
    seeFullPost: async (_, args, { prisma }) => {
      const { id } = args;
      const { comments, likes, ...post } = await prisma.post.findOne({
        where: { id },
        include: {
          comments: {
            include: {
              user: true,
            },
          },
          likes: true,
          files: true,
        },
      });
      return {
        post,
        comments,
        likeCount: likes.length,
      };
    },
  },
  User: {
    fullName: (parent) => `${parent.firstName} ${parent.lastName}`,
  },
};
