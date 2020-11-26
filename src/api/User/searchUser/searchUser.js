import prisma from "../../../prisma";

export default {
  Query: {
    searchUser: async (_, args) => {
      const { term } = args;
      let resultUser = [];
      if (term !== "") {
        resultUser = await prisma.user.findMany({
          where: {
            OR: [
              {
                userName: {
                  contains: term,
                },
              },
              {
                firstName: {
                  contains: term,
                },
              },
              {
                lastName: {
                  contains: term,
                },
              },
            ],
          },
        });
      }
      return resultUser;
    },
  },
};
