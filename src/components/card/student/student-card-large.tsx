// Create a card component with student registration id, name, and grade className.

import React from "react";
import GuardianCardCompact from "../guardian/guardian-card-small";

export default function StudentCardFull({
  registrationId,
  name,
  gradeClass,
  dateOfBirth,
  email
}: {
  registrationId: string;
  name: string;
  gradeClass: number;
  dateOfBirth: string;
  email: string;
}) {
  return (
    <div className="container my-20">
        <div className="relative shadow rounded-lg w-full mx-auto">
                <div className="flex justify-center">
                    <img src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md transition duration-200 transform hover:scale-110" />
                </div>
                
                <div className="mt-16">
                    <h1 className="font-bold text-center ">{name}</h1>
                    <p className="text-center text-sm text-gray-400 font-medium">prashanth.balakrishnan@email.com</p>
                    
                    <div className="flex justify-between items-center my-5 px-6">
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">10C</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">12345</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">prashanth.balakrishnan@email.com</a>
                    </div>
                    <div className="flex justify-center items-center my-5 px-6">
                    <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-4 m-4">
                        <GuardianCardCompact name="John Doe" relation="Father" phone="+977 9955221114" email="foo@bar.com" address="Chatakpur-3, Dhangadhi Kailali" />
                        <GuardianCardCompact name="Jane Doe" relation="Mother" phone="+977 9955221114" email="bar@foo.com" address="Chatakpur-3, Dhangadhi Kailali" />                    
                    </div>
                    </div>

                    <div className="w-full">
                        <h3 className="font-medium text-gray-500 text-left px-6">History</h3>
                        <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            <a href="#" className="w-full border-t border-gray-100 text-white py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                
                                    Updated his status
                                    <span className="text-white text-small px-1">24 min ago</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-white py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    Added new profile picture
                                    <span className="text-white text-small px-1">42 min ago</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-white py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                Posted new article in <span className="font-bold">#Web Dev</span>
                                <span className="text-white text-small px-1">49 min ago</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-white py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                Edited website settings
                                <span className="text-white text-small px-1">1 day ago</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-white py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                Added new rank
                                <span className="text-white text-small px-1">5 days ago</span>
                            </a>
                            
                        </div>
                    </div>
                </div>
        </div>
    </div>
  );
}
