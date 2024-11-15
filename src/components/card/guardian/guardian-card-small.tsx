// Create a card component with student registration id, name, and grade class.

import React from "react";


export default function GuardianCardCompact({
  name,
  relation,
  phone,
  email,
  address
}: {
  name: string;
  relation: string;
  phone: string;
  email: string;
  address: string;
}) {
  return (
    
    <div className="flex items-center w-full justify-center border rounded">
      <div className="max-w-xs">
          <div className="bg-black shadow-xl rounded-lg py-3">
              <div className="p-2">
                  <h3 className="text-center text-xl text-gray-500 font-medium leading-8">{name}</h3>
                  <div className="text-center text-gray-400 text-xs font-semibold">
                      <p>{relation}</p>
                  </div>
                  <table className="text-xs my-3 w-full">
                      <tbody>
                        <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                          <td className="px-2 py-2">{phone}</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                          <td className="px-2 py-2">{email}</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                            <td className="px-2 py-2">{address}</td>
                        </tr>
                  </tbody></table>

                  

              </div>
          </div>
      </div>

    </div>);
}
