import prisma from "../../../prisma";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { userName, email, firstName, lastName, bio } = args;
      const user = await prisma.user.create({
        data: {
          userName,
          email,
          firstName,
          lastName,
          bio,
        },
      });
      return user;
    },
  },
};
