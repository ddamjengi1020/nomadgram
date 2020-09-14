const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  const users = await prisma.user.create({
    data: {
      name: "juno",
      email: "silluat11@gmail.com",
    },
  });

  const allUsers = await prisma.user.findMany();
  console.log("😁 database connected");
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
