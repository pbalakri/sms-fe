// Create a card component with department name, code, photo of head of department, count of courses, and count of staff

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DepartmentCardCompact({
  name,
  code,
  hodPhoto,
  courseCount,
  staffCount,
}: {
  name: string;
  code: string;
  hodPhoto: string;
  courseCount: number;
  staffCount: number;
}) {
  return (
    <Link href={`/departments/1`}>
    <div className="flex flex-col gap-2 p-4 m-4 border border-gray-300 rounded">
      <div className="flex justify-between">
        <p className="text-lg font-extralight">{name}</p>
        <p className="text-sm text-gray-500">#{code}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{courseCount} courses</p>
        <p className="text-sm text-gray-500">{staffCount} staff</p>
      </div>
      <Image
          className="dark:invert w-8 h-4 rounded-full"
          src={hodPhoto}
          alt="Next.js logo"
          width={4}
          height={4}
          priority
        />
    </div>
    </Link>
  );
}