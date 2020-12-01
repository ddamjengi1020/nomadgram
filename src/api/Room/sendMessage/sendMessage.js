import prisma from "../../../prisma";

export default {
  Mutation: {
    sendMessage: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { roomId, text, toId } = args;
      let room;
      if (roomId === undefined) {
        if (user.id !== toId) {
          room = await prisma.room.create({
            data: {
              participants: {
                connect: [{ id: user.id }, { id: toId }],
              },
            },
            include: {
              participants: true,
            },
          });
        }
      } else {
        room = await prisma.room.findOne({
          where: { id: roomId },
          include: { participants: true },
        });
      }
      if (!room) {
        throw Error("Not found corresponding Room");
      }
      const getToUser = room.participants.filter(
        (participant) => participant.id !== user.id
      )[0];
      return prisma.message.create({
        data: {
          text,
          from: {
            connect: {
              id: user.id,
            },
          },
          to: {
            connect: {
              id: getToUser.id,
            },
          },
          room: {
            connect: {
              id: room.id,
            },
          },
        },
      });
    },
  },
};
