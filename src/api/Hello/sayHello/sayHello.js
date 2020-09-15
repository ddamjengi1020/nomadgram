import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// test

export default {
  Query: {
    findUser: async () => {
      let allUser = [];
      try {
        allUser = await prisma.user.findMany();
        return allUser;
      } catch (error) {
        console.log(error);
        return allUser;
      }
    },
  },
  Mutation: {
    newUser: async () => {
      let newUser = {};
      try {
        newUser = await prisma.user.create({
          data: {
            firstName: "lee",
            lastName: "juno",
            bio: "man",
            email:
              "silluat11@gmail.com" + Math.ceil(Math.random() * 100).toString(),
            userName: "땀쟁이" + Math.ceil(Math.random() * 100).toString(),
          },
        });
        return newUser;
      } catch (error) {
        console.log(error);
        return newUser;
      }
    },
    deleteAllUser: async () => {
      try {
        await prisma.user.deleteMany();
        const allUser = prisma.user.findMany();
        return allUser;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
