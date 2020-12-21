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
          posts: true,
        },
      });
    },
  },
};
