import React, { useState } from "react";
import Todoitem from "./Todoitem";
import Form from  "./Form"
import Todolist from "./Todolist";
import Header from "./Header";

const Todo = () => {
  const [values, setValues] = useState([]);

 const count= values.filter((i)=>i.done).length;
 console.log(count)
 
 
  return (
    <div>
      <Header/>
      <h3>COMPLETED{count}</h3>
      <Form  values={values} setValues={setValues} />
      <Todolist values={values
        } setValues={setValues}/>
      
    </div>
  );
};

export default Todo;
