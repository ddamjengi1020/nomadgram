import { isAuthenticated } from "../../../middlewares";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Mutation: {
    toggleLike: async (_, args, { request }) => {
      isAuthenticated(request);
      const { postId } = args;
      const { user } = request;
      try {
        const existedLike = await prisma.like.findMany({
          where: {
            userId: user.id,
            postId,
          },
        });
        if (existedLike.length > 0) {
          // Do something
        } else {
          await prisma.like.create({
            data: {
              user: {
                connect: {
                  id: user.id,
                },
              },
              post: {
                connect: {
                  id: postId,
                },
              },
            },
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
