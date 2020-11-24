export default {
  Query: {
    seeUser: async (_, args, { prisma }) => {
      const { id } = args;
      return await prisma.user.findOne({ where: { id } });
    },
  },
};
