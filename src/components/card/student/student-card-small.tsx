// Create a card component with student registration id, name, and grade class.

import React from "react";
import './student-card.css'
import Link from "next/link";
export default function StudentCardCompact({
  registrationId,
  name,
  gradeClass,
}: {
  registrationId: string;
  name: string;
  gradeClass: number;
}) {
  return (
    <Link href="/students/[id]" as={`/students/${registrationId}`}>
    <div className="flex items-center w-full justify-center border rounded">
      <div className="max-w-xs">
          <div className="bg-black shadow-xl rounded-lg py-3">
              <div className="photo-wrapper p-2">
                  <img className="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
              </div>
              <div className="p-2">
                  <h3 className="text-center text-xl text-gray-500 font-medium leading-8">{name}</h3>
                  <div className="text-center text-gray-400 text-xs font-semibold">
                      <p>{registrationId}</p>
                  </div>
                  <table className="text-xs my-3">
                      <tbody>
                        <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Grade</td>
                          <td className="px-2 py-2">{gradeClass}</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                          <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                            <td className="px-2 py-2">+977 9955221114</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                            <td className="px-2 py-2">john@exmaple.com</td>
                        </tr>
                  </tbody></table>

                  

              </div>
          </div>
      </div>

    </div>
    </Link>);
}
