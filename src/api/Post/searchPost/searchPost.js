import prisma from "../../../prisma";

export default {
  Query: {
    searchPost: async (_, args) => {
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
          include: {
            likes: true,
          },
        });
      }
      return resultPost;
    },
  },
};
