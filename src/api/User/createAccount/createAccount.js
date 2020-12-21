import prisma from "../../../prisma";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { userName, email, firstName, lastName, bio, avatar } = args;
      const existedFromEmail = await prisma.user.count({
        where: { email },
      });
      const existedFromUserName = await prisma.user.count({
        where: { userName },
      });
      if (existedFromEmail && existedFromUserName) {
        throw Error("Email or Username are already taken");
      } else if (existedFromEmail) {
        throw Error("This Email is already taken");
      } else if (existedFromUserName) {
        throw Error("This Username is already taken");
      } else {
        try {
          await prisma.user.create({
            data: {
              userName,
              email,
              firstName,
              lastName,
              bio,
              avatar,
            },
          });
          return true;
        } catch (error) {
          return false;
        }
      }
    },
  },
};
