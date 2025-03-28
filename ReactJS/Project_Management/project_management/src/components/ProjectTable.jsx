/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const ProjectTable = () => {
    const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  return (
   <>

<table className="table table-bordered table-striped shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Project Name</th>
            <th>Details</th>
            <th>Priority</th>
            <th>Department</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
   
   
   
   
   
   
   
   </>
  )
}

export default ProjectTable