import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents, addStudent } from '../redux/features/studentsSlice';
import { MdAdd } from "react-icons/md";
import { formatDate ,  formatDateTime} from '@/utils/dateFormat';
export default function StudentsTable() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students); // Access students from Redux state
  const [showModal, setShowModal] = useState(false);
  const [selectedAY, setSelectedAY] = useState("AY 2024-25");
  const [selectedCourse, setSelectedCourse] = useState("CBSE 9");

  useEffect(() => {
    dispatch(fetchStudents()); // Fetch students when the component loads
  }, [dispatch]);

  const handleAddStudent = async (newStudent) => {
    await dispatch(addStudent(newStudent)); // Dispatch the action to add a student
    setShowModal(false); // Close the modal after adding the student
    console.log(students);
  };

  return (
    <div>
      {/* Filters and Add Button */}
      <div className="flex justify-between text-[#3f526e] font-semibold items-center mb-4">
        <div className="flex space-x-4">
          <select
            value={selectedAY}
            onChange={(e) => setSelectedAY(e.target.value)}
            className="px-4 py-2 border rounded bg-gray-200 w-[160px]"
            class="custom-select"
          >
            <option value="AY 2024-25">AY 2024-25 </option>
            <option value="AY 2023-24">AY 2023-24</option>
          </select>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="px-4 py-2 border rounded bg-gray-200 w-[120px]"
          >
            <option value="CBSE 9">CBSE 9</option>
            <option value="CBSE 10">CBSE 10</option>
          </select>
        </div>
        <button
          className="px-4 py-2  bg-gray-200 rounded flex row items-center gap-2"
          onClick={() => setShowModal(true)}
        >
         <MdAdd className='text-xl'/> Add new Student
        </button>
      </div>

      {/* Table */}
      <div className="bg-white text-black text-[0.8em] shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b text-black text-[0.9em]">
              <th className="py-3 px-4 ">Student Name</th>
              <th className="py-3 px-4">Cohort</th>
              <th className="py-3 px-4">Courses</th>
              <th className="py-3 px-4">Date Joined</th>
              <th className="py-3 px-4">Last Login</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 flex items-center space-x-2">
                    <img
                      src="/placeholder-avatar.png"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{student.name}</span>
                  </td>
                  <td className="py-3 px-4">{student.cohort_id}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <img src="/icons/science-icon.png" alt="Icon" className="w-6 h-6" />
                      <span>CBSE 9 Science</span>
                    </div>
                  </td>
                  {/* <td className="py-3 px-4">{new Date(student.date_joined).toLocaleDateString()}</td> */}
                  <td className="py-3 px-4">{formatDate(student.date_joined)}</td>
                  <td className="py-3 px-4">{formatDateTime(student.last_login)}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`w-3 h-3 inline-block rounded-full ${
                        student.status === "active" ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-3">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Student Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded">
            <AddStudentForm onClose={() => setShowModal(false)} onAddStudent={handleAddStudent} />
          </div>
        </div>
      )}
    </div>
  );
}

function AddStudentForm({ onClose, onAddStudent }) {
  const [formData, setFormData] = useState({ name: '', cohortId: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: formData.name,
      cohort_id: formData.cohortId,
      date_joined: new Date().toISOString(),
      last_login: new Date().toISOString(),
      status: "active",
    };
    onAddStudent(newStudent); // Pass the new student to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-2 mt-4">Cohort ID</label>
        <input
          type="text"
          name="cohortId"
          value={formData.cohortId}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded"
          required
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={onClose}
          className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
        >
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Student
        </button>
      </div>
    </form>
  );
}
