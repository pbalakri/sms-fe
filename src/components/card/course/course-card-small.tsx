// Create a course card with Course name, start date, end date, primary instructor name, secondary instructor name

import React from "react";
import Link from "next/link";

export default function CourseCardCompact({
    courseId,
    courseName,
    startDate,
    endDate,
    primaryInstructor,
    secondaryInstructor,
    }: {
    courseId: string;
    courseName: string;
    startDate: string;
    endDate: string;
    primaryInstructor: string;
    secondaryInstructor: string;
    }) {
    return (
        <Link href="/courses/[id]" as={`/courses/${courseId}`}>
            <div className="max-w-xs justify-center">
                <div className="p-2 justify-center w-full">
                        <h3 className="text-center text-xl text-gray-500 font-medium leading-8">{courseName}</h3>
                        <div className="text-center text-gray-400 text-xs font-semibold">
                            <p>{courseId}</p>
                        </div>
                        <table className="text-xs my-3 w-full">
                            <tbody>
                                <tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">Start Date</td>
                                <td className="px-2 py-2">{startDate}</td>
                                </tr>
                                <tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">End Date</td>
                                <td className="px-2 py-2">{endDate}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Primary Instructor</td>
                                    <td className="px-2 py-2">{primaryInstructor}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Secondary Instructor</td>
                                    <td className="px-2 py-2">{secondaryInstructor}</td>
                                </tr>
                        </tbody></table>
        
                        
        
                </div>
            </div>
        </Link>);
    }