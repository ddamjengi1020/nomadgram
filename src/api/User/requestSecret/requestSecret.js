import prisma from "../../../prisma";
import { generateSecret, sendSecretMail } from "../../../utils";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { email } = args;
      const loginSecret = generateSecret();
      const existedUser = await prisma.user.count({
        where: { email },
      });
      if (!existedUser) {
        throw Error("You don't have an account yet, create one");
      } else {
        try {
          await sendSecretMail(email, loginSecret);
          await prisma.user.update({ data: { loginSecret }, where: { email } });
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
    },
  },
};
