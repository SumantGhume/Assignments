import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const EditEmployee = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    salary: "",
    address: "",
    category_id: "",
    image: "", // <-- NEW
  });

  const navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const [imageFile, setImageFile] = useState(null);


  useEffect(() => {
    //! Show Category Start

    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        console.log(result.data);
        if (result.data.Status) {
          console.log("Set data: ", result.data.Result);
          setCategory(result.data.Result);

          // navigate("/dashboard/employee");
        } else {
          alert("Error at axios ", result.data.Error);
        }
      }, [])
      .catch((err) => console.log(err));

    //! Show Category End

    //! Show Employee Start

    axios
      .get("http://localhost:3000/auth/employee/" + id)
      .then((result) => {
        console.log(result.data);
        if (result.data.Status) {
          console.log("Set data at Edit axios: ", result.data.Result);
          setEmployee({
            name: result.data.Result[0].name,
            email: result.data.Result[0].email,
            salary: result.data.Result[0].salary,
            address: result.data.Result[0].address,
            category_id: result.data.Result[0].category_id,
            image: result.data.Result[0].image, // <-- ADD THIS
          });
        } else {
          alert("Error at axios ", result.data.Error);
        }
      })
      .catch((err) => console.log(err));

    //! Show Employee End
  }, []);

  // ! Edit Employee Start
  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", employee.name);
  formData.append("email", employee.email);
  formData.append("salary", employee.salary);
  formData.append("address", employee.address);
  formData.append("category_id", employee.category_id);
  formData.append("existingImage", employee.image); // fallback

  if (imageFile) {
    formData.append("image", imageFile); // ✅ only append if file is selected
  }

  await axios
    .post(`http://localhost:3000/auth/edit_employee/${id}`, formData)
    .then((result) => {
      if (result.data.Status) {
        navigate("/dashboard/employee");
      } else {
        alert(result.data.Error);
      }
    })
    .catch((error) => console.log(error));
};


  // ! Edit Employee End

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 ">
      <div className="p-3 rounded w-50 border ">
        {/* <div className="text-warning">{error && error}</div> */}
        <h2>Edit Employee</h2>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="mb-3 col-12">
            <label htmlFor="name">
              <strong>Employee name:</strong>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter employee name"
              value={employee.name}
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
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
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
              value={employee.salary}
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
              value={employee.address}
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
              value={employee.category_id}
              onChange={(e) =>
                setEmployee({ ...employee, category_id: e.target.value })
              }
            >
              {Array.isArray(category) &&
                category.map((c, i) => {
                  return (
                    <option value={c.id} key={i}>
                      {c.name}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="image">Change Image (optional):</label>
            <input
              type="file"
              name="image"
              className="form-control rounded-0"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </div>

          {/* Preview (optional) */}
          {typeof employee.image === "string" && employee.image && (
            <div className="mb-3">
              <label>Current Image Preview:</label>
              <br />
              <img
                src={`http://localhost:3000/Images/${employee.image}`}
                alt="Current"
                width="100"
              />
            </div>
          )}

          <button className="btn btn-info w-100 rounded-4 mb-2">
            Edit employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
