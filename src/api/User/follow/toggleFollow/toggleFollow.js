import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../../../middlewares";
const prisma = new PrismaClient();
export default {
  Mutation: {
    toggleFollow: async (_, args, { request }) => {
      isAuthenticated(request);
      const { id } = args;
      const { user } = request;
      try {
        const { following } = await prisma.user.findOne({
          where: {
            id: user.id,
          },
          include: {
            following: true,
          },
        });
        const existedFollowing = following.some(
          (follow) => follow["id"] === id
        );
        if (existedFollowing) {
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              following: {
                disconnect: {
                  id,
                },
              },
            },
          });
        } else {
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              following: {
                connect: {
                  id,
                },
              },
            },
          });
        }
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
