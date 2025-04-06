import { createContext, useReducer } from "react";
import taskReducer from "./taskReducer";

export const TaskContext = createContext();


const TaskProvider =({children})=>{
  const initialState = []

  const [state,dispatch] = useReducer(taskReducer,initialState);

  return(
    <TaskContext.Provider value={{state,dispatch}}>
      {children}
    </TaskContext.Provider>
  )


}

export default TaskProvider;
