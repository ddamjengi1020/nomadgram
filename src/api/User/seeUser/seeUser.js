import prisma from "../../../prisma";

export default {
  Query: {
    seeUser: async (_, args) => {
      const { id } = args;
      return await prisma.user.findOne({ where: { id } });
    },
  },
};
