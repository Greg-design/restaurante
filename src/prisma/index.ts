import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export default prismaClient;

// Com esse prismaClient conseguimos acessar o banco de dados e fazer cruds por exemplo.
