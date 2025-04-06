import React, { useContext, useReducer, useState } from "react";
// import taskReducer from "../hooks/taskReducer";
import { TaskContext } from "../hooks/TaskContext";
import "bootstrap/dist/css/bootstrap.min.css";

const AddTask = () => {
  const [taskName, setTaskName] = useState();
  const [taskDiscription, setTaskDiscription] = useState();
  const [toggle,setToggle] = useState() 

  // const [state, dispatch] = useReducer(taskReducer, initialState)      ;

  const { state, dispatch } = useContext(TaskContext);

  // console.log("****************",state);
  const handlepayload = async (id) => {
    const sendata = await dispatch({
      type: "toggleComplete",

      payload: {
        id: id,
      },
    });
    return sendata;
  };

  return (
    <>
      <div className="container shadow pb-lg-5 pt-lg-5">
        <div className="mb-3">
          <label htmlFor="name" className="form-label ">
            Task Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Discription
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            onChange={(e) => setTaskDiscription(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() =>
            dispatch({
              type: "addTask",
              payload: { taskName: taskName, taskDiscription: taskDiscription },
            })
          }
        >
          Add Task
        </button>
      </div>

      <div className="container mt-lg-5 mb-lg-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {state && state.length > 0 ? (
             
              state.map((task, index) =>
                // {const [toggle,setToggle] = useState() },
                task ? ( // Ensure task is not undefined

                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td
                      className={
                        task.complete
                          ? "text-decoration-line-through"
                          : "fst-italic"
                      }
                    >
                      {task.tName}
                    </td>
                    <td
                      className={
                        task.complete
                          ? "text-decoration-line-through"
                          : "fst-italic"
                      }
                    >
                      {task.tDesc}
                    </td>
                    <td>
                      <button
                        className="btn btn-success m-lg-1"
                        onClick={() => handlepayload(task.id)}
                      >
                        Task Completed
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          dispatch({
                            type: "deleteTask",
                            payload: { id: task.id },
                          })
                        }
                      >
                        Delete Task
                      </button>
                    </td>
                  </tr>
                ) : null
              )
            ) : (
              <tr>
                <td colSpan="4">No Data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddTask;
