import { isAuthenticated } from "../../../middlewares";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default {
  Mutation: {
    addComment: async (_, args, { request }) => {
      isAuthenticated(request);
      const { postId, text } = args;
      const { user } = request;
      try {
        await prisma.comment.create({
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
            text,
          },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
