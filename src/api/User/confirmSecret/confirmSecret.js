import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { secret, email } = args;
      const user = await prisma.user.findOne({ where: { email } });
      if (user.loginSecret === secret) {
        //Jwt
        return "TOKEN";
      } else {
        throw Error("Wrong email/secret combination");
      }
    },
  },
};
