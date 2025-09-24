import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import logo from "../assets/logo.webp";
import Api from "../components/Api.json";

const Patient = () => {
  const [allUsers, setAllUsers] = useState(Api);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(Api);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    contact: { phone: "" },
    imageUrl: "",
  });

  useEffect(() => {
    const results = allUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm, allUsers]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddPatient = (e) => {
    e.preventDefault();
    const newUser = {
      id: allUsers.length + 1,
      ...newPatient,
    };
    setAllUsers([...allUsers, newUser]);
    setIsAddModalOpen(false);
    setNewPatient({ name: "", age: "", contact: { phone: "" }, imageUrl: "" });
  };

  return (
    <div>
      <Header />

      {/* Top section */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4 mt-6">
        <h2 className="text-2xl font-light">Patient</h2>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <input
            className="border rounded px-3 py-2 w-full sm:w-64"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name"
          />
          <button
            className="border px-6 py-2 rounded-2xl hover:bg-gray-100 w-full sm:w-auto"
            onClick={() => setIsAddModalOpen(true)}
          >
            Add New
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 p-4">
              <img
                src={user.imageUrl || logo}
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover"
                alt={`Profile of ${user.name}`}
              />
              <div className="flex flex-col">
                <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">
                  {user.name}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Age: {user.age}
                </p>
              </div>
            </div>
            <div className="px-4 pb-4">
              <p className="text-gray-700 text-sm sm:text-lg">
                <span className="font-medium">Contact:</span>{" "}
                {user.contact.phone}
              </p>
              <button
                className="w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg mt-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                onClick={() => setSelectedUser(user)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Patient Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50 px-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md sm:max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Add New Patient</h2>
            <form onSubmit={handleAddPatient} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded w-full"
                value={newPatient.name}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, name: e.target.value })
                }
                required
              />
              <input
                type="number"
                placeholder="Age"
                className="border p-2 rounded w-full"
                value={newPatient.age}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, age: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Phone"
                className="border p-2 rounded w-full"
                value={newPatient.contact.phone}
                onChange={(e) =>
                  setNewPatient({
                    ...newPatient,
                    contact: { phone: e.target.value },
                  })
                }
                required
              />
              <input
                type="text"
                placeholder="Image URL (optional)"
                className="border p-2 rounded w-full"
                value={newPatient.imageUrl}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, imageUrl: e.target.value })
                }
              />
              <div className="flex justify-end gap-3 mt-3">
                <button
                  type="button"
                  className="px-4 py-2 border rounded w-full sm:w-auto"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded w-full sm:w-auto"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50 px-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md sm:max-w-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {selectedUser.name}
            </h2>
            <img
              src={selectedUser.imageUrl || logo}
              className="h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover mx-auto"
              alt={selectedUser.name}
            />
            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              Age: {selectedUser.age}
            </p>
            <p className="mt-2 text-gray-700 text-sm sm:text-base">
              Contact: {selectedUser.contact.phone}
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded w-full sm:w-auto"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patient;
