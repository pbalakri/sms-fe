import CourseCardCompact from "@/components/card/course/course-card-small";
import Image from "next/image";

export default function Home() {
  return (
    <CourseCardCompact courseId="12345" courseName="Mathematics" startDate="2022-01-01" endDate="2022-12-31" primaryInstructor="John Doe" secondaryInstructor="Jane Doe" />
  );
}
