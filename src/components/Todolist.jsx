import React from 'react'
import Todoitem from './Todoitem'
import styles from './todolist.module.css'
const Todolist = ({values,setValues}) => {

  const sortedTodos=values.slice().sort((a,b)=>Number(a.done)-Number(b.done));
  return (
    <div className={styles.list}> 

{sortedTodos.map((item)=>(
  
       <Todoitem key={item.name} item={item} values={values} setValues={setValues} />

       
      ))}
    </div>
  )
}

export default Todolist