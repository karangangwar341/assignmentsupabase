import prisma from '../../utils/prisma';

export default async function handler(req, res) {
  console.log(req,res);
  if (req.method === 'GET') {
   console.log("hi3");
    const students = await prisma.students.findMany();  // Corrected: using plural 'students'
    res.status(200).json(students);
  } else if (req.method === 'POST') {
    // Add a new student
    const { name, cohort_id, date_joined } = req.body;
    const student = await prisma.students.create({  // Corrected: using plural 'students'
      data: { name, cohort_id: parseInt(cohort_id), date_joined },
    });
    res.status(201).json(student);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
