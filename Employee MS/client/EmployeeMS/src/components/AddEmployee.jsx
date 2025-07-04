import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const AddEmployee = () => {
  //! Show Category Start
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        console.log(result.data);
        if (result.data.Status) {
          console.log("Set data: ", result.data.Result);
          setCategory(result.data.Result);
        } else {
          alert("Error at axios ", result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  //! Show Category End

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    category_id: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", employee.name);
    formData.append("password", employee.password);
    formData.append("address", employee.address);
    formData.append("email", employee.email);
    formData.append("salary", employee.salary);
    formData.append("image", employee.image);
    formData.append("category_id", employee.category_id);

    await axios
      .post("http://localhost:3000/auth/add_employee", formData)
      .then((result) => {
        console.log("employee added: ", result);
        if (result.data.Status) {
          navigate("/dashboard/employee");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 ">
      <div className="p-3 rounded w-50 border ">
        {/* <div className="text-warning">{error && error}</div> */}
        <h2>Add Employee</h2>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Employee name:</strong>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter employee name"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="salary">
              <strong>Salary:</strong>
            </label>
            <input
              type="number"
              name="salary"
              placeholder="Enter salary"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address">
              <strong>Address:</strong>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category">
              <strong>Category:</strong>
            </label>
            <select
              name="category"
              id="category"
              className="form-select"
              onChange={(e) =>
                setEmployee({ ...employee, category_id: e.target.value })
              }
            >
              {category.map((c, i) => {
                return (
                  <option value={c.id} key={i}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="image">Select Image:</label>
            <input
              type="file"
              name="image"
              onChange={
                (e) => setEmployee({ ...employee, image: e.target.files[0] }) // send file object!
              }
              className="form-control rounded-0"
            />
          </div>

          <button className="btn btn-primary w-100 rounded-4 mb-2">
            Add employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
