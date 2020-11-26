import prisma from "../../../prisma";

export default {
  Mutation: {
    uploadPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { caption, location, files } = args;
      const newPost = await prisma.post.create({
        data: {
          caption,
          location,
          user: { connect: { id: user.id } },
        },
      });
      files.forEach(async (file) =>
        prisma.file.create({
          data: { url: file, post: { connect: { id: newPost.id } } },
        })
      );
      return newPost;
    },
  },
};
