import StudentCardFull from "@/components/card/student/student-card-large";
import StudentCardCompact from "@/components/card/student/student-card-small";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Link href="/students/create" className="absolute top-4 right-4 text-gray-500 hover:text-white">
        <FaPlus size={24} />
      </Link>
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 m-4">
          <StudentCardCompact 
            registrationId="12345"
            name="Prashanth Balakrishnan"
            gradeClass={10} />
          <StudentCardCompact 
            registrationId="12345"
            name="Antony Marshall Perreira"
            gradeClass={10} />
          <StudentCardCompact 
            registrationId="12345"
            name="John Doe"
            gradeClass={10} />
          <StudentCardCompact 
            registrationId="12345"
            name="Priyathanya Ramanath"
            gradeClass={10} />
          <StudentCardCompact 
            registrationId="12345"
            name="Mira Baker"
            gradeClass={10} />
          <StudentCardCompact 
            registrationId="12345"
            name="Misha Curls"
            gradeClass={10} />
        </div>
      </main>
      
    </div>
  );
}
