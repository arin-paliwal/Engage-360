import React, { useState } from "react";
import { Search, MoreVertical } from "lucide-react";
import InitialAvatar from "../../../utility/initialAvatar";
import { Employee } from "../../../types/common";
import { employees_data } from "../../../data/admin-dashboard";

export default function ManageEmployee() {
  const [employees, setEmployees] = useState<Employee[]>(employees_data);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleSave = () => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === selectedEmployee?.id ? { ...selectedEmployee } : emp
      )
    );
    setIsEditing(false);
    setSelectedEmployee(null);
  };

  const handleDelete = (id: number) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };
  

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Employees</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search keyword..."
            className="w-64 h-10 pl-10 pr-4 rounded-lg border focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="grid grid-cols-[2fr,1.5fr,1fr,1.5fr,1fr,1fr,0.5fr] px-6 py-4 border-b">
          {[
            "Employee Name",
            "Phone Number",
            "Department",
            "Job Title",
            "Contract Type",
            "Attendance",
          ].map((title) => (
            <div key={title} className="text-sm font-medium">
              {title}
            </div>
          ))}
        </div>

        {filteredEmployees.map((employee) => (
          <div
            key={employee.id}
            className="text-sm grid grid-cols-[2fr,1.5fr,1fr,1.5fr,1fr,1fr,0.5fr] px-6 py-4 border-b hover:bg-gray-100"
          >
            <div className="flex items-center gap-3">
              <InitialAvatar name={employee.name} size="sm" />
              <div>
                <div className="font-medium">{employee.name}</div>
                <div className="text-sm text-gray-500">{employee.email}</div>
              </div>
            </div>
            <div>{employee.phone}</div>
            <div>{employee.department}</div>
            <div>{employee.jobTitle}</div>
            <div>{employee.contractType}</div>
            <div>120h 32m</div>
            <div className="flex justify-end">
              <button
                className="p-1 rounded-full hover:bg-gray-200"
                onClick={() => handleEdit(employee)}
              >
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditing && selectedEmployee && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white h-[90%] w-[70%] overflow-auto p-6 rounded-lg shadow-lg ">
            <h3 className="text-xl font-bold mb-4">Edit Employee</h3>
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.name}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.email}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.phone}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      phone: e.target.value,
                    })
                  }
                />
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium">Department</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.department}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      department: e.target.value,
                    })
                  }
                />
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium">Job Title</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.jobTitle}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      jobTitle: e.target.value,
                    })
                  }
                />
              </div>

              {/* Contract Type */}
              <div>
                <label className="block text-sm font-medium">
                  Contract Type
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.contractType}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      contractType: e.target.value as
                        | "Full-time"
                        | "Part-time"
                        | "Contract"
                        | "Internship",
                    })
                  }
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              {/* Date of Joining */}
              <div>
                <label className="block text-sm font-medium">
                  Date of Joining
                </label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.dateOfJoining}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      dateOfJoining: e.target.value,
                    })
                  }
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.dateOfBirth}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      dateOfBirth: e.target.value,
                    })
                  }
                />
              </div>

              {/* Manager ID */}
              <div>
                <label className="block text-sm font-medium">Manager ID</label>
                <input
                  type="number"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.managerId || ""}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      managerId: e.target.value
                        ? parseInt(e.target.value)
                        : null,
                    })
                  }
                />
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-medium">Skills</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.skills.join(", ")}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      skills: e.target.value
                        .split(",")
                        .map((skill) => skill.trim()),
                    })
                  }
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium">Street</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.address.street}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      address: {
                        ...selectedEmployee.address,
                        street: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.address.city}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      address: {
                        ...selectedEmployee.address,
                        city: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">State</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.address.state}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      address: {
                        ...selectedEmployee.address,
                        state: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Postal Code</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.address.postalCode}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      address: {
                        ...selectedEmployee.address,
                        postalCode: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Country</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.address.country}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      address: {
                        ...selectedEmployee.address,
                        country: e.target.value,
                      },
                    })
                  }
                />
              </div>

              {/* Emergency Contact */}
              <div>
                <label className="block text-sm font-medium">
                  Emergency Contact Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.emergencyContact.name}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      emergencyContact: {
                        ...selectedEmployee.emergencyContact,
                        name: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Emergency Contact Phone
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.emergencyContact.phone}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      emergencyContact: {
                        ...selectedEmployee.emergencyContact,
                        phone: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Emergency Contact Relation
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.emergencyContact.relation}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      emergencyContact: {
                        ...selectedEmployee.emergencyContact,
                        relation: e.target.value,
                      },
                    })
                  }
                />
              </div>

              {/* Salary */}
              <div>
                <label className="block text-sm font-medium">
                  Salary Amount
                </label>
                <input
                  type="number"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.salary.amount}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      salary: {
                        ...selectedEmployee.salary,
                        amount: parseFloat(e.target.value),
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Salary Currency
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.salary.currency}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      salary: {
                        ...selectedEmployee.salary,
                        currency: e.target.value as
                          | "USD"
                          | "EUR"
                          | "GBP"
                          | "INR"
                          | "AUD"
                          | "CAD"
                          | "AED",
                      },
                    })
                  }
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                  <option value="AUD">AUD</option>
                  <option value="CAD">CAD</option>
                  <option value="AED">AED</option>
                </select>
              </div>

              {/* Work Schedule */}
              <div>
                <label className="block text-sm font-medium">Start Time</label>
                <input
                  type="time"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.workSchedule.startTime}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      workSchedule: {
                        ...selectedEmployee.workSchedule,
                        startTime: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">End Time</label>
                <input
                  type="time"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.workSchedule.endTime}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      workSchedule: {
                        ...selectedEmployee.workSchedule,
                        endTime: e.target.value,
                      },
                    })
                  }
                />
              </div>

              {/* Working Days */}
              <div>
                <label className="block text-sm font-medium">
                  Working Days
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.workSchedule.workingDays.join(", ")}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      workSchedule: {
                        ...selectedEmployee.workSchedule,
                        workingDays: e.target.value
                          .split(",")
                          .map((day) => day.trim()),
                      },
                    })
                  }
                />
              </div>

              {/* Performance Rating */}
              <div>
                <label className="block text-sm font-medium">
                  Performance Rating
                </label>
                <input
                  type="number"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.performanceRating || ""}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      performanceRating: e.target.value
                        ? parseFloat(e.target.value)
                        : null,
                    })
                  }
                />
              </div>

              {/* Probation Status */}
              <div>
                <label className="block text-sm font-medium">
                  Probation Status
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.probationStatus}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      probationStatus: e.target.value,
                    })
                  }
                />
              </div>

              {/* Projects Assigned */}
              <div>
                <label className="block text-sm font-medium">
                  Projects Assigned
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.projectsAssigned.join(", ")}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      projectsAssigned: e.target.value
                        .split(",")
                        .map((project) => project.trim()),
                    })
                  }
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium">Notes</label>
                <textarea
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedEmployee.notes}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      notes: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Save/Cancel Buttons */}
            <div className="mt-6 flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
