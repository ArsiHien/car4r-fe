import "./StaffList.css"

const StaffList: React.FC = () => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th><input type="checkbox" className="h-4 w-4"/></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Recent Activity</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" className="h-4 w-4"/></td>
                    <td>Nguyễn Văn A</td>
                    <td>anguyenvan@gmail.com</td>
                    <td>0123456789</td>
                    <td>a hour ago</td>
                    <td>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-md">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default StaffList;