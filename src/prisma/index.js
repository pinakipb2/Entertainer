import { PrismaClient } from '@prisma/client';

const env = process.env.NODE_ENV;
let prisma;
if (env === 'development') {
  prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
} else if (env === 'production') {
  prisma = new PrismaClient();
}

export default prisma;
