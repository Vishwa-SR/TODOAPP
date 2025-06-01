import styles from "./form.module.css";
import React, { useState } from "react";

const Form = ({ values, setValues }) => {
  
  // const [value, setValue] = useState("");
  const [value,setValue]=useState({name:"",done:false});

  function handleSubmit(e) {
    e.preventDefault();
    setValues([...values, value]);
    setValue({name:"",done:false});
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputcontainer}> 
      <input
        className={styles.input}
        onChange={(e) => setValue({name:e.target.value,done:false})}
        type="text"
        value={value.name}
        placeholder="Enter todosssss"
      />
      <button className={styles.btn} type="submit">
        Add
      </button>
      </div>
    </form>
  );
};

export default Form;
