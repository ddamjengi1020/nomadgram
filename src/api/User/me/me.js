import { isAuthenticated } from "../../../middlewares";
import prisma from "../../../prisma";

export default {
  Query: {
    me: (_, __, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      return prisma.user.findOne({
        where: {
          id: user.id,
        },
        include: {
          posts: {
            include: {
              user: true,
              files: true,
              likes: {
                include: {
                  user: true,
                },
              },
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
