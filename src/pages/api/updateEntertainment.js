import prisma from '../../prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not Allowed' });
  }
  try {
    const updatedEntertainment = await prisma.entertainment.update({
      where: {
        id: req.body.id,
      },
      data: req.body.formData,
    });
    res.json(updatedEntertainment);
  } catch (err) {
    return res.status(409).json({ message: 'Entertainment Exists!' });
  }
}
