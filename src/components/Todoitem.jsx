import React from "react";
import styles from "./todoitem.module.css";

const Todoitem = ({ item, values, setValues }) => {
  function handledel(item) {
    console.log("clicked", item);
    setValues(values.filter((todo) => todo !== item));
  }
  function handledone(name) {
    const newvalues = values.map((item) =>
      item.name === name ? { ...item, done: !item.done } : item
    );

    setValues(newvalues);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        {" "}
        <h3 className={className} onClick={() => handledone(item.name)}>
          {item.name}
        </h3>
        <span>
          <button onClick={() => handledel(item)} className={styles.del}>
            X
          </button>
        </span>
        <hr className={styles.line} />
      </div>
    </div>
  );
};

export default Todoitem;
