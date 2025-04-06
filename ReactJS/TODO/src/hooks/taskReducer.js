import { createContext, useReducer } from "react";



const taskReducer = (state , action) => {
  switch (action.type) {
    case "addTask":
      
      const newTask = {
        id: Date.now(),
        tName: action.payload.taskName,
        tDesc: action.payload.taskDiscription,
        complete: false
      };
      console.log(newTask);
      return [...state, newTask];

    case "editTask":
      return state.map((task)=>
      task.id === action.payload.id ? action.payload:task);

    case "deleteTask":
      // console.log(action.payload.index)
      //  const arr = state.splice(action.payload.index,1); 
      //  console.log(arr)
      //  arr = 
      // const handledelete=()=>{
      //   state.splice(action.payload.index,1);
      // }
      return state.filter((task)=> task.id !== action.payload.id);

    case "toggleComplete":
      console.log("vlaue sent:",action.payload.id)
      return state.map((task)=>{
        if( task.id === action.payload.id){
          console.log("value in array search:",task.id)
          task.id === action.payload.id ? {...task, complete: (task.complete = true)} : {...task, complete: (task.complete = false)}
          console.log("Value Changed:",task.complete)
         
          
        }
        console.log(task)

        // task.id === action.payload ? { ...task, complete: !task.complete } : task
          

      });

      // return [...state, {complete:status}]
      
    default:
      return state;
  }
};



export default taskReducer;

// console.log(action.payload.complete)
// const status = state[action.payload.index].complete;


// console.log(action.payload.complete)
// const status = action.payload.complete;
// console.log(status)
// return state

// case "toggleComplete":
//       return state.map((task)=>
//         task.id === action.payload.id ? {...task, complete: !task.completed} : task
//       );
