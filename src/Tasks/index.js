import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="listTasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`listTasks__item
          ${task.done && hideDone ? "listTasks__item--hidden" : ""}`}
      >
        <button className="list__button list__button--toggleDone">
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`listTasks__content
            ${task.done ? "listTasks__content--done" : ""}`}
        >
          {task.content}
        </span>
        <button className="list__button list__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
