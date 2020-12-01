import prisma from "../../../prisma";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { userName, email, firstName, lastName, bio, avatar } = args;
      const user = await prisma.user.create({
        data: {
          userName,
          email,
          firstName,
          lastName,
          bio,
          avatar,
        },
      });
      return user;
    },
  },
};
