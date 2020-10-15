import { PrismaClient } from "@prisma/client";
import { generateSecret, sendSecretMail } from "../../../utils";

const prisma = new PrismaClient();

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { email } = args;
      const loginSecret = generateSecret();
      try {
        await sendSecretMail(email, loginSecret);
        await prisma.user.update({ data: { loginSecret }, where: { email } });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};