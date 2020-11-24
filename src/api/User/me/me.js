import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default {
  Query: {
    me: (_, __, { request, isAuthenticated }) => {
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
