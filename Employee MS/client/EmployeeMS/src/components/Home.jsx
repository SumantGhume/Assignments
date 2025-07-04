import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [Total, setTotal] = useState({
    adminTotal: "",
    salaryTotal: "",
    employeeTotal: "",
  });

  const [adminrecords, setAdminRecords] = useState([]);

  useEffect(() => {
    TotalCount();
    AdminRecords();
  }, []);

  const AdminRecords = () => {
    axios
      .get("http://localhost:3000/auth/admin_records")
      .then((result) => {
        if (result.data.Status) {
          console.log(result.data);
          setAdminRecords(result.data.Result)
        } else {
          console.log(result.data.Error);
        }
      })
      .catch((err) => {
        console.log("Error at axios in Admin count:", err);
      });
  };

  const TotalCount = () => {
    axios
      .get("http://localhost:3000/auth/total_count")
      .then((result) => {
        if (result.data.Status) {
          console.log(result.data);
          setTotal({
            adminTotal: result.data.Result[0].total_admins,
            salaryTotal: result.data.Result[0].total_salary,
            employeeTotal: result.data.Result[0].total_employees,
          });
        } else {
          console.log(result.data.Error);
        }
      })
      .catch((err) => {
        console.log("Error at axios in Admin count:", err);
      });
  };

  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Admin</h4>
            <hr />
            <div className="text-lg-start m-lg-5">
              <h5>Total: {Total.adminTotal}</h5>
            </div>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Employee: </h4>
            <hr />
            <div className="text-lg-start">
              <h5>Total: {Total.employeeTotal}</h5>
            </div>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Salary: </h4>
            <hr />
            <div className="text-lg-start">
              <h5>Total: {Total.salaryTotal}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 px-5 pt-3">
        <h3>List of Admins</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {
            adminrecords.map((a,i) => (
              <tr key={i}>
              <td>{a.email}</td>
              <td>
                <button
                  
                  className="btn btn-info btn-sm me-2"
                >
                  Edit
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  
                >
                  Delete
                </button>
              </td>
            </tr>
            ))
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
