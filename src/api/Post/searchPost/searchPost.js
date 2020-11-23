export default {
  Query: {
    searchPost: async (_, args, { prisma }) => {
      const { term } = args;
      let resultPost = [];
      if (term !== "") {
        resultPost = await prisma.post.findMany({
          where: {
            OR: [
              {
                location: {
                  startsWith: term,
                },
              },
              {
                caption: {
                  startsWith: term,
                },
              },
            ],
          },
        });
      }
      return resultPost;
    },
  },
};
