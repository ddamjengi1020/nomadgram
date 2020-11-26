import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default {
  User: {
    fullName: (parent) => `${parent.firstName} ${parent.lastName}`,
    isFollowing: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return prisma.user.count({
        where: {
          AND: [{ id: parentId }, { followers: { some: { id: user.id } } }],
        },
      });
    },
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    },
  },
  Post: {
    isLiked: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return prisma.like.count({
        where: {
          postId: parentId,
          userId: user.id,
        },
      });
    },
  },
};
