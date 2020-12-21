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
          OR: [
            {
              userId: {
                in: [...following.map((user) => user.id)],
              },
            },
            {
              userId: user.id,
            },
          ],
        },
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
        orderBy: {
          createAt: "desc",
        },
      });
    },
  },
};
