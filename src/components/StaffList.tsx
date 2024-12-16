const StaffList: React.FC = () => {
  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this staff member?");
    if (confirmDelete) {
      // Logic to delete the staff member goes here
      console.log("Staff member deleted."); // Placeholder for deletion logic
    }
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-2 py-2 text-center align-middle"> {/* Added Tailwind classes */}
            <input type="checkbox" className="h-4 w-4" />
          </th>
          <th className="px-2 py-2 text-center align-middle">Name</th> {/* Added Tailwind classes */}
          <th className="px-2 py-2 text-center align-middle">Email</th> {/* Added Tailwind classes */}
          <th className="px-2 py-2 text-center align-middle">Phone</th> {/* Added Tailwind classes */}
          <th className="px-2 py-2 text-center align-middle">Recent Activity</th> {/* Added Tailwind classes */}
          <th className="px-2 py-2 text-center align-middle">Delete</th> {/* Added Tailwind classes */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-t border-gray-200 px-2 py-2 text-center align-middle"> {/* Added Tailwind classes */}
            <input type="checkbox" className="h-4 w-4" />
          </td>
          <td className="border-t border-gray-200 px-2 py-2 text-center align-middle">Nguyễn Văn A</td> {/* Added Tailwind classes */}
          <td className="border-t border-gray-200 px-2 py-2 text-center align-middle">anguyenvan@gmail.com</td> {/* Added Tailwind classes */}
          <td className="border-t border-gray-200 px-2 py-2 text-center align-middle">0123456789</td> {/* Added Tailwind classes */}
          <td className="border-t border-gray-200 px-2 py-2 text-center align-middle">a hour ago</td> {/* Added Tailwind classes */}
          <td className="border-t border-gray-200 px-2 py-2 text-center align-middle"> {/* Added Tailwind classes */}
            <button className="px-4 py-2 bg-red-600 text-white rounded-md" onClick={handleDelete}>
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default StaffList;
