import { PrismaClient } from '@prisma/client';


declare global {
    var prisma: PrismaClient | undefined
};


const prismadb = globalThis.prisma || new PrismaClient();
// this will protect us from initiating a bunch of prisma client when HOTRELOAD and degrade the performance
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb;


export default prismadb