import prisma from "../../prisma";

export default {
  User: {
    fullName: (parent) => `${parent.firstName} ${parent.lastName}`,
    isFollowing: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return prisma.user.count({
        where: { id: parentId, followers: { some: { id: user.id } } },
      });
    },
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    },
  },
};
