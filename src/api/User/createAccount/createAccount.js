export default {
  Mutation: {
    createAccount: async (_, args, { prisma }) => {
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
