
import { NextApiRequest, NextApiResponse } from 'next';

// Mock database
let students: { id: number; name: string }[] = [];

// Handler function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'POST':
      // Create a new student
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ error: 'Name is required' });
      }
      const newStudent = { id: students.length + 1, name };
      students.push(newStudent);
      return res.status(201).json(newStudent);

    case 'GET':
      // Get all students using this curl 
      // curl --location --request GET 'localhost:3000/schools/1/students' \
      // --header 'Content-Type: application/json' 
      // }'

      fetch('http://localhost:3000/schools/1/students', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.error('Error:', error);
        });

      return res.status(200).json(students);

    default:
      res.setHeader('Allow', ['POST', 'GET']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}