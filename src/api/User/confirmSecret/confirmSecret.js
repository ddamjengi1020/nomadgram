import { PrismaClient } from "@prisma/client";
import { generateToken } from "../../../utils";

const prisma = new PrismaClient();

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { secret, email } = args;
      const user = await prisma.user.findOne({ where: { email } });
      if (user.loginSecret === secret) {
        const token = generateToken(user.id);
        return token;
      } else {
        throw Error("Wrong email/secret combination");
      }
    },
  },
};
