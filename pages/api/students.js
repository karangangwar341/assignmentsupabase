import prisma from '../../utils/prisma';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      // Fetch students along with cohort details
      const students = await prisma.students.findMany({
        include: {
          cohorts: true, // Include the cohort relationship
        },
      });
      res.status(200).json(students);
    } else if (req.method === 'POST') {
      // Add a new student
      const { name, cohort_id, date_joined } = req.body;

      // Validate input
      if (!name || !cohort_id) {
        return res.status(400).json({ error: 'Name and cohort_id are required.' });
      }

      const student = await prisma.students.create({
        data: {
          name,
          cohort_id: parseInt(cohort_id, 10),
          date_joined: date_joined || undefined, // Allow optional date_joined
        },
      });
      res.status(201).json(student);
    } else {
      // Handle unsupported HTTP methods
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
