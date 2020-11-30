import prisma from "../../../prisma";

export default {
  Query: {
    seeFeed: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const following = await prisma.user
        .findOne({
          where: { id: user.id },
        })
        .following();
      return prisma.post.findMany({
        where: {
          userId: {
            in: [...following.map((user) => user.id)],
          },
        },
        include: {
          files: true,
          likes: true,
          user: true,
        },
        orderBy: {
          createAt: "desc",
        },
      });
    },
  },
};
