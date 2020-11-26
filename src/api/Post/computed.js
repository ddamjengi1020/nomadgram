import prisma from "../../prisma";

export default {
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
    likeCount: (parent) => {
      const { id: parentId } = parent;
      return prisma.like.count({ where: { postId: parentId } });
    },
  },
};
