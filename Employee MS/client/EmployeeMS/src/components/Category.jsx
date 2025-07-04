import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Category = () => {
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

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Category</h3>
      </div>
      <Link to="/dashboard/add_category" className="btn btn-success">
        Add Category
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
                {category.map((c, i) => (
                  <tr key={i}>
                    <td>{c.name}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
