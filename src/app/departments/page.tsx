"use client";
import DepartmentCardCompact from "@/components/card/department/department-card-small";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p>You are not logged in. Please <a href="/login" className="text-blue-500">login</a>.</p>
      </div>
    );
  }
  return (
    <div>
    <DepartmentCardCompact name="Computer Science" code="CS" hodPhoto="/next.svg" courseCount={5} staffCount={10} />
    <DepartmentCardCompact name="Mathematics" code="MATH" hodPhoto="/next.svg" courseCount={3} staffCount={5} /></div>
  );
}
