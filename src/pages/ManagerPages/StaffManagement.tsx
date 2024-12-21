import { useDispatch, useSelector } from "react-redux";
import StaffList from "../../components/StaffList";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../store/store";
import {
  StaffCreationResponse,
  StaffReponse,
  StaffRequest,
} from "../../types/Staff";
import { createStaff, fetchStaffs } from "../../store/Staff/StaffAction";
import { AutoComplete, Col, message, Modal, Row, Typography } from "antd";

const { Text } = Typography;

const StaffManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStaff, setNewStaff] = useState<StaffRequest>({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [searchValue, setSearchValue] = useState("");
  const [filteredStaff, setFilteredStaff] = useState<StaffReponse[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const { staffList } = useSelector((state: RootState) => state.staff);

  useEffect(() => {
    dispatch(fetchStaffs());
  }, [dispatch]);

  useEffect(() => {
    if (searchValue) {
      console.log('s: ', searchValue)
      const filtered = staffList.filter((staff) =>
        `${staff.name} ${staff.email} ${staff.phone}`
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFilteredStaff(filtered);
    } else {
      setFilteredStaff(staffList);
    }
  }, [searchValue, staffList]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStaff((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddStaff = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    message.loading({
      content: "Adding staff...",
      key: "updatable",
    });
    dispatch(createStaff(newStaff)).then((action) => {
      if (action.type === "staff/createStaff/fulfilled") {
        const newStaff = action.payload as StaffCreationResponse;
        console.log("staff: ", newStaff);
        Modal.success({
          title: "New Staff Added",
          content: (
            <div>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Row gutter={[16, 8]}>
                    <Col span={6}>
                      <Text strong>Name:</Text>
                    </Col>
                    <Col span={18}>
                      <Text>{newStaff.name}</Text>
                    </Col>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row gutter={[16, 8]}>
                    <Col span={6}>
                      <Text strong>Email:</Text>
                    </Col>
                    <Col span={18}>
                      <Text>{newStaff.email}</Text>
                    </Col>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row gutter={[16, 8]}>
                    <Col span={6}>
                      <Text strong>Password:</Text>
                    </Col>
                    <Col span={18}>
                      <Text>{newStaff.password}</Text>
                    </Col>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row gutter={[16, 8]}>
                    <Col span={6}>
                      <Text strong>Phone:</Text>
                    </Col>
                    <Col span={18}>
                      <Text>{newStaff.phone}</Text>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          ),
        });
      }
    });
    setIsModalOpen(false);
    setNewStaff({ firstName: "", lastName: "", phone: "" });
  };

  const handleCancelAddStaff = () => {
    setNewStaff({ firstName: "", lastName: "", phone: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">All Staffs</h1>
        <AutoComplete
          className="w-3/5"
          options={filteredStaff.map((staff) => ({
            value: `${staff.name} ${staff.email} ${staff.phone}`,
            label: (
              <Row>
                <Col span={24}>
                  <strong>{staff.name}</strong>
                </Col>
                <Col span={24}>
                  <span style={{ fontSize: "12px", color: "#888" }}>
                    {staff.email}
                  </span>
                </Col>
                <Col span={24}>
                  <span style={{ fontSize: "12px", color: "#888" }}>
                    {staff.phone}
                  </span>
                </Col>
              </Row>
            ),
          }))}
          placeholder="Search staff..."
          value={searchValue}
          onChange={(value) => setSearchValue(value)}
          allowClear
        ></AutoComplete>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Add Staff
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <StaffList staffList={filteredStaff} />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md w-1/2">
            <h2 className="text-xl font-semibold mb-4">Add Staff</h2>
            <form onSubmit={handleAddStaff}>
              <div className="mb-4">
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={newStaff.firstName}
                  onChange={handleInputChange}
                  className="border rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={newStaff.lastName}
                  onChange={handleInputChange}
                  className="border rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={newStaff.phone}
                  onChange={handleInputChange}
                  className="border rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
                  onClick={handleCancelAddStaff}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Add Staff
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffManagement;
