import React from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = React.useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        value={newTaskContent}
        className="form__input"
        placeholder="Treść zadania"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
