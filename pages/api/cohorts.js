import prisma from '../../utils/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const cohorts = await prisma.cohorts.findMany();
      res.status(200).json(cohorts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch cohorts' });
    }
  }
}
