import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args, { prisma }) => {
      try {
        const { secret, email } = args;
        const user = await prisma.user.findOne({ where: { email } });
        if (user.loginSecret === secret) {
          await prisma.user.update({
            where: { id },
            data: { loginSecret: "" },
          });
          const token = generateToken(user.id);
          return token;
        } else {
          throw Error("Wrong email/secret combination");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
