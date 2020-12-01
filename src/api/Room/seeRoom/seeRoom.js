import prisma from "../../../prisma";

export default {
  Query: {
    seeRoom: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id } = args;
      const { user } = request;
      const verifiedParticipant = await prisma.room.count({
        where: { id, participants: { some: { id: user.id } } },
      });
      if (verifiedParticipant) {
        return prisma.room.findOne({
          where: {
            id,
          },
          include: {
            participants: true,
            messages: {
              include: {
                from: true,
                to: true,
              },
            },
          },
        });
      } else {
        throw Error("You Can't see the Room!");
      }
    },
  },
};
