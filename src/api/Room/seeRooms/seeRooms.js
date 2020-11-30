import prisma from "../../../prisma";

export default {
  Query: {
    seeRooms: (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      return prisma.room.findMany({
        where: { participants: { some: { id: user.id } } },
      });
    },
  },
};
