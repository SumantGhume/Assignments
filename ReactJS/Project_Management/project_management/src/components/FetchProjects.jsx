import React, { useEffect, useState } from 'react'

const FetchProjects = () => {
    const [projects, setProjects] = useState([])

    async function fetchAPI(){
        await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
        .then(response=>response.json())
        .then(data=>setProjects(data))
        .catch(err=>console.error(err))
        }
    useEffect(()=>{
            fetchAPI()
        },[])
        console.log(projects);
  return (
    <>
    <h1>Project List</h1>

    <div className='container' style={{overflowY:"scroll",height:"500px"}} >
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ProjectName</th>
      <th scope="col">Details</th>
      <th scope="col">priority</th>
      <th scope='col'>Department</th>
    </tr>
  </thead>
  <tbody>
    {projects.map((p,index)=>(
        <tr key={index}>
      <th scope="row">{p.id}</th>
      <td>{p.ProjectName}</td>
      <td>{p.Details}</td>
      <td>{p.priority}</td>
      <td>{p.Department}</td>
    </tr>
    ))}
    
    
  </tbody>
</table>
    </div>
    </>
  )
}

export default FetchProjects