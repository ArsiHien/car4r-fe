import { useDispatch } from "react-redux";
import { StaffReponse } from "../types/Staff";
import { AppDispatch } from "../store/store";
import { message, Modal } from "antd";
import { deleteStaff, fetchStaffs } from "../store/Staff/StaffAction";

interface StaffListProps {
  staffList: StaffReponse[];
}

const StaffList: React.FC<StaffListProps> = ({ staffList }: StaffListProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = (staffId: string, staffName: string) => {
    Modal.confirm({
      title: `Are you sure you want to delete ${staffName}?`,
      content:
        "This action cannot be undone and will permanently remove the employee from the system.",
      okText: "Yes, Delete",
      cancelText: "No, Keep Employee",
      onOk: async () => {
        try {
          await dispatch(deleteStaff(staffId)).unwrap();
          // await dispatch(fetchStaffs());
          message.success({
            content: "Employee deleted successfully!",
            key: "updatable",
            duration: 2,
          });
        } catch (error) {
          message.error({
            content: "Failed to delete the employee. Please try again.",
            key: "updatable",
            duration: 2,
          });
        }
      },
    });
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-2 py-2 text-center align-middle">
            <input type="checkbox" className="h-4 w-4" />
          </th>
          <th className="px-2 py-2 text-center align-middle">Name</th>
          <th className="px-2 py-2 text-center align-middle">Email</th>
          <th className="px-2 py-2 text-center align-middle">Phone</th>
          <th className="px-2 py-2 text-center align-middle">Delete</th>
        </tr>
      </thead>
      <tbody>
        {staffList.map((staff, index) => (
          <tr key={index}>
            <td className="border-t border-gray-200 px-2 py-2 text-center align-middle">
              <input type="checkbox" className="h-4 w-4" />
            </td>
            <td className="border-t border-gray-200 px-2 py-2 text-center align-middle">
              {staff.name}
            </td>
            <td className="border-t border-gray-200 px-2 py-2 text-center align-middle">
              {staff.email}
            </td>
            <td className="border-t border-gray-200 px-2 py-2 text-center align-middle">
              {staff.phone}
            </td>
            <td className="border-t border-gray-200 px-2 py-2 text-center align-middle">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md"
                onClick={() => handleDelete(staff.id, staff.name)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StaffList;
