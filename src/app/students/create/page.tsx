"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import Select from 'react-select';
export default function CreateStudent() {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    username: '',
    password: '',
    email: '',
  });
  const [registrationId, setRegistrationId] = useState('');
  const [gradeClass, setGradeClass] = useState(0);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ person, registrationId, gradeClass }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      // Handle success
      console.log('Student created successfully:', data);
    } catch (error) {
      // Handle error
      console.error('Error creating student:', error);
    }
  };

  return (
    <div>
        <main className="relative flex flex-col gap-8 row-start-2 items-center sm:items-start">
		
	  	<div className="justify-center w-full">
			<Link href="/students" className="absolute top-6 left-0 text-gray-500 hover:text-white">
				<FaChevronLeft size={24} />
			</Link>
			<h2 className="text-center text-xlarge">New Student</h2>
			
        	<form onSubmit={handleSubmit}>
			<div className="grid grid-cols-2 gap-4 m-4">
				<input
					type="text"
					placeholder="First Name"
					value={person.firstName}
					onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
					className="block p-2 border-b border-gray-300 bg-black text-white text-medium"
					/>
				<input
					type="text"
					placeholder="Last Name"
					value={person.lastName}
					onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
					className="block p-2 border-b border-gray-300 bg-black text-white text-medium"
					/>
			</div>
			<div className="grid grid-cols-2 gap-4 m-4">
				<div className="col-span-2">
					<input
					type="date"
					placeholder="Date of Birth"
					value={person.dateOfBirth}
					onChange={(e) => setPerson({ ...person, dateOfBirth: e.target.value })}
					className="block p-2 border-b border-gray-300 bg-black text-white text-medium w-full"
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4 m-4">
				<input
				type="text"
				placeholder="Username"
				value={person.username}
				onChange={(e) => setPerson({ ...person, username: e.target.value })}
				className="block p-2 border-b border-gray-300 bg-black text-white text-medium"
				/>
				<input
				type="password"
				placeholder="Password"
				value={person.password}
				onChange={(e) => setPerson({ ...person, password: e.target.value })}
				className="block p-2 border-b border-gray-300 bg-black text-white text-medium"
				/>
			</div>
			<div className="grid grid-cols-2 gap-4 m-4">
				<input
				type="email"
				placeholder="Email"
				value={person.email}
				onChange={(e) => setPerson({ ...person, email: e.target.value })}
				className="block p-2 border-b border-gray-300 bg-black text-white text-medium"
				/>
				<input
				type="text"
				placeholder="Registration ID"
				value={registrationId}
				onChange={(e) => setRegistrationId(e.target.value)}
				className="block p-2 border-b border-gray-300 bg-black text-white text-medium"
				/>
			</div>
			<div className="grid grid-cols-2 gap-4 m-4">
				<div className="col-span-2">
					<select className="block p-2 border-b border-gray-300 bg-black text-white text-medium">
						<option>English</option>
						<option>Mathematics</option>
					</select>
					{/* <input
					type="number"
					placeholder="Grade Class"
					value={gradeClass}
					onChange={(e) => setGradeClass(Number(e.target.value))}
					className="block p-2 border-b border-gray-300 bg-black text-white text-medium"
					/> */}
				</div>
			</div>
			<button type="submit" className="block bg-blue-500 text-white py-2 px-4 rounded">
			Create Student
			</button>
		</form>
		</div>
      </main>
    </div>
  );
}