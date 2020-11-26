import prisma from "../../../prisma";

export default {
  Mutation: {
    editUser: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { userName, email, firstName, lastName, bio } = args;
      const { user } = request;
      const editUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          userName,
          email,
          firstName,
          lastName,
          bio,
        },
      });
      return editUser;
    },
  },
};
