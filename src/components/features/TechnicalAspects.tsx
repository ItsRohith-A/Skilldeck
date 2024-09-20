import React from 'react'

const UserTable = () => {
    return (

        <div className="p-6 bg-white rounded-lg shadow-lg">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border border-gray-200">Feature</th>
                        <th className="px-4 py-2 border border-gray-200">WordPress</th>
                        <th className="px-4 py-2 border border-gray-200">Custom</th>
                        <th className="px-4 py-2 border border-gray-200">SkillDeck</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Servers</td>
                        <td className="px-4 py-2 border border-gray-200">Usually shared</td>
                        <td className="px-4 py-2 border border-gray-200">Usually Basic/Limited Resources</td>
                        <td className="px-4 py-2 border border-gray-200">Best Performing, High Bandwidth & Resources</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Website Frontend Builder</td>
                        <td className="px-4 py-2 border border-gray-200">Custom</td>
                        <td className="px-4 py-2 border border-gray-200">React Js</td>
                        <td className="px-4 py-2 border border-gray-200">React Js</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Website UI/UX</td>
                        <td className="px-4 py-2 border border-gray-200">Usually bad</td>
                        <td className="px-4 py-2 border border-gray-200">Average - good</td>
                        <td className="px-4 py-2 border border-gray-200">Advanced, high performing, beautiful</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Technology/Backend</td>
                        <td className="px-4 py-2 border border-gray-200">PHP - Community</td>
                        <td className="px-4 py-2 border border-gray-200">Custom</td>
                        <td className="px-4 py-2 border border-gray-200">MERN Stack</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Security</td>
                        <td className="px-4 py-2 border border-gray-200">Not Really Secure</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Highly Secure</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Website Performance</td>
                        <td className="px-4 py-2 border border-gray-200">Poor</td>
                        <td className="px-4 py-2 border border-gray-200">Average - poor</td>
                        <td className="px-4 py-2 border border-gray-200">Best</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Load Balancers</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">NA/Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Implemented</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">CDN</td>
                        <td className="px-4 py-2 border border-gray-200">Depends On Developer</td>
                        <td className="px-4 py-2 border border-gray-200">Depends On Developer</td>
                        <td className="px-4 py-2 border border-gray-200">Implemented</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Responsiveness</td>
                        <td className="px-4 py-2 border border-gray-200">Not Assured</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Taken Care</td>
                    </tr>
                </tbody>
            </table>
        </div>

        // <div className="p-6 bg-white rounded-lg shadow-lg">
        //     <table className="min-w-full table-auto border-collapse border border-gray-200">
        //         <thead>
        //             <tr className="bg-gray-100">
        //                 <th className="px-4 py-2 border border-gray-200">NAME</th>
        //                 <th className="px-4 py-2 border border-gray-200">TITLE</th>
        //                 <th className="px-4 py-2 border border-gray-200">STATUS</th>
        //                 <th className="px-4 py-2 border border-gray-200">ROLE</th>
        //                 <th className="px-4 py-2 border border-gray-200">ACTION</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr className="hover:bg-gray-50">
        //                 <td className="px-4 py-2 border border-gray-200">Musharof Chowdhury</td>
        //                 <td className="px-4 py-2 border border-gray-200">Multidisciplinary Web Entrepreneur Developer</td>
        //                 <td className="px-4 py-2 border border-gray-200">
        //                     <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
        //                 </td>
        //                 <td className="px-4 py-2 border border-gray-200">Admin</td>
        //                 <td className="px-4 py-2 border border-gray-200 text-blue-600">
        //                     <button className="px-4 py-1 border rounded-lg hover:bg-blue-100">Edit</button>
        //                 </td>
        //             </tr>
        //             <tr className="hover:bg-gray-50">
        //                 <td className="px-4 py-2 border border-gray-200">Nenifer Lofess</td>
        //                 <td className="px-4 py-2 border border-gray-200">Regional Paradigm Technician Optimization</td>
        //                 <td className="px-4 py-2 border border-gray-200">
        //                     <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
        //                 </td>
        //                 <td className="px-4 py-2 border border-gray-200">Owner</td>
        //                 <td className="px-4 py-2 border border-gray-200 text-blue-600">
        //                     <button className="px-4 py-1 border rounded-lg hover:bg-blue-100">Edit</button>
        //                 </td>
        //             </tr>
        //             <tr className="hover:bg-gray-50">
        //                 <td className="px-4 py-2 border border-gray-200">Jhon Smith</td>
        //                 <td className="px-4 py-2 border border-gray-200">Regional Paradigm Technician Optimization</td>
        //                 <td className="px-4 py-2 border border-gray-200">
        //                     <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
        //                 </td>
        //                 <td className="px-4 py-2 border border-gray-200">Member</td>
        //                 <td className="px-4 py-2 border border-gray-200 text-blue-600">
        //                     <button className="px-4 py-1 border rounded-lg hover:bg-blue-100">Edit</button>
        //                 </td>
        //             </tr>
        //             <tr className="hover:bg-gray-50">
        //                 <td className="px-4 py-2 border border-gray-200">Sulum Keliym</td>
        //                 <td className="px-4 py-2 border border-gray-200">Lead Implementation Liaison Mobility</td>
        //                 <td className="px-4 py-2 border border-gray-200">
        //                     <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
        //                 </td>
        //                 <td className="px-4 py-2 border border-gray-200">Admin</td>
        //                 <td className="px-4 py-2 border border-gray-200 text-blue-600">
        //                     <button className="px-4 py-1 border rounded-lg hover:bg-blue-100">Edit</button>
        //                 </td>
        //             </tr>
        //             <tr className="hover:bg-gray-50">
        //                 <td className="px-4 py-2 border border-gray-200">Alex Semuyel</td>
        //                 <td className="px-4 py-2 border border-gray-200">Applications Engineer Security</td>
        //                 <td className="px-4 py-2 border border-gray-200">
        //                     <span className="text-red-600 bg-red-100 px-2 py-1 rounded-full">Deactivate</span>
        //                 </td>
        //                 <td className="px-4 py-2 border border-gray-200">Admin</td>
        //                 <td className="px-4 py-2 border border-gray-200 text-blue-600">
        //                     <button className="px-4 py-1 border rounded-lg hover:bg-blue-100">Edit</button>
        //                 </td>
        //             </tr>
        //             <tr className="hover:bg-gray-50">
        //                 <td className="px-4 py-2 border border-gray-200">Humil Limition</td>
        //                 <td className="px-4 py-2 border border-gray-200">Regional Paradigm Technician Optimization</td>
        //                 <td className="px-4 py-2 border border-gray-200">
        //                     <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
        //                 </td>
        //                 <td className="px-4 py-2 border border-gray-200">Member</td>
        //                 <td className="px-4 py-2 border border-gray-200 text-blue-600">
        //                     <button className="px-4 py-1 border rounded-lg hover:bg-blue-100">Edit</button>
        //                 </td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
    )
}

export default UserTable
