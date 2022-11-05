import prisma from '../../prisma';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not Allowed' });
  }
  const { type } = req.query;
  if (!type || (type !== 'movie' && type !== 'anime')) {
    return res.status(405).json({ message: 'Method not Allowed' });
  }
  if (type === 'movie') {
    const watchingMovies = await prisma.entertainment.findMany({
      where: {
        type: 'movie',
        category: 'watching',
      },
      orderBy: [
        {
          updatedAt: 'desc',
        },
      ],
    });
    const wishlistedMovies = await prisma.entertainment.findMany({
      where: {
        type: 'movie',
        category: 'wishlist',
      },
      orderBy: [
        {
          updatedAt: 'desc',
        },
      ],
    });
    const completedMovies = await prisma.entertainment.findMany({
      where: {
        type: 'movie',
        category: 'completed',
      },
      orderBy: [
        {
          updatedAt: 'desc',
        },
      ],
    });
    return res.send({ watchingMovies, wishlistedMovies, completedMovies });
  } else {
    const watchingAnime = await prisma.entertainment.findMany({
      where: {
        type: 'anime',
        category: 'watching',
      },
      orderBy: [
        {
          updatedAt: 'desc',
        },
      ],
    });
    const wishlistedAnime = await prisma.entertainment.findMany({
      where: {
        type: 'anime',
        category: 'wishlist',
      },
      orderBy: [
        {
          updatedAt: 'desc',
        },
      ],
    });
    const completedAnime = await prisma.entertainment.findMany({
      where: {
        type: 'anime',
        category: 'completed',
      },
      orderBy: [
        {
          updatedAt: 'desc',
        },
      ],
    });
    return res.send({ watchingAnime, wishlistedAnime, completedAnime });
  }
  return res.status(405).json({ message: 'Method not Allowed' });
}
