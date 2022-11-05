import prisma from '../../prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not Allowed' });
  }
  try {
    const savedEntertainment = await prisma.entertainment.create({
      data: req.body.formData,
    });
    res.json(savedEntertainment);
  } catch (err) {
    return res.status(409).json({ message: 'Entertainment Exists!' });
  }
}
