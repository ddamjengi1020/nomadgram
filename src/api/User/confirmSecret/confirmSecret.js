import prisma from "../../../prisma";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { secret, email } = args;
      const user = await prisma.user.findOne({ where: { email } });
      if (user.loginSecret === secret) {
        try {
          await prisma.user.update({
            where: { id: user.id },
            data: { loginSecret: "" },
          });
          const token = generateToken(user.id);
          return token;
        } catch (e) {
          console.log(e);
        }
      } else {
        throw Error("Wrong email/secret combination");
      }
    },
  },
};
